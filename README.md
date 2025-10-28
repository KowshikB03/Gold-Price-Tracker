# 🏆 Gold Price Tracker

A beautiful, real-time gold price tracking application built with React. Track live gold prices with automatic updates every 30 seconds.

> **📊 Current Gold Price**: ~$2,700-$2,800 per troy ounce (Oct 2024)  
> **✦ Purity**: 24 Karat (99.9% pure gold) - industry standard for trading  
> **⚖️ Measurement**: Troy ounce (31.1g) - the global standard for precious metals  
> **🔔 Note**: App may show simulated data (~$2,750) due to free API limitations. See [GET_REAL_DATA.md](GET_REAL_DATA.md) for instructions to get live market prices.

## ✨ Features

- **Real-time Updates**: Automatic price refresh every 30 seconds
- **Price Trends**: Visual indicators showing price increases or decreases
- **Data Source Indicator**: Shows if you're viewing live or demo data
- **Modern UI**: Clean, responsive design with gradient backgrounds
- **Simple Interface**: Beginner-friendly with clear information display
- **Manual Refresh**: Option to manually update prices anytime
- **Multiple API Fallbacks**: Tries multiple sources for best reliability

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm start
   ```

3. **Open your browser**:
   - The app will automatically open at `http://localhost:3000`
   - If it doesn't open automatically, navigate to that URL manually

## 📱 How to Use

1. **View Current Price**: The main display shows the current gold price per troy ounce in USD
2. **Check Data Source**: Look for the badge below the price:
   - 🟢 Green "Live" = Real-time market data
   - 🟡 Yellow "Demo Mode" = Simulated data (see [GET_REAL_DATA.md](GET_REAL_DATA.md) to fix)
3. **Check Price Changes**: Green arrow = increase, red arrow = decrease
4. **Refresh Manually**: Click the "Refresh Price" button to get the latest price
5. **Auto-Updates**: Prices automatically update every 30 seconds

## 🎨 What's Included

- **React 18**: Latest version of React for optimal performance
- **TailwindCSS**: Modern styling with custom gold color palette
- **Lucide Icons**: Beautiful, consistent icons
- **Real-time API**: Live gold price data from metals.live API

## 🛠️ Build for Production

To create an optimized production build:

```bash
npm run build
```

The build folder will contain your production-ready application.

## 📊 API Information

This app uses multiple gold price APIs with automatic fallback:

1. **Primary**: Metals.live API (free, no authentication required)
2. **Secondary**: MetalPriceAPI.com (demo mode)
3. **Fallback**: Simulated realistic data for demonstration

The app automatically tries each API in order and falls back to simulated data if all APIs are unavailable. This ensures the app always works for demonstration purposes.

**For Production Use**: Consider signing up for a dedicated API key from:
- [GoldAPI.io](https://www.goldapi.io/) - Free tier available
- [MetalPriceAPI.com](https://metalpriceapi.com/) - Free tier available
- [Metals.live](https://metals.live/) - Free, no authentication

## 🎯 Perfect For

- Beginners learning React
- Anyone interested in tracking gold prices
- Educational purposes
- Portfolio projects

## 💡 Tips

- Keep the app open to see real-time price changes
- The price updates automatically every 30 seconds
- Internet connection required for live data
- Prices are for **24 karat pure gold** (99.9% purity) - the industry standard
- Measured in **troy ounces** (31.1 grams) - the global standard
- See [GOLD_PURITY_EXPLAINED.md](GOLD_PURITY_EXPLAINED.md) for karat information
- See [TROY_OUNCE_EXPLAINED.md](TROY_OUNCE_EXPLAINED.md) for measurement details

## 🤝 Support

If you encounter any issues:
1. Make sure you have a stable internet connection
2. Check that Node.js is properly installed
3. Try clearing your browser cache
4. Restart the development server

Enjoy tracking gold prices! 🌟
