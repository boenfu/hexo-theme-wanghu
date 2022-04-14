const js = hexo.extend.helper.get("js").bind(hexo);

hexo.extend.filter.register("after_render:html", function (str, _data) {
  return new Promise(async (ret) => {
    ret(`<!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>${await getResetCSS()} a{text-decoration: none;}</style>
      </head>
      ${str}
      ${js("/js/search.js")}
    </html>`);
  });
});

async function getResetCSS() {
  return new Promise((resolve, reject) => {
    require("https").get(
      "https://unpkg.com/reset-css@5.0.1/reset.css",
      (res) => {
        let buffers = [];

        res.on("data", (chunk) => buffers.push(chunk));
        res.on("end", () => resolve(Buffer.concat(buffers).toString("utf-8")));
        res.on("error", reject);
      }
    );
  });
}
