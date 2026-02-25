# Deployment Guide for PunchAi

This guide provides step-by-step instructions for deploying your **PunchAi** website. Since this is a **React + Vite** application, it can be easily deployed to static hosting platforms like Vercel, Netlify, or GitHub Pages.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Build the Project](#build-the-project)
3. [Deploy to Vercel (Recommended)](#deploy-to-vercel-recommended)
4. [Deploy to Netlify](#deploy-to-netlify)
5. [Deploy to GitHub Pages](#deploy-to-github-pages)
6. [Manual Deployment (FTP/cPanel)](#manual-deployment-ftpcpanel)

---

## Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [Git](https://git-scm.com/)

---

## Build the Project

Before deploying manually or debugging, you can build the project locally to ensure everything works.

1.  Open your terminal in the project folder.
2.  Run the build command:
    ```bash
    npm run build
    ```
3.  This will create a `dist` folder containing your optimized production files (HTML, CSS, JS, images).
4.  To preview the production build locally:
    ```bash
    npm run preview
    ```

---

## Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy Vite apps. It offers zero-configuration deployment.

### Option 1: Using the Vercel Dashboard (Easiest)
1.  Push your code to a Git repository (GitHub, GitLab, or Bitbucket).
2.  Sign up or log in to [Vercel](https://vercel.com/).
3.  Click **"Add New..."** > **"Project"**.
4.  Import your **PunchAi** repository.
5.  Vercel will automatically detect that it's a **Vite** project.
6.  Click **Deploy**.
7.  Your site will be live in less than a minute!

### Option 2: Using Vercel CLI
1.  Install Vercel CLI globally:
    ```bash
    npm i -g vercel
    ```
2.  Run the deploy command from your project root:
    ```bash
    vercel
    ```
3.  Follow the prompts (accept defaults).
4.  To deploy to production:
    ```bash
    vercel --prod
    ```

---

## Deploy to Netlify

Netlify is another excellent platform for static sites.

### Option 1: Drag and Drop
1.  Run `npm run build` locally.
2.  Log in to [Netlify](https://app.netlify.com/).
3.  Drag and drop the `dist` folder into the "Sites" area.

### Option 2: Connect to Git
1.  Push your code to a Git repository.
2.  Log in to Netlify and click **"Add new site"** > **"Import from an existing project"**.
3.  Connect your Git provider.
4.  Select your repository.
5.  **Build Settings**:
    - **Build command**: `npm run build`
    - **Publish directory**: `dist`
6.  Click **Deploy site**.

---

## Deploy to GitHub Pages

To deploy to GitHub Pages, you need to configure `vite.config.js` and use a deployment script.

1.  **Update `vite.config.js`**:
    Add the `base` property with your repository name.
    ```javascript
    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'

    // https://vitejs.dev/config/
    export default defineConfig({
      plugins: [react()],
      base: '/your-repo-name/', // REPLACE 'your-repo-name' with your actual repository name
    })
    ```

2.  **Install `gh-pages`**:
    ```bash
    npm install gh-pages --save-dev
    ```

3.  **Update `package.json`**:
    Add these scripts to your `package.json`:
    ```json
    "scripts": {
      "predeploy": "npm run build",
      "deploy": "gh-pages -d dist",
      ...
    }
    ```

4.  **Deploy**:
    Run the deploy command:
    ```bash
    npm run deploy
    ```

---

## Manual Deployment (FTP/cPanel)

If you have traditional hosting (GoDaddy, HostGator, Namecheap, etc.):

1.  Run `npm run build`.
2.  Locate the `dist` folder in your project directory.
3.  Use an FTP client (like FileZilla) or your hosting's File Manager.
4.  Upload **all contents** inside the `dist` folder to your server's `public_html` (or `www`) directory.
    - *Note: Do not upload the `dist` folder itself, just the files inside it.*
5.  Your site should now be live.

---

### Troubleshooting

-   **Blank Page after Deployment**: Check the console for errors. Often caused by incorrect paths. Ensure your `base` path in `vite.config.js` matches your deployment URL (especially for GitHub Pages).
-   **Routing Issues**: If you add multiple pages later (using React Router), you might need a `_redirects` file for Netlify or `vercel.json` for Vercel to handle client-side routing.
    -   **Netlify**: Create `public/_redirects` with content: `/* /index.html 200`
    -   **Vercel**: Create `vercel.json` with content:
        ```json
        {
          "rewrites": [{ "source": "/(.*)", "destination": "/" }]
        }
        ```
