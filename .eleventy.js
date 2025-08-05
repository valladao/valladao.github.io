export default function (eleventyConfig) {
  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "."
    },
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
    dataTemplateEngine: "liquid"
  }
}
