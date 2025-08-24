@echo off
echo 🚀 Building your website for deployment...
echo.

npm run build

echo.
echo ✅ Build completed successfully!
echo.
echo 📁 Opening dist folder for deployment...
echo.
echo 🎯 Next steps:
echo 1. Go to netlify.com
echo 2. Click "Add new site" → "Deploy manually"
echo 3. Drag and drop the dist folder that just opened
echo 4. Your website will be live in 30 seconds!
echo.

explorer dist

pause
