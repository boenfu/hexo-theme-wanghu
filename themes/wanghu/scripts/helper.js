const path = require("path");

hexo.extend.helper.register("svgr", function (src) {
  return require(path.join(hexo.source_dir, src));
});
