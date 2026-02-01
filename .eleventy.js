const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const pluginTOC = require('eleventy-plugin-toc');

module.exports = function (eleventyConfig) {
  // Configure Markdown
  let markdownLibrary = markdownIt({
    html: true,
    linkify: true
  }).use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.headerLink()
  });
  eleventyConfig.setLibrary("md", markdownLibrary);

  // Add TOC plugin
  eleventyConfig.addPlugin(pluginTOC, {
    tags: ['h1', 'h2'],
    wrapper: 'nav',
    wrapperClass: 'toc'
  });

  // Copy CSS files to output
  eleventyConfig.addPassthroughCopy("src/css");

  // Copy any images or assets
  eleventyConfig.addPassthroughCopy("src/assets");

  // Copy .nojekyll for GitHub Pages
  eleventyConfig.addPassthroughCopy(".nojekyll");

  // Copy CNAME for GitHub Pages
  eleventyConfig.addPassthroughCopy("CNAME");

  // Add a collection for blog posts
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md").reverse();
  });

  // Add a collection for tags
  eleventyConfig.addCollection("tagList", function (collectionApi) {
    let tagSet = new Set();
    collectionApi.getAll().forEach(item => {
      if ("tags" in item.data) {
        let tags = item.data.tags;
        tags = typeof tags === "string" ? [tags] : tags;
        for (const tag of tags) {
          tagSet.add(tag);
        }
      }
    });
    return [...tagSet].filter(tag => tag !== "posts").sort();
  });

  eleventyConfig.addFilter("dateDisplay", (dateObj) => {
    return new Date(dateObj).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC'
    });
  });

  // Filter to get posts by tag
  eleventyConfig.addFilter("tagFilter", function (collection, tag) {
    return collection.filter(item => {
      let tags = item.data.tags;
      tags = typeof tags === "string" ? [tags] : tags;
      return tags && tags.includes(tag);
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
