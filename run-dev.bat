@echo off
echo Starting TalentrixRecruit Development Server...
echo.

REM Set environment variables
set NODE_ENV=development
set PORT=5000

REM Try different methods to start the server
echo Attempting to start server...

REM Method 1: Try npm run dev
echo [1/4] Trying npm run dev...
npm run dev
if %ERRORLEVEL% EQU 0 goto :success

REM Method 2: Try npx directly
echo [2/4] Trying npx cross-env...
npx cross-env NODE_ENV=development tsx server/index.ts
if %ERRORLEVEL% EQU 0 goto :success

REM Method 3: Try tsx directly
echo [3/4] Trying tsx directly...
npx tsx server/index.ts
if %ERRORLEVEL% EQU 0 goto :success

REM Method 4: Try node with tsx loader
echo [4/4] Trying node with tsx loader...
node --loader tsx/esm server/index.ts
if %ERRORLEVEL% EQU 0 goto :success

echo.
echo ERROR: All startup methods failed!
echo Please check the README for manual setup instructions.
echo.
pause
goto :end

:success
echo.
echo Server started successfully!
echo Open http://localhost:5000 in your browser
echo.

:end
