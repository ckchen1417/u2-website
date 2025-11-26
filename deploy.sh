#!/bin/bash

# Deployment script for LearnHub Landing Page
# This script helps you quickly deploy your site

echo "🚀 LearnHub Deployment Helper"
echo "================================"
echo ""
echo "Choose your deployment method:"
echo ""
echo "1) Netlify (via CLI)"
echo "2) Vercel (via CLI)"
echo "3) GitHub Pages (setup)"
echo "4) Exit"
echo ""
read -p "Enter your choice (1-4): " choice

case $choice in
    1)
        echo ""
        echo "📦 Deploying to Netlify..."
        echo ""
        
        # Check if Netlify CLI is installed
        if ! command -v netlify &> /dev/null; then
            echo "Netlify CLI not found. Installing..."
            npm install -g netlify-cli
        fi
        
        echo "Running Netlify deployment..."
        netlify deploy --prod
        
        echo ""
        echo "✅ Deployment complete!"
        ;;
        
    2)
        echo ""
        echo "📦 Deploying to Vercel..."
        echo ""
        
        # Check if Vercel CLI is installed
        if ! command -v vercel &> /dev/null; then
            echo "Vercel CLI not found. Installing..."
            npm install -g vercel
        fi
        
        echo "Running Vercel deployment..."
        vercel --prod
        
        echo ""
        echo "✅ Deployment complete!"
        ;;
        
    3)
        echo ""
        echo "📦 Setting up GitHub Pages..."
        echo ""
        read -p "Enter your GitHub username: " username
        read -p "Enter your repository name: " repo
        
        echo ""
        echo "Initializing Git repository..."
        git init
        git add .
        git commit -m "Initial commit: LearnHub landing page"
        git branch -M main
        git remote add origin "https://github.com/$username/$repo.git"
        
        echo ""
        echo "Pushing to GitHub..."
        git push -u origin main
        
        echo ""
        echo "✅ Code pushed to GitHub!"
        echo ""
        echo "Next steps:"
        echo "1. Go to https://github.com/$username/$repo"
        echo "2. Click Settings → Pages"
        echo "3. Select 'main' branch as source"
        echo "4. Click Save"
        echo "5. Your site will be live at: https://$username.github.io/$repo"
        ;;
        
    4)
        echo "Exiting..."
        exit 0
        ;;
        
    *)
        echo "Invalid choice. Exiting..."
        exit 1
        ;;
esac

echo ""
echo "================================================"
echo "🎉 Thank you for using LearnHub!"
echo "================================================"

