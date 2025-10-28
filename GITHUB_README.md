# 🏆 Gold Price Tracker

[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR-BADGE-ID/deploy-status)](https://app.netlify.com/sites/YOUR-SITE-NAME/deploys)

A beautiful, real-time gold price tracking application built with React. Track 24 karat pure gold prices with automatic updates every 30 seconds.

![Gold Price Tracker](https://via.placeholder.com/800x400/FCD34D/1F2937?text=Gold+Price+Tracker+Screenshot)

## ✨ Features

- 🔄 **Real-time Updates** - Automatic price refresh every 30 seconds
- 📊 **Price Trends** - Visual indicators showing price increases or decreases
- ✦ **24 Karat Gold** - Pure gold (99.9% purity) prices
- ⚖️ **Troy Ounce** - Industry standard measurement (31.1g)
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile
- 🎨 **Modern UI** - Clean, professional interface with TailwindCSS
- 🔍 **Data Source Indicator** - Shows if you're viewing live or demo data
- 🌐 **Multiple API Fallbacks** - Tries multiple sources for best reliability

## 🚀 Live Demo

**[View Live Demo](https://your-site-name.netlify.app)** ← Add your Netlify URL here

## 📸 Screenshots

### Desktop View
![Desktop](https://via.placeholder.com/800x500/FCD34D/1F2937?text=Desktop+View)

### Mobile View
![Mobile](https://via.placeholder.com/400x800/FCD34D/1F2937?text=Mobile+View)

## 🛠️ Built With

- **React 18** - JavaScript library for building user interfaces
- **TailwindCSS** - Utility-first CSS framework
- **Lucide React** - Beautiful, consistent icons
- **Gold Price APIs** - Real-time gold price data

## 📋 Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/gold-price-tracker.git
   cd gold-price-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   - Navigate to `http://localhost:3000`

## 🏗️ Build for Production

```bash
npm run build
```

The build folder will contain your production-ready application.

## 🌐 Deployment

This app is configured for easy deployment to Netlify.

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/YOUR_USERNAME/gold-price-tracker)

## 📊 API Information

The app uses multiple gold price APIs with automatic fallback:

1. **GoldAPI.io** - Primary source
2. **Metals-API.com** - Secondary source
3. **ExchangeRate.host** - Tertiary source
4. **Simulated Data** - Fallback for demonstration

For real-time data with guaranteed accuracy, see [GET_REAL_DATA.md](GET_REAL_DATA.md) for instructions on obtaining free API keys.

## 📖 Documentation

- [DEPLOYMENT.md](DEPLOYMENT.md) - Deployment guide for Netlify
- [GET_REAL_DATA.md](GET_REAL_DATA.md) - How to get real-time API data
- [GOLD_PURITY_EXPLAINED.md](GOLD_PURITY_EXPLAINED.md) - Understanding 24K gold
- [TROY_OUNCE_EXPLAINED.md](TROY_OUNCE_EXPLAINED.md) - Understanding troy ounces
- [TROUBLESHOOTING.md](TROUBLESHOOTING.md) - Common issues and solutions

## 🎯 Project Structure

```
gold-price-tracker/
├── public/
│   └── index.html
├── src/
│   ├── App.js          # Main application component
│   ├── index.js        # Entry point
│   └── index.css       # Global styles with Tailwind
├── netlify.toml        # Netlify configuration
├── tailwind.config.js  # Tailwind configuration
├── package.json        # Dependencies and scripts
└── README.md          # This file
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Your Name**

- GitHub: [@YOUR_USERNAME](https://github.com/YOUR_USERNAME)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/YOUR_PROFILE)

## 🙏 Acknowledgments

- Gold price data provided by various free APIs
- Icons by [Lucide](https://lucide.dev/)
- Styling with [TailwindCSS](https://tailwindcss.com/)
- Deployed on [Netlify](https://www.netlify.com/)

## 📊 Stats

![GitHub stars](https://img.shields.io/github/stars/YOUR_USERNAME/gold-price-tracker?style=social)
![GitHub forks](https://img.shields.io/github/forks/YOUR_USERNAME/gold-price-tracker?style=social)
![GitHub issues](https://img.shields.io/github/issues/YOUR_USERNAME/gold-price-tracker)
![GitHub license](https://img.shields.io/github/license/YOUR_USERNAME/gold-price-tracker)

## 🌟 Show your support

Give a ⭐️ if this project helped you!

---

**Made with ❤️ and React**
