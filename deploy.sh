#!/bin/bash

# Gold Price Tracker - Deployment Script
# This script helps prepare and deploy your app

echo "🏆 Gold Price Tracker - Deployment Helper"
echo "=========================================="
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "❌ Git repository not initialized"
    echo "Run: git init"
    exit 1
fi

echo "✅ Git repository found"
echo ""

# Check for uncommitted changes
if [[ -n $(git status -s) ]]; then
    echo "📝 You have uncommitted changes:"
    git status -s
    echo ""
    read -p "Do you want to commit these changes? (y/n) " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        read -p "Enter commit message: " commit_msg
        git add .
        git commit -m "$commit_msg"
        echo "✅ Changes committed"
    else
        echo "⚠️  Proceeding with uncommitted changes"
    fi
else
    echo "✅ No uncommitted changes"
fi

echo ""

# Test build
echo "🔨 Testing build..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful"
else
    echo "❌ Build failed. Please fix errors before deploying."
    exit 1
fi

echo ""

# Check if remote exists
if git remote | grep -q 'origin'; then
    echo "✅ Git remote 'origin' found"
    
    # Push to GitHub
    read -p "Push to GitHub? (y/n) " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        git push origin main
        echo "✅ Pushed to GitHub"
    fi
else
    echo "⚠️  No git remote 'origin' found"
    echo "Add your GitHub repository:"
    echo "git remote add origin https://github.com/YOUR_USERNAME/gold-price-tracker.git"
fi

echo ""
echo "🚀 Deployment Checklist:"
echo "========================"
echo "✅ Build tested successfully"
echo "✅ Code committed to Git"
echo ""
echo "Next steps:"
echo "1. Push to GitHub (if not done)"
echo "2. Go to Netlify.com"
echo "3. Import your GitHub repository"
echo "4. Deploy!"
echo ""
echo "See DEPLOYMENT.md for detailed instructions."
echo ""
echo "🎉 Good luck with your deployment!"
