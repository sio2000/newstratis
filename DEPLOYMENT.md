# Netlify Deployment Guide

## Prerequisites
- Make sure you have a Netlify account
- Your code should be pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### Option 1: Deploy via Netlify UI (Recommended)
1. Go to [netlify.com](https://netlify.com) and sign in
2. Click "Add new site" → "Import an existing project"
3. Connect your Git repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click "Deploy site"

### Option 2: Deploy via Netlify CLI
1. Install Netlify CLI: `npm install -g netlify-cli`
2. Login: `netlify login`
3. Deploy: `netlify deploy --prod --dir=dist`

## Build Configuration
- The project uses Vite for building
- Build output goes to `dist/` folder
- `_redirects` file handles SPA routing
- `netlify.toml` contains deployment configuration

## Troubleshooting
- If build fails, check the build logs in Netlify
- Ensure Node.js version 18+ is used
- Verify all dependencies are installed (`npm install`)
- Check that the build command completes successfully locally

## Local Testing
Before deploying, test locally:
1. `npm install`
2. `npm run build`
3. `npm run preview`
