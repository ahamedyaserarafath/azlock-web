# GitHub Pages Deployment Guide

This guide will help you deploy the AzLock website to GitHub Pages for **free hosting**.

## 📋 Prerequisites

- A GitHub account
- Git installed on your computer
- This project code

## 🚀 Deployment Steps

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Repository settings:
   - **Name:** `azlock` (or any name you prefer)
   - **Visibility:** Public (required for free GitHub Pages)
   - **Do NOT** initialize with README (we already have one)
4. Click **"Create repository"**

### Step 2: Push Your Code to GitHub

Open terminal in the project directory and run:

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: AzLock website"

# Rename branch to main
git branch -M main

# Add your GitHub repository as remote
# Replace YOUR_USERNAME and REPO_NAME with your actual values
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** (top menu bar)
3. Click **"Pages"** in the left sidebar
4. Under **"Build and deployment"**:
   - **Source:** Select **"GitHub Actions"**
   - (NOT "Deploy from a branch")
5. Save (if needed)

### Step 4: Wait for Deployment

1. Go to the **"Actions"** tab in your repository
2. You should see a workflow running: **"Deploy to GitHub Pages"**
3. Wait for it to complete (usually 1-2 minutes)
4. Once complete, you'll see a green checkmark ✓

### Step 5: Access Your Website

Your website will be available at:

```
https://YOUR_USERNAME.github.io/REPO_NAME/
```

Example: `https://johndoe.github.io/azlock/`

## 🔄 Updating Your Website

Every time you push changes to the `main` branch, GitHub will automatically rebuild and redeploy your site:

```bash
# Make your changes to the code
# Then commit and push:

git add .
git commit -m "Update website content"
git push
```

The deployment will start automatically!

## 🛠️ Manual Deployment Trigger

You can also manually trigger deployment:

1. Go to **"Actions"** tab
2. Click **"Deploy to GitHub Pages"** workflow
3. Click **"Run workflow"** button
4. Select **"main"** branch
5. Click **"Run workflow"**

## 📁 What Gets Deployed

The GitHub Actions workflow:
1. Installs dependencies (`npm ci`)
2. Builds the static site (`npm run build`)
3. Exports to `out/` directory
4. Deploys the `out/` folder to GitHub Pages

## 🐛 Troubleshooting

### Deployment Failed

**Check the Actions tab:**
- Click on the failed workflow
- Expand the failed step to see error details
- Common issues:
  - Missing dependencies (check `package.json`)
  - Build errors (check component imports)
  - Permissions issues (check repository settings)

### 404 Page Not Found

**If you see 404 after deployment:**
1. Wait 2-3 minutes for DNS propagation
2. Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)
3. Verify the URL matches: `https://YOUR_USERNAME.github.io/REPO_NAME/`
4. Check if the workflow completed successfully in Actions tab

### Site Not Updating

**If changes aren't showing:**
1. Verify the workflow ran successfully in Actions tab
2. Clear browser cache
3. Try accessing in incognito/private mode
4. Check if you pushed to the correct branch (`main`)

### Build Warnings

**If you see warnings about images or links:**
- The site will still work
- GitHub Pages serves static files, so some Next.js features are disabled
- All your components are client-side, so no issues expected

## 📊 GitHub Pages Limits

- **Storage:** 1 GB
- **Bandwidth:** 100 GB/month
- **Build time:** 10 minutes max
- **Build frequency:** 10 deployments per hour

Your site is well under these limits!

## 🎨 Custom Domain (Optional)

Want to use your own domain like `azlock.com`?

1. Buy a domain from any registrar (GoDaddy, Namecheap, etc.)
2. Add a `CNAME` file to `public/` with your domain
3. Configure DNS settings in your registrar
4. Enable custom domain in GitHub Pages settings

## ✅ Success Checklist

- [ ] Repository created on GitHub
- [ ] Code pushed to `main` branch
- [ ] GitHub Pages enabled with "GitHub Actions" source
- [ ] Deployment workflow completed successfully
- [ ] Website accessible at GitHub Pages URL
- [ ] Changes auto-deploy on push

## 🎉 Next Steps

Your AzLock website is now live! Share the link:

- Add it to your GitHub repository description
- Share on social media
- Add to your README
- Submit to web directories

## 💡 Tips

1. **Custom 404 Page:** Add `app/not-found.tsx` for custom 404
2. **Analytics:** Add Google Analytics in `app/layout.tsx`
3. **SEO:** Already configured in metadata (good to go!)
4. **Performance:** Static site = lightning fast ⚡

---

**Need Help?**
- Check [GitHub Pages Documentation](https://docs.github.com/en/pages)
- Check [Next.js Static Export Docs](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- Open an issue in your repository

Happy deploying! 🚀
