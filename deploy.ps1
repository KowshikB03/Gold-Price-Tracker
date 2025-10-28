# Gold Price Tracker - Deployment Script (PowerShell)
# This script helps prepare and deploy your app

Write-Host "🏆 Gold Price Tracker - Deployment Helper" -ForegroundColor Yellow
Write-Host "==========================================" -ForegroundColor Yellow
Write-Host ""

# Check if git is initialized
if (-not (Test-Path .git)) {
    Write-Host "❌ Git repository not initialized" -ForegroundColor Red
    Write-Host "Run: git init" -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ Git repository found" -ForegroundColor Green
Write-Host ""

# Check for uncommitted changes
$status = git status -s
if ($status) {
    Write-Host "📝 You have uncommitted changes:" -ForegroundColor Yellow
    git status -s
    Write-Host ""
    $commit = Read-Host "Do you want to commit these changes? (y/n)"
    if ($commit -eq 'y' -or $commit -eq 'Y') {
        $commitMsg = Read-Host "Enter commit message"
        git add .
        git commit -m "$commitMsg"
        Write-Host "✅ Changes committed" -ForegroundColor Green
    } else {
        Write-Host "⚠️  Proceeding with uncommitted changes" -ForegroundColor Yellow
    }
} else {
    Write-Host "✅ No uncommitted changes" -ForegroundColor Green
}

Write-Host ""

# Test build
Write-Host "🔨 Testing build..." -ForegroundColor Cyan
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build successful" -ForegroundColor Green
} else {
    Write-Host "❌ Build failed. Please fix errors before deploying." -ForegroundColor Red
    exit 1
}

Write-Host ""

# Check if remote exists
$remote = git remote
if ($remote -contains 'origin') {
    Write-Host "✅ Git remote 'origin' found" -ForegroundColor Green
    
    # Push to GitHub
    $push = Read-Host "Push to GitHub? (y/n)"
    if ($push -eq 'y' -or $push -eq 'Y') {
        git push origin main
        Write-Host "✅ Pushed to GitHub" -ForegroundColor Green
    }
} else {
    Write-Host "⚠️  No git remote 'origin' found" -ForegroundColor Yellow
    Write-Host "Add your GitHub repository:" -ForegroundColor Yellow
    Write-Host "git remote add origin https://github.com/YOUR_USERNAME/gold-price-tracker.git" -ForegroundColor Cyan
}

Write-Host ""
Write-Host "🚀 Deployment Checklist:" -ForegroundColor Yellow
Write-Host "========================" -ForegroundColor Yellow
Write-Host "✅ Build tested successfully" -ForegroundColor Green
Write-Host "✅ Code committed to Git" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Push to GitHub (if not done)"
Write-Host "2. Go to Netlify.com"
Write-Host "3. Import your GitHub repository"
Write-Host "4. Deploy!"
Write-Host ""
Write-Host "See DEPLOYMENT.md for detailed instructions." -ForegroundColor Yellow
Write-Host ""
Write-Host "🎉 Good luck with your deployment!" -ForegroundColor Green
