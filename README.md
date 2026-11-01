# AOT UAE website

## Deploy to GitHub Pages

The GitHub Actions workflow in `.github/workflows/deploy-pages.yml` builds and deploys the site when changes are pushed to `main`. It can also be started manually from the repository's **Actions** tab.

1. In GitHub, open **Settings → Pages** and set the build and deployment source to **GitHub Actions**.
2. Push the site files to the `main` branch, or run **Deploy to GitHub Pages** from the **Actions** tab.
3. Check the workflow run for the published Pages URL.

The build reads the repository base path from the GitHub Pages configuration so client-side routes and public assets work both at the repository URL and when a custom domain is configured. The site currently uses `https://aotuae.com` for canonical and sitemap URLs; configure that domain in GitHub Pages and its DNS if it is the intended public address.

The `public/CNAME` file keeps the custom domain attached when the Pages workflow publishes a new build.
