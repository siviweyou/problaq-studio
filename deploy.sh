#!/bin/bash

# 🚀 Quick Deploy Script for Problaq Studio
# This builds your frontend for production

echo "🔨 Building Problaq Studio for Production..."
echo ""

# Navigate to frontend
cd frontend

# Install dependencies (if needed)
echo "📦 Checking dependencies..."
npm install

# Build for production
echo "🏗️  Building frontend..."
npm run build

echo ""
echo "✅ Build Complete!"
echo ""
echo "📁 Your production files are in: frontend/dist/"
echo ""
echo "📤 Next steps:"
echo "1. Upload everything in frontend/dist/ to your hosting public_html/"
echo "2. Upload everything in backend/ to public_html/api/"
echo "3. Run 'npm install --production' in the api/ folder on your server"
echo "4. Start the backend with PM2 or cPanel Node.js App"
echo ""
echo "📚 Full instructions: Read DEPLOYMENT-GUIDE.md"
echo ""
echo "🌐 Once deployed, visit: https://por.problaq.co.za"
echo ""
