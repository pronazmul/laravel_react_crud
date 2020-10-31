<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="300"></a></p>

> ## Practice Laravel React Crud Operation
> Installation Commands
```sh
$ composer create-project --prefer-dist laravel/laravel laravel_react_crud
$ npm install
$ npm install react
$ npm install react-dom
$ npm install react-bootstrap bootstrap
$ npm install react-router-dom --save
```
> React File Structure Organize:
-   App.js | App.test.js | index.js | serviceWorker.js | setupTests.js (Must Be Setup In Lravel-> Resource -> Js)
-   Remove Normal Bootstrap | Jquery | Propbar Dependencies
 
 > Webpak.mix Organize:
```sh 
mix.react('resources/js/main.js', 'public/js')
    .postCss('resources/css/main.css', 'public/css')
```
 > Create index.blade.php, Set Exact Route To it & Organize:
```sh
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Laravel | React</title>
        <link rel="stylesheet" href="{{asset('css/main.css')}}">
    </head>
    <body>
        <div id='root'></div>
        <script src="{{asset('js/main.js')}}"></script>
    </body>
</html>
```
> Compiling Assets Cmd & Laravel Server Start Cmd
```sh
$ npm run dev
$ php artisan serve
```
> Make Image Directory & Compile it
```sh 
mix.copyDirectory('resources/images', 'public/images')
```
> ### Laravel Route Redirect To Frontend React From web.php
```sh 
Route::get('{ReactRoute}', function(){
    return view('index');
})->where('ReactRoute','.*');
```
