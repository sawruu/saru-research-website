# Saru Chaulagain — Research, Insights & Impact

A responsive static website for a research repository and article blog, designed for GitHub Pages. No build tools or coding environment setup are required.

## Files
- `index.html` — homepage and sections
- `styles.css` — layout, colors, responsive styling
- `script.js` — mobile navigation and article search/category filtering
- `CNAME` — custom domain for GitHub Pages

## Publish with GitHub Codespaces
1. Create a **public** repository on GitHub, for example `saru-research-website`.
2. Open the repository and choose **Code → Codespaces → Create codespace on main**.
3. In the Codespaces terminal, create the files shown in this project and paste their contents, or upload these files into the repository.
4. Commit and push the files.
5. In the repository, open **Settings → Pages**.
6. Under Build and deployment, select **Deploy from a branch**, choose `main` and `/ (root)`, then Save.
7. Wait for the Pages deployment to finish. The site should be available at `https://YOUR-GITHUB-USERNAME.github.io/saru-research-website/`.

## Connect your custom domain
The `CNAME` file is already set to `saruchaulagain.com.np`. In **Settings → Pages → Custom domain**, enter `saruchaulagain.com.np` and save. Then configure DNS at the domain registrar using GitHub's official current instructions:
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

For an apex domain, GitHub documents A records pointing to:
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

If you want `www.saruchaulagain.com.np`, add a CNAME record named `www` pointing to `YOUR-GITHUB-USERNAME.github.io`. Check the GitHub documentation before changing DNS. DNS updates may take up to 24 hours. Do not delete existing email-related DNS records.

## Important before launch
- The article cards and repository entries are placeholders. Replace them with real work before presenting them as published research.
- Confirm the contact email before launch.
- Keep your phone number, home address and referees' details private unless you explicitly want them public.
- Only publish documents you have permission to share.
- External Google Fonts and Unsplash images require an internet connection. The website itself is static and has no server-side database or contact form.
