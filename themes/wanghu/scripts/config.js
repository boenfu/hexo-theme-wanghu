// copy form https://github.com/theme-nexmoe/hexo-theme-nexmoe/blob/master/scripts/index.js
const logger = require("hexo-log")();
const path = require("path");
const fs = require("fs");

// 检测是否有主题配置文件
logger.info("[Wanghu] Checking theme configurations");

let themeF = hexo.theme_dir.split(path.sep);
themeF = themeF[themeF.length - 2];

let sitePC =
  themeF !== "hexo-theme-wanghu"
    ? path.join(hexo.base_dir, `_config.${themeF}.json`)
    : path.join(hexo.base_dir, `_config.wanghu.yml`);

if (!fs.existsSync(sitePC)) {
  logger.warn("[Wanghu] Theme configuration not found");
  logger.info("[Wanghu] Generating theme configuration file...");

  const themePC = path.join(hexo.theme_dir, "_config.ts");

  fs.writeFileSync(sitePC, JSON.stringify(require(themePC), undefined, 2));
}
