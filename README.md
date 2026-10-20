# VERDANT LIVING storefront

A responsive storefront made with plain HTML, CSS, and JavaScript. No Node.js, npm install, build step, or `node_modules` folder is required. The catalog, shopping bag, wishlist, product pages, and demo checkout run in the browser.

## Open the site

Open `index.html` in a browser, or upload the project files to a web host. The site uses hash-based links, so pages work when hosted from a GitHub repository subpath.

## Publish on GitHub Pages

1. Upload the project files to the root of your GitHub repository. Include `index.html`, `script.js`, `src/styles.css`, `public/images/image-fallback.svg`, and `.github/workflows/static.yml`. Do not upload `node_modules`.
2. In the repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
3. Push to the `main` branch, or run the workflow manually from **Actions**. The workflow publishes the static files directly and does not install or build anything.
4. Open the Pages URL shown in the completed deployment workflow.

If your default branch is not `main`, change the branch name in `.github/workflows/static.yml`.

## Demo limitations

Cart and wishlist data are stored only in the current browser. Prices and product availability are sample data. Forms only validate input; no orders, payments, email subscriptions, or contact messages are sent or saved. GitHub Pages hosts static files, so connect a real commerce backend before accepting customers or payments.
