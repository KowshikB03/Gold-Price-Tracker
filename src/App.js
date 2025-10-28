import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, DollarSign, RefreshCw, Menu, X } from 'lucide-react';

function App() {
  const [goldPrice, setGoldPrice] = useState(null);
  const [previousPrice, setPreviousPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(null);
  const [dataSource, setDataSource] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const fetchGoldPrice = async () => {
    try {
      setLoading(true);
      setError(null);
      
      let price = null;
      let apiSource = '';
      
      // NOTE: All APIs return 24 karat (pure gold) prices by default
      // XAU is the ISO 4217 currency code for one troy ounce of pure gold (24K)
      
      // Try Method 1: GoldAPI.io public endpoint (returns 24K gold)
      if (!price) {
        try {
          const response = await fetch('https://www.goldapi.io/api/XAU/USD');
          if (response.ok) {
            const data = await response.json();
            // GoldAPI.io returns 24 karat gold prices
            if (data.price) {
              price = data.price;
              apiSource = 'GoldAPI.io';
              console.log('Using GoldAPI.io (24K):', price);
            }
          }
        } catch (e) {
          console.log('GoldAPI.io failed, trying next...');
        }
      }
      
      // Try Method 2: Metals-API.com (returns 24K gold)
      if (!price) {
        try {
          const response = await fetch('https://metals-api.com/api/latest?access_key=demo&base=USD&symbols=XAU');
          if (response.ok) {
            const data = await response.json();
            // XAU symbol represents 24 karat pure gold
            if (data.rates?.XAU) {
              // Convert: XAU rate is USD per ounce of 24K gold
              price = 1 / data.rates.XAU;
              apiSource = 'Metals-API.com';
              console.log('Using Metals-API.com (24K):', price);
            }
          }
        } catch (e) {
          console.log('Metals-API.com failed, trying next...');
        }
      }
      
      // Try Method 3: Skip for now (placeholder for future APIs)
      
      // Try Method 4: Forex API with gold (XAU = 24K gold)
      if (!price) {
        try {
          const response = await fetch('https://api.exchangerate.host/latest?base=XAU&symbols=USD');
          if (response.ok) {
            const data = await response.json();
            // XAU represents 24 karat pure gold
            if (data.rates?.USD) {
              price = data.rates.USD;
              apiSource = 'ExchangeRate.host';
              console.log('Using ExchangeRate.host (24K):', price);
            }
          }
        } catch (e) {
          console.log('ExchangeRate.host failed, trying next...');
        }
      }
      
      // Method 5: If all APIs fail, use realistic simulated data based on current market
      if (!price) {
        // Current 24K gold price is around $2,700-$2,800 per troy ounce (Oct 2024)
        // Generate realistic price with small fluctuations for 24 karat pure gold
        const basePrice = 3900; // 24K gold price - Updated to reflect current market
        const variation = (Math.random() - 0.5) * 100; // ±$50 variation
        price = basePrice + variation;
        apiSource = 'Simulated Data';
        
        console.log('⚠️ Using simulated 24K gold price data for demonstration');
        console.log('💡 For real-time data, consider getting a free API key from goldapi.io');
      }
      
      // Store previous price for comparison
      if (goldPrice) {
        setPreviousPrice(goldPrice);
      }
      
      setGoldPrice(price);
      setDataSource(apiSource);
      setLastUpdate(new Date());
      setLoading(false);
      
      // Log which source was used
      if (apiSource) {
        console.log(`📊 Data source: ${apiSource} | Price: $${price.toFixed(2)}`);
      }
    } catch (err) {
      setError('Unable to fetch gold price. Please try again.');
      setLoading(false);
      console.error('Error fetching gold price:', err);
    }
  };

  useEffect(() => {
    // Fetch immediately on mount
    fetchGoldPrice();
    
    // Set up auto-refresh every 30 seconds
    const interval = setInterval(fetchGoldPrice, 30000);
    
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPriceChange = () => {
    if (!goldPrice || !previousPrice) return null;
    return goldPrice - previousPrice;
  };

  const getPriceChangePercent = () => {
    if (!goldPrice || !previousPrice) return null;
    return ((goldPrice - previousPrice) / previousPrice) * 100;
  };

  const priceChange = getPriceChange();
  const priceChangePercent = getPriceChangePercent();
  const isPositive = priceChange > 0;
  const isNegative = priceChange < 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      {/* Navbar */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Title */}
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-yellow-400 to-amber-500 p-2 rounded-lg">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Gold Price Tracker</h1>
                <p className="text-xs text-gray-500">24K Pure Gold</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <a href="#home" className="text-gray-600 hover:text-gold-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-600 hover:text-gold-600 transition-colors">About</a>
              <a href="#docs" className="text-gray-600 hover:text-gold-600 transition-colors">Documentation</a>
              <button
                onClick={fetchGoldPrice}
                disabled={loading}
                className="bg-gradient-to-r from-gold-500 to-amber-500 hover:from-gold-600 hover:to-amber-600 text-white px-4 py-2 rounded-lg font-semibold transition-all text-sm disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 inline mr-1 ${loading ? 'animate-spin' : ''}`} />
                Refresh
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col gap-3">
                <a href="#home" className="text-gray-600 hover:text-gold-600 transition-colors py-2">Home</a>
                <a href="#about" className="text-gray-600 hover:text-gold-600 transition-colors py-2">About</a>
                <a href="#docs" className="text-gray-600 hover:text-gold-600 transition-colors py-2">Documentation</a>
                <button
                  onClick={fetchGoldPrice}
                  disabled={loading}
                  className="bg-gradient-to-r from-gold-500 to-amber-500 text-white px-4 py-2 rounded-lg font-semibold text-sm disabled:opacity-50"
                >
                  <RefreshCw className={`w-4 h-4 inline mr-1 ${loading ? 'animate-spin' : ''}`} />
                  Refresh Price
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Real-Time Gold Price
          </h2>
          <p className="text-gray-600">
            24 Karat Pure Gold • Per Troy Ounce (31.1g)
          </p>
        </div>

        {/* Main Layout - Side by Side */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Info Card */}
          <div className="lg:col-span-3 bg-white/80 backdrop-blur rounded-2xl shadow-lg p-6 h-fit">
            <h2 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="text-yellow-500">✦</span> 24 Karat Gold
            </h2>
            <div className="space-y-3">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3">
                <p className="text-sm text-yellow-900">
                  <strong>Purity:</strong><br/>
                  • 99.9% pure gold<br/>
                  • Highest purity available<br/>
                  • Standard for trading<br/>
                  • Investment grade
                </p>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-3">
                <p className="text-sm text-blue-900">
                  <strong>Lower Karats:</strong><br/>
                  • 22K = 91.7% gold<br/>
                  • 18K = 75.0% gold<br/>
                  • 14K = 58.3% gold<br/>
                  • Used for jewelry
                </p>
              </div>
            </div>
          </div>

          {/* Center - Main Price Card */}
          <div className="lg:col-span-6 bg-white rounded-3xl shadow-2xl p-8">
            {loading && !goldPrice ? (
              <div className="text-center py-12">
                <RefreshCw className="w-12 h-12 text-gold-500 animate-spin mx-auto mb-4" />
                <p className="text-gray-600">Loading gold price...</p>
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-4">
                  {error}
                </div>
                <button
                  onClick={fetchGoldPrice}
                  className="bg-gold-500 hover:bg-gold-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Try Again
                </button>
              </div>
            ) : (
              <>
                {/* Current Price */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 px-4 py-1 rounded-full mb-3">
                    <span className="text-yellow-600 font-bold text-sm">✦ 24 KARAT PURE GOLD ✦</span>
                  </div>
                  <p className="text-gray-500 text-sm uppercase tracking-wide mb-2">
                    Current Price (per Troy Ounce)
                  </p>
                  <div className="text-6xl font-bold text-gray-800 mb-2">
                    ${goldPrice?.toFixed(2)}
                  </div>
                  <p className="text-xs text-gray-400 mb-4">
                    1 troy oz = 31.1 grams • 24K = 99.9% pure gold
                  </p>
                  
                  {/* Price Change */}
                  {priceChange !== null && (
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
                      isPositive ? 'bg-green-100 text-green-700' : 
                      isNegative ? 'bg-red-100 text-red-700' : 
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {isPositive && <TrendingUp className="w-5 h-5" />}
                      {isNegative && <TrendingDown className="w-5 h-5" />}
                      <span className="font-semibold">
                        {priceChange > 0 ? '+' : ''}{priceChange.toFixed(2)} USD
                      </span>
                      <span className="text-sm">
                        ({priceChangePercent > 0 ? '+' : ''}{priceChangePercent?.toFixed(2)}%)
                      </span>
                    </div>
                  )}
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-gold-50 to-amber-50 p-4 rounded-xl">
                    <p className="text-gray-600 text-sm mb-1">Purity</p>
                    <p className="text-xl font-semibold text-gray-800">24 Karat</p>
                    <p className="text-xs text-gray-500 mt-1">99.9% Pure</p>
                  </div>
                  <div className="bg-gradient-to-br from-gold-50 to-amber-50 p-4 rounded-xl">
                    <p className="text-gray-600 text-sm mb-1">Unit</p>
                    <p className="text-xl font-semibold text-gray-800">Troy Ounce</p>
                    <p className="text-xs text-gray-500 mt-1">31.1 grams</p>
                  </div>
                  <div className="bg-gradient-to-br from-gold-50 to-amber-50 p-4 rounded-xl">
                    <p className="text-gray-600 text-sm mb-1">Currency</p>
                    <p className="text-xl font-semibold text-gray-800">USD</p>
                    <p className="text-xs text-gray-500 mt-1">US Dollar</p>
                  </div>
                </div>

                {/* Last Update & Data Source */}
                {lastUpdate && (
                  <div className="text-center text-sm space-y-1">
                    <div className="text-gray-500">
                      Last updated: {lastUpdate.toLocaleTimeString()}
                    </div>
                    {dataSource && (
                      <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                        dataSource === 'Simulated Data' 
                          ? 'bg-yellow-100 text-yellow-800' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        <span className="w-2 h-2 rounded-full bg-current"></span>
                        {dataSource === 'Simulated Data' ? 'Demo Mode' : `Live: ${dataSource}`}
                      </div>
                    )}
                  </div>
                )}

                {/* Refresh Button */}
                <div className="text-center mt-6">
                  <button
                    onClick={fetchGoldPrice}
                    disabled={loading}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-amber-500 hover:from-gold-600 hover:to-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
                    Refresh Price
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Right Info Card */}
          <div className="lg:col-span-3 bg-white/80 backdrop-blur rounded-2xl shadow-lg p-6 h-fit">
            <h2 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="text-blue-500">📏</span> Troy Ounce
            </h2>
            <div className="space-y-3">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-3">
                <p className="text-sm text-blue-900">
                  <strong>Measurement:</strong><br/>
                  • 1 Troy Oz = 31.1g<br/>
                  • Standard for precious metals<br/>
                  • Used globally<br/>
                  • Different from regular oz
                </p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-400 p-3">
                <p className="text-sm text-green-900">
                  <strong>Market Info:</strong><br/>
                  • Updates every 30 sec<br/>
                  • USD currency<br/>
                  • Real-time data<br/>
                  • Global standard
                </p>
              </div>
              <div className="bg-purple-50 border-l-4 border-purple-400 p-3">
                <p className="text-sm text-purple-900">
                  <strong>APIs Used:</strong><br/>
                  • GoldAPI.io<br/>
                  • Metals-API.com<br/>
                  • ExchangeRate.host<br/>
                  • Fallback: Demo data
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
