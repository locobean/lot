# LeeOnTrack Website

This is the simple static website for LeeOnTrack, an iRacing sim racing league.

## What is this project?

This repository contains the source files for the LeeOnTrack website. It is a single-page site with information about Lee, the sim rig, the Sunday night league, race nights, a gallery, a code of conduct, and how to join.

## Technology used

- HTML5
- CSS3
- Vanilla JavaScript

No frameworks, build tools, or server-side code are used. This makes the site easy to maintain and host directly from GitHub Pages.

## Folder structure

```text
lot/
├── index.html        # Main page
├── assets/
│   ├── css/
│   │   └── styles.css    # Styling and design system
│   ├── js/
│   │   └── main.js       # Small interactive features
│   ├── images/           # Images and photos
│   └── icons/            # Icons
├── .gitignore        # Files to ignore
└── README.md         # This file
```

## How to run it locally

Because this is a static website, you do not need any special tools. The easiest way is:

1. Open the project folder on your computer.
2. Double-click `index.html` to open it in your browser.

Or, if you prefer, you can run a small local web server from the project folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## How to make future changes

1. Edit `index.html` to change the page content and sections.
2. Edit `assets/css/styles.css` to change the colours, spacing, or layout.
3. Edit `assets/js/main.js` to add or change interactive features.
4. Save your changes and refresh the browser to see them.

## Social media links

Social media links are in the footer of `index.html`. They currently use placeholder URLs:

- **Discord:** `https://example.com/leeontrack-discord`
- **Facebook:** `https://example.com/leeontrack-facebook`
- **YouTube:** `https://example.com/leeontrack-youtube`
- **TikTok:** `https://example.com/leeontrack-tiktok`

Replace these placeholder URLs with the real LeeOnTrack social media URLs. The icons are provided by [Font Awesome](https://fontawesome.com/) via a CDN link in `index.html`.

## How to deploy to GitHub Pages

This site uses the repository already connected to GitHub (`https://github.com/locobean/lot.git`). To publish:

1. Push your changes to the `main` branch.
2. In the GitHub repository settings, go to **Pages**.
3. Under **Source**, select **Deploy from a branch** and choose `main` with the `/(root)` folder.
4. Save. The site will be available at `https://locobean.github.io/lot/`.
