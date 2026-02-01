---
layout: layouts/post.njk
title: Getting Started with Eleventy
description: A quick guide to setting up your first Eleventy static site.
date: 2024-02-01
---

Eleventy (11ty) is a powerful and flexible static site generator that's become one of my favorite tools for building websites.

## Why Eleventy?

Here's what makes Eleventy great:

- **Simple**: No complex configuration needed to get started
- **Fast**: Builds are incredibly quick, even for large sites
- **Flexible**: Works with multiple template languages
- **Zero client-side JavaScript**: Perfect for performance

## Quick Start

Getting started with Eleventy is straightforward:

```bash
npm install --save-dev @11ty/eleventy
```

Create an `index.md` file:

```markdown
# Hello World

This is my first Eleventy site!
```

Then run:

```bash
npx @11ty/eleventy --serve
```

That's it! Your site is now running at `http://localhost:8080`.

## Next Steps

From here, you can:

1. Add layouts and templates
2. Create collections for blog posts
3. Customize your build with plugins
4. Deploy to GitHub Pages, Netlify, or Vercel

I'll be writing more detailed tutorials on each of these topics soon!
