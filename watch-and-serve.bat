@echo off
echo 🔄 TalentrixRecruit Development Mode with Auto-Rebuild
echo =====================================================
echo.
echo This script will:
echo 1. Build your project initially
echo 2. Start the server
echo 3. Watch for file changes and rebuild automatically
echo.
echo Press Ctrl+C to stop the server
echo.

REM Set environment variables
set NODE_ENV=development
set PORT=5000

REM Initial build
echo 📦 Building client...
node_modules\.bin\vite build
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Client build failed!
    pause
    exit /b 1
)

echo 📦 Building server...
node_modules\.bin\esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Server build failed!
    pause
    exit /b 1
)

echo ✅ Initial build complete!
echo.
echo 🚀 Starting server on http://localhost:5000
echo 💡 To see changes: modify files, then run this script again
echo.

REM Start the server
set NODE_ENV=production
node dist/index.js
