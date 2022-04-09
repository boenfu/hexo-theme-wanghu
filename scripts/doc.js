// <!DOCTYPE html>

hexo.extend.filter.register("after_render:html", function (str, data) {
  console.log(data.path);

  return `<!DOCTYPE html>
  <html lang="zh-cn"><head><meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  ${str}
</html>`;
});
