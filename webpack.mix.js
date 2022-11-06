let mix = require('laravel-mix');

mix.setPublicPath('./')
    .js('src/background.js', 'dist/js')
    .js('src/popup.js', 'dist/js').vue()
    .copy('assets/images/', 'dist/images')
    .postCss("assets/css/app.css", "dist/css", [
        require("tailwindcss")
    ])