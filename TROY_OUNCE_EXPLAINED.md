# ⚖️ Troy Ounce Explained

## What is a Troy Ounce?

A **troy ounce** is the standard unit of measurement for precious metals (gold, silver, platinum, palladium) worldwide.

### Quick Facts

- **1 Troy Ounce** = 31.1035 grams
- **1 Regular Ounce (avoirdupois)** = 28.3495 grams
- **Difference**: Troy ounce is ~10% heavier than a regular ounce

## Why "Troy" Ounce?

The name comes from **Troyes, France**, a major trading city in medieval times where this measurement system was standardized for precious metals.

## Troy Ounce vs Regular Ounce

| Measurement | Weight | Used For |
|-------------|--------|----------|
| **Troy Ounce** | 31.1 grams | Gold, Silver, Platinum, Palladium |
| **Regular Ounce** | 28.35 grams | Food, everyday items, body weight |

### Example:
- **1 troy oz of gold** = 31.1 grams ≈ $2,750 (current market)
- **1 regular oz of gold** = 28.35 grams ≈ $2,505

⚠️ **Important**: When you see gold prices quoted as "per oz" or "per ounce", it **always** means troy ounce, not regular ounce.

## Why This Matters

### For Your App:
✅ **All gold price APIs return prices in troy ounces**  
✅ **This is the global standard - no conversion needed**  
✅ **Your app is already using the correct measurement**

### Real-World Examples:

**Gold Bar Weights:**
- Small bar: 1 troy oz (31.1g) ≈ $2,750
- Standard bar: 400 troy oz (12.4 kg) ≈ $1,100,000

**Gold Coins:**
- American Gold Eagle: 1 troy oz
- Canadian Gold Maple Leaf: 1 troy oz
- South African Krugerrand: 1 troy oz

## Quick Conversions

### From Troy Ounces:
- **1 troy oz** = 31.1 grams
- **1 troy oz** = 0.0311 kilograms
- **1 troy oz** = 1.097 regular ounces
- **1 troy oz** = 20 pennyweights (dwt)

### To Troy Ounces:
- **1 gram** = 0.0322 troy oz
- **1 kilogram** = 32.15 troy oz
- **1 regular ounce** = 0.911 troy oz

## Market Standard

### Global Gold Trading:
- 🌍 **LBMA (London)**: Troy ounces
- 🇺🇸 **COMEX (New York)**: Troy ounces
- 🇨🇭 **Swiss Gold**: Troy ounces
- 🇦🇪 **Dubai Gold**: Troy ounces

**100% of professional gold markets use troy ounces.**

## Your App is Correct! ✅

When your app shows:
```
$2,750 per Troy Ounce
```

This is:
- ✅ The correct unit (troy ounce)
- ✅ The global standard
- ✅ What all gold dealers use
- ✅ What all APIs return
- ✅ What financial news reports

## Common Confusion

### ❌ Wrong Thinking:
"I want to see the price per regular ounce"

### ✅ Correct Understanding:
Gold is **never** priced in regular ounces. It's always troy ounces. When someone says "gold is $2,750 per ounce", they mean troy ounce.

## If You Want Different Units

You can add conversions to show gold price in other units:

### Per Gram:
```javascript
const pricePerGram = goldPrice / 31.1035;
// $2,750 / 31.1 = ~$88.42 per gram
```

### Per Kilogram:
```javascript
const pricePerKg = goldPrice * 32.1507;
// $2,750 × 32.15 = ~$88,414 per kg
```

### Per Regular Ounce:
```javascript
const pricePerRegularOz = goldPrice * 0.91146;
// $2,750 × 0.911 = ~$2,506 per regular oz
```

## Summary

🎯 **Your app is using the correct measurement!**

- Gold = Troy Ounces (31.1g)
- This is the global standard
- All APIs use troy ounces
- No changes needed

The app clearly shows:
1. "Troy Ounce" in the unit display
2. "31.1 grams" for clarity
3. Explanation in the info section

**You're all set!** 🌟

## Additional Resources

- [LBMA Gold Price](https://www.lbma.org.uk/prices-and-data/precious-metal-prices)
- [Kitco Gold Charts](https://www.kitco.com/charts/livegold.html)
- [World Gold Council](https://www.gold.org/)

All of these sources quote gold in **troy ounces**.
