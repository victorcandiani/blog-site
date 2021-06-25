const {DateTime} = require ("luxon");

module.exports = function(eleventyConfig) {
  
  eleventyConfig.addPassthroughCopy('./src/style.css')
  eleventyConfig.addPassthroughCopy('./src/assets')  
  eleventyConfig.addPassthroughCopy('./src/admin')  
  
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).setLocale('pt-br').toLocaleString();
  })

  return {
    dir: {
      input: "src",
      output: "public"
    }
  }  
}