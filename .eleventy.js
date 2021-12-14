module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ 'src/_assets': 'assets' });

  // eleventyConfig.addCollection("back", (collection) => 
  //   collection.items
  //     .filter((item) => item.data.type === "back")
  //     .sort((a, b) => a.data.order - b.data.order)
  //   );

  // eleventyConfig.addCollection("front", (collection) => 
  //   collection.items
  //     .filter((item) => item.data.type === "front")
  //     .sort((a, b) => a.data.order - b.data.order)
  //   );

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  }
}
