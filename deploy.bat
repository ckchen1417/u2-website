@echo off
REM Deployment script for LearnHub Landing Page (Windows)
REM This script helps you quickly deploy your site

echo ========================================
echo    LearnHub Deployment Helper
echo ========================================
echo.
echo Choose your deployment method:
echo.
echo 1) Netlify (via CLI)
echo 2) Vercel (via CLI)
echo 3) GitHub Pages (setup)
echo 4) Exit
echo.

set /p choice="Enter your choice (1-4): "

if "%choice%"=="1" goto netlify
if "%choice%"=="2" goto vercel
if "%choice%"=="3" goto github
if "%choice%"=="4" goto exit
goto invalid

:netlify
echo.
echo Deploying to Netlify...
echo.

REM Check if Netlify CLI is installed
where netlify >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo Netlify CLI not found. Installing...
    call npm install -g netlify-cli
)

echo Running Netlify deployment...
call netlify deploy --prod

echo.
echo Deployment complete!
goto end

:vercel
echo.
echo Deploying to Vercel...
echo.

REM Check if Vercel CLI is installed
where vercel >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo Vercel CLI not found. Installing...
    call npm install -g vercel
)

echo Running Vercel deployment...
call vercel --prod

echo.
echo Deployment complete!
goto end

:github
echo.
echo Setting up GitHub Pages...
echo.
set /p username="Enter your GitHub username: "
set /p repo="Enter your repository name: "

echo.
echo Initializing Git repository...
git init
git add .
git commit -m "Initial commit: LearnHub landing page"
git branch -M main
git remote add origin https://github.com/%username%/%repo%.git

echo.
echo Pushing to GitHub...
git push -u origin main

echo.
echo Code pushed to GitHub!
echo.
echo Next steps:
echo 1. Go to https://github.com/%username%/%repo%
echo 2. Click Settings -^> Pages
echo 3. Select 'main' branch as source
echo 4. Click Save
echo 5. Your site will be live at: https://%username%.github.io/%repo%
goto end

:exit
echo Exiting...
exit /b 0

:invalid
echo Invalid choice. Exiting...
exit /b 1

:end
echo.
echo ========================================
echo    Thank you for using LearnHub!
echo ========================================
pause

