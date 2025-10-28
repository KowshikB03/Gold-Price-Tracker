# 🔧 Troubleshooting Guide

## Common Issues and Solutions

### "Unable to fetch gold price" Error

**Why it happens:**
- The free APIs may have rate limits or CORS restrictions
- Network connectivity issues
- API services might be temporarily down

**Solution:**
The app now has **automatic fallback** built-in:

1. **First**, it tries Metals.live API
2. **Then**, it tries MetalPriceAPI.com
3. **Finally**, it uses simulated realistic data

So the app will **always work** - even if all APIs fail, you'll see realistic simulated gold prices for demonstration purposes.

### How to Use a Real API Key (Optional)

If you want guaranteed real-time data, you can sign up for a free API key:

#### Option 1: GoldAPI.io
1. Sign up at https://www.goldapi.io/
2. Get your free API key
3. Update `src/App.js` line 24 to use your key:
```javascript
const response = await fetch('https://www.goldapi.io/api/XAU/USD', {
  headers: {
    'x-access-token': 'YOUR_API_KEY_HERE'
  }
});
```

#### Option 2: MetalPriceAPI.com
1. Sign up at https://metalpriceapi.com/
2. Get your free API key
3. Replace 'demo' with your key in line 37 of `src/App.js`

### App Won't Start

**Check:**
- Node.js is installed: `node --version`
- Dependencies are installed: `npm install`
- Port 3000 is available (not used by another app)

**Solution:**
```bash
# Kill any process on port 3000
npx kill-port 3000

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Start again
npm start
```

### Prices Not Updating

**Check:**
- Internet connection is active
- Browser console for any errors (F12 → Console tab)
- The "Last updated" timestamp should change every 30 seconds

**Solution:**
- Click the "Refresh Price" button manually
- Refresh the browser page (F5)
- Check browser console for specific error messages

### Styling Looks Wrong

**Solution:**
```bash
# Rebuild Tailwind CSS
npm run build
npm start
```

## Need More Help?

1. Check the browser console (F12) for detailed error messages
2. Look at the terminal where `npm start` is running
3. Make sure all files are saved
4. Try restarting the development server

## Understanding the Data

- **Troy Ounce**: Standard unit for precious metals (31.1 grams)
- **USD**: United States Dollar
- **Simulated Data**: If you see prices around $2,000-$2,100 that change slightly, the app is using simulated data because APIs are unavailable
- **Real Data**: Actual market prices will vary more significantly based on real market conditions

The app is designed to **always work**, so you can learn and demonstrate React features even without API access!
