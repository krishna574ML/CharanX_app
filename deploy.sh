#!/bin/bash

echo "🚀 CharanX Deployment Script"
echo "============================="

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf build

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building project..."
npm run build

# Check if build was successful
if [ -d "build" ]; then
    echo "✅ Build successful!"
    echo "📁 Build files created:"
    ls -la build/
    
    echo ""
    echo "📋 Next steps:"
    echo "1. Commit and push changes to GitHub"
    echo "2. Vercel will auto-deploy from main branch"
    echo "3. Clear browser cache when testing"
    echo "4. Check charanx.com after deployment"
    
else
    echo "❌ Build failed!"
    echo "Please check the error messages above."
fi
