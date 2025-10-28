# ⚡ Quick Deploy Guide

## 🚀 Deploy in 5 Minutes

### Step 1: Initialize Git
```bash
git init
git add .
git commit -m "Initial commit"
```

### Step 2: Push to GitHub
```bash
# Create repo on GitHub first, then:
git remote add origin https://github.com/YOUR_USERNAME/gold-price-tracker.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub**
4. Select your **gold-price-tracker** repository
5. Click **"Deploy site"** (settings auto-detected!)

### Done! 🎉
Your site will be live at: `https://YOUR-SITE-NAME.netlify.app`

---

## 📋 Pre-Deploy Test

```bash
npm run build
```
✅ Should complete without errors

---

## 🔧 Netlify Settings (Auto-Detected)

- **Build command**: `npm run build`
- **Publish directory**: `build`
- **Node version**: 18

No manual configuration needed!

---

## 🔄 Update After Deploy

```bash
git add .
git commit -m "Your changes"
git push
```
Netlify auto-deploys! 🎊

---

## 📚 Need More Help?

- **Full Guide**: See [DEPLOYMENT.md](DEPLOYMENT.md)
- **Checklist**: See [PRE_DEPLOY_CHECKLIST.md](PRE_DEPLOY_CHECKLIST.md)
- **Summary**: See [NETLIFY_SETUP_SUMMARY.md](NETLIFY_SETUP_SUMMARY.md)
