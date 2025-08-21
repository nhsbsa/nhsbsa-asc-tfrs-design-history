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
      productName: 'Claim for adult social care learning and development',
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

  eleventyConfig.addFilter("formatUserNeed", function (str) {
    return str
    .replace(/-/g, " ") // Replace hyphens with spaces
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word
  });

  eleventyConfig.addFilter("extractNeedNo", function (str) {
      let match = str.match(/(\d+(\.\d+)?)$/);
      return match ? match[0] : null;
  });

  eleventyConfig.addFilter("capitalizeFirstWord", function (str) {
    if (!str) return str; // Return if the string is empty
    return str.charAt(0).toUpperCase() + str.slice(1);
  });

  eleventyConfig.addFilter("groupNeedsByAs", function (needsArray) {
    const grouped = {};
    
    needsArray.forEach(({ as: user, ...rest }) => {
        if (!grouped[user]) {
            grouped[user] = [];
        }
        
        grouped[user].push(rest);
    });
    
    return Object.entries(grouped).map(([user, needs]) => ({ user, needs }));
});

  eleventyConfig.addCollection('userNeedsMap', collection => {
    let userNeedsMap = {};

    collection.getAll().forEach((item) => {
      if (item.data.relatedUserNeeds) {
        item.data.relatedUserNeeds.forEach((relatedUserNeeds) => {
          if (!userNeedsMap[relatedUserNeeds]) {
            userNeedsMap[relatedUserNeeds] = [];
          }
          userNeedsMap[relatedUserNeeds].push(item);
        });
      }
    });

    return userNeedsMap;
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
