@echo off
echo Starting TalentrixRecruit in DEVELOPMENT MODE...
echo This will enable live reloading and hot module replacement
echo.

REM Set environment variables for development
set NODE_ENV=development
set PORT=5000

echo Environment: %NODE_ENV%
echo Port: %PORT%
echo.

REM Try to start development server with tsx
echo Starting development server...
echo Changes to your source files will be reflected immediately!
echo.
echo Server starting... Please wait...

REM Use the direct path to tsx executable
node_modules\.bin\tsx server\index.ts

REM If that fails, try alternative method
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo Primary method failed, trying alternative...
    node --loader tsx/esm server/index.ts
)

REM If still failing, show error message
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ERROR: Could not start development server
    echo Please check that all dependencies are installed
    echo Try running: npm install
    echo.
    pause
)
