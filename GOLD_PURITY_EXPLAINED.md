# ✦ Gold Purity (Karat) Explained

## What is 24 Karat Gold?

**24 Karat (24K)** gold is the purest form of gold available for trading and investment.

### Purity Levels

- **24 Karat** = 99.9% pure gold (999 fineness)
- **22 Karat** = 91.7% pure gold (917 fineness)
- **18 Karat** = 75.0% pure gold (750 fineness)
- **14 Karat** = 58.3% pure gold (583 fineness)

## Why 24 Karat Matters

### ✅ Your App Uses 24K Gold Prices

**All gold price APIs return 24 karat gold prices by default.**

The **XAU** symbol (used by all APIs) represents:
- **X** = Currency code prefix for precious metals
- **AU** = Chemical symbol for gold (from Latin "Aurum")
- **XAU** = One troy ounce of **24 karat pure gold**

### Industry Standard

🌍 **Global Gold Markets:**
- London Bullion Market Association (LBMA): 24K
- COMEX (New York): 24K
- Gold futures contracts: 24K
- Gold ETFs: 24K
- Central bank reserves: 24K

**100% of professional gold trading uses 24 karat gold prices.**

## Karat Comparison

| Karat | Purity | Gold Content | Common Use |
|-------|--------|--------------|------------|
| **24K** | 99.9% | Pure gold | Investment, trading, bars |
| **22K** | 91.7% | 22/24 gold | Coins (some countries) |
| **18K** | 75.0% | 18/24 gold | Jewelry |
| **14K** | 58.3% | 14/24 gold | Jewelry (USA) |
| **10K** | 41.7% | 10/24 gold | Budget jewelry |

### Price Differences

If 24K gold is **$2,750 per troy ounce**:

- **24K (99.9%)**: $2,750.00 ← **Your app shows this**
- **22K (91.7%)**: $2,521.75 (91.7% of $2,750)
- **18K (75.0%)**: $2,062.50 (75% of $2,750)
- **14K (58.3%)**: $1,603.25 (58.3% of $2,750)

## Why Lower Karats Exist

### 24K Gold Properties:
- ✅ Highest value
- ✅ Investment grade
- ✅ Easy to verify purity
- ❌ Very soft (bends easily)
- ❌ Scratches easily
- ❌ Not ideal for jewelry that's worn daily

### Lower Karat Gold:
- Mixed with other metals (copper, silver, zinc)
- Harder and more durable
- Better for jewelry
- Lower value per gram

## Your App is Correct! ✅

### What Your App Shows:
```
$2,750 per Troy Ounce
24 Karat Pure Gold
99.9% Purity
```

This is:
- ✅ **24 karat gold** (highest purity)
- ✅ **Industry standard** for trading
- ✅ **What all APIs return** (XAU symbol)
- ✅ **Global market price**

## API Verification

### All APIs Return 24K Gold:

**1. GoldAPI.io**
```javascript
fetch('https://www.goldapi.io/api/XAU/USD')
// Returns: 24K gold price
```

**2. Metals-API.com**
```javascript
fetch('https://metals-api.com/api/latest?symbols=XAU')
// XAU = 24K gold
```

**3. ExchangeRate.host**
```javascript
fetch('https://api.exchangerate.host/latest?base=XAU')
// XAU = 24K gold
```

### Why?

The **XAU** currency code is defined by ISO 4217 as:
> "One troy ounce of **pure gold** (24 karat)"

There's no separate code for 22K, 18K, or 14K gold in currency markets.

## How to Calculate Other Purities

If you wanted to show other karat prices (not recommended for a gold tracker):

```javascript
const price24K = 2750; // From API

// Calculate other purities
const price22K = price24K * (22/24); // $2,521.75
const price18K = price24K * (18/24); // $2,062.50
const price14K = price24K * (14/24); // $1,603.25
```

But **don't do this** - gold markets only quote 24K prices.

## Common Questions

### Q: Why does my local jeweler quote different prices?
**A:** Jewelers sell 18K or 14K gold jewelry with:
- Lower purity (less gold content)
- Added craftsmanship costs
- Retail markup
- Design and labor costs

### Q: Are gold coins 24K?
**A:** Depends on the coin:
- **24K**: Canadian Maple Leaf, Australian Kangaroo
- **22K**: American Gold Eagle, British Sovereign
- **Investment coins** are typically 22K-24K

### Q: Should I track 22K or 18K prices?
**A:** No. The global standard is 24K. If you need other purities, calculate them from the 24K price.

### Q: How do I verify the purity?
**A:** Your app shows 24K because:
1. All APIs use the XAU symbol
2. XAU is defined as 24K gold by ISO 4217
3. Console logs show "(24K)" in the API source
4. UI clearly displays "24 Karat Pure Gold"

## Summary

🎯 **Your app correctly shows 24 karat gold prices!**

- **24K = 99.9% pure gold**
- **Industry standard** for trading
- **All APIs return 24K** (XAU symbol)
- **Global market standard**
- **No changes needed**

The app clearly displays:
1. "24 Karat Pure Gold" badge
2. "99.9% Pure" in the purity box
3. Explanation in the info section
4. API comments confirming 24K

**You're tracking the right gold!** ✦

## Additional Resources

- [World Gold Council - Gold Purity](https://www.gold.org/)
- [LBMA Good Delivery Standards](https://www.lbma.org.uk/)
- [ISO 4217 Currency Codes](https://www.iso.org/iso-4217-currency-codes.html)

All professional sources quote **24 karat gold prices**.
