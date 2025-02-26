module.exports = function (eleventyConfig) {
  // Options to customise the appearance of your design history
  // https://x-govuk.github.io/govuk-eleventy-plugin/options/
  eleventyConfig.addPlugin(require('@x-govuk/govuk-eleventy-plugin'), {
    stylesheets: [
      '/styles/application.css'
    ],
    headingPermalinks: true,
    header: {
      organisationLogo: false,
      productName: 'Claim for adult social care training and development',
      search: {
        indexPath: '/search.json',
        sitemapPath: '/sitemap'
      }
    }
  })

  // Passthrough
  eleventyConfig.addPassthroughCopy({ './app/images': '.' })

  eleventyConfig.addCollection('partsOfService', collection => {
    return collection.getFilteredByGlob([
      'app/posts/claims.md',
      'app/posts/processing.md'
    ])
  })

  eleventyConfig.addCollection('claims', collection => {
    return collection.getFilteredByGlob('app/posts/claims/*.md')
  })

  eleventyConfig.addCollection('processing', collection => {
    return collection.getFilteredByGlob('app/posts/processing/*.md')
  })

  eleventyConfig.addCollection('userResearch', collection => {
    return collection.getFilteredByGlob([
      'app/posts/userNeeds.md',
    ])
  })

  eleventyConfig.addCollection('userNeeds', collection => {
    return collection.getFilteredByGlob('app/posts/userNeeds/*.md')
  })

  eleventyConfig.addFilter("filterHidden", function (array) {
    if (!Array.isArray(array)) return array; // Ensure it's an array
    return array.filter(item => typeof item === "string" && !item.startsWith("hidden-"));
  });




  // Config
  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'app',
      output: 'public',
      layouts: '_layouts',
      includes: '_components'
    }
  }


}
