const mix = require('laravel-mix')


mix.react('resources/js/main.js', 'public/js')
    .postCss('resources/css/main.css', 'public/css')

mix.copyDirectory('resources/images', 'public/images')
