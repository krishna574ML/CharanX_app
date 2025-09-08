Write-Host "🚀 CharanX Deployment Script" -ForegroundColor Green
Write-Host "=============================" -ForegroundColor Green

# Clean previous build
Write-Host "🧹 Cleaning previous build..." -ForegroundColor Yellow
Remove-Item -Recurse -Force build -ErrorAction SilentlyContinue

# Install dependencies
Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
npm install

# Build the project
Write-Host "🔨 Building project..." -ForegroundColor Yellow
npm run build

# Check if build was successful
if (Test-Path "build") {
    Write-Host "✅ Build successful!" -ForegroundColor Green
    Write-Host "📁 Build files created:" -ForegroundColor Cyan
    Get-ChildItem build
    
    Write-Host ""
    Write-Host "📋 Next steps:" -ForegroundColor Cyan
    Write-Host "1. Commit and push changes to GitHub" -ForegroundColor White
    Write-Host "2. Vercel will auto-deploy from main branch" -ForegroundColor White  
    Write-Host "3. Clear browser cache when testing" -ForegroundColor White
    Write-Host "4. Check charanx.com after deployment" -ForegroundColor White
    
} else {
    Write-Host "❌ Build failed!" -ForegroundColor Red
    Write-Host "Please check the error messages above." -ForegroundColor Red
}
