let mix = require("laravel-mix");

mix
  .js("src/js/app.js", "assets")
  .postCss("src/css/app.css", "assets", [
    require("@tailwindcss/postcss"),
    require("postcss-import"),
    require("autoprefixer"),
  ])
  .options({
    processCssUrls: false,
  });
