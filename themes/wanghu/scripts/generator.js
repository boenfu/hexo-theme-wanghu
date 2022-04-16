["about", "categories", "tags", "following", "messages"].forEach((type) => {
  hexo.extend.generator.register(type, function (locals) {
    return {
      path: `${type}/index.html`,
      data: locals,
      layout: ["user"],
    };
  });
});
