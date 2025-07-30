@echo off
echo 🔄 Rebuilding TalentrixRecruit with your latest changes...
echo.

REM Kill any existing server on port 5000
echo 🛑 Stopping existing server...
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :5000') do (
    taskkill /PID %%a /F >nul 2>&1
)

REM Build client
echo 📦 Building client (this includes your changes to home.tsx)...
node_modules\.bin\vite build
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Client build failed!
    pause
    exit /b 1
)

REM Build server
echo 📦 Building server...
node_modules\.bin\esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Server build failed!
    pause
    exit /b 1
)

echo ✅ Build complete!
echo 🚀 Starting server...
echo.
echo 🌐 Your site will be available at: http://localhost:5000
echo 💡 Your changes to home.tsx are now live!
echo.
echo Press Ctrl+C to stop the server
echo.

REM Start server
node dist/index.js
