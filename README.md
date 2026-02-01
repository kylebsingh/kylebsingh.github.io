# Kyle Singh - Personal Website

My personal website and blog built with [Eleventy](https://www.11ty.dev/).

## Features

- Resume-style homepage
- Blog section with posts
- Clean, responsive design
- Fast static site generation

## Development

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm start
```

Visit http://localhost:8080 to view the site.

## Build

Build the site for production:

```bash
npm run build
```

The built site will be in the `_site` directory.

## Deployment to GitHub Pages

This site automatically deploys to GitHub Pages via GitHub Actions.

### First-time Setup

1. Go to your repository settings on GitHub
2. Navigate to **Pages** (under "Code and automation")
3. Under "Build and deployment":
   - Source: Select **GitHub Actions**
4. Push your code to the `main` branch

The site will automatically build and deploy. Visit https://kylebsingh.github.io once deployed!

### Manual Deployment

You can also trigger a deployment manually:
- Go to the **Actions** tab in your repository
- Select the "Deploy to GitHub Pages" workflow
- Click "Run workflow"

## Customization

- **Homepage**: Edit `src/index.njk` to update your resume content
- **Blog posts**: Add new markdown files to `src/blog/`
- **Styling**: Modify `src/css/style.css`
- **Layouts**: Templates are in `src/_includes/layouts/`

## License

MIT
