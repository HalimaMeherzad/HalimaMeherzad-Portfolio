@echo off
REM ============================================================
REM  Halima-Portfolio-New one-time setup
REM  1. Copies images from the original portfolio project
REM  2. Installs dependencies
REM  3. Runs a production build to verify everything works
REM  Double-click this file, or run it from a terminal in this
REM  folder:  setup.cmd
REM ============================================================
cd /d "%~dp0"

echo [1/3] Copying images from the original project...
if not exist "public\images" mkdir "public\images"
copy /Y "C:\Users\Dunya Computer\Documents\Halima-Portfolio-website\images\*.png" "public\images\"
if errorlevel 1 (
  echo ERROR: Could not copy images. Check that the original project folder still exists.
  pause
  exit /b 1
)

echo.
echo [2/3] Installing dependencies (this can take a few minutes)...
call npm install
if errorlevel 1 (
  echo ERROR: npm install failed. Check your Node.js installation: node -v
  pause
  exit /b 1
)

echo.
echo [3/3] Building for production...
call npm run build
if errorlevel 1 (
  echo ERROR: npm run build failed. Copy the error message above for debugging.
  pause
  exit /b 1
)

echo.
echo ============================================================
echo  Setup complete! Run the site with:  npm run dev
echo ============================================================
pause
