module.exports = function(eleventyConfig) {
  
  /* Pass through - stop eleventy touching */
  eleventyConfig.addPassthroughCopy('src/images');

  return {
    dir: { input: 'src', output: 'dist', data: '_data' },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md', 'css', 'html', 'yml'],
    htmlTemplateEngine: 'njk'
  };
};
