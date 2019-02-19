# Gulp templates

- Gulp version: 4.0.0
- Html Preprosessor: pug
- CSS Preprosessor: scss
- Javascript Framework: jQuery, Babel 7

Make sure you have NodeJS installed (currently built using v4^).

1. Clone the repo.
2. `cd` into the folder and do a fresh `npm install`.
3. Run `gulp serve` to start the server

Server Configuration is at `localhost:8080`!

The port `:8080` will auto changes if detected other Gulp / NodeJS instances.

When serve.
- The file/folder will delete the folder first and create a new one.
- The jQuery been combine using gulp task on scriptComps task - gulp-js-import

Devicon Fonts Repo (http://konpa.github.io/devicon/)

Gulp JS Import Issues
- Not properly passing directory at @import argument between Unix/Linux and Windows.
- Workaround
    - Unix/Linux : `./{FolderName}/{FileName}.js`
    - Windows: `src\assets\{FolderName}\{FolderName}\{FileName}.js`

Automate Zip for backup using Datetime Stamp Format.
- Backup every time start using gulp.
- Use `gulp prod` zip build for production.

The Gulp Nodes to be intalled

```{nodejs}
npm i gulp --save-dev === https://www.npmjs.com/package/gulp
npm i del --save-dev === https://www.npmjs.com/package/del
npm i gulp-sass --save-dev === https://www.npmjs.com/package/gulp-sass
npm i gulp-autoprefixer --save-dev === https://www.npmjs.com/package/gulp-autoprefixer
npm i gulp-cssnano --save-dev === https://www.npmjs.com/package/gulp-cssnano
npm i gulp-rename --save-dev === https://www.npmjs.com/package/gulp-rename
npm i gulp-pug --save-dev === https://www.npmjs.com/package/gulp-pug
npm i gulp-prettify --save-dev === https://www.npmjs.com/package/gulp-prettify
npm i browser-sync --save-dev === https://www.npmjs.com/package/browser-sync
npm i gulp-newer --save-dev === https://www.npmjs.com/package/gulp-newer
npm i gulp-imagemin --save-dev === https://www.npmjs.com/package/gulp-imagemin
npm i gulp-concat --save-dev === https://www.npmjs.com/package/gulp-concat
npm i gulp-plumber --save-dev === https://www.npmjs.com/package/gulp-plumber
npm i gulp-notify --save-dev === https://www.npmjs.com/package/gulp-notify
npm i gulp-uglify --save-dev === https://www.npmjs.com/package/gulp-uglify
npm i gulp-zip --save-dev === https://www.npmjs.com/package/gulp-zip
npm i gulp-purgecss --save-dev === https://www.npmjs.com/package/gulp-purgecss
npm i gulp-js-import --save-dev === https://www.npmjs.com/package/gulp-js-import
npm i gulp-size --save-dev === https://www.npmjs.com/package/gulp-size
npm i gulp-babel --save-dev === https://www.npmjs.com/package/gulp-babel
```

```{BabelJS}
npm i @babel/core --save-dev === https://www.npmjs.com/package/@babel/core
npm i @babel/polyfill --save-dev === https://www.npmjs.com/package/@babel/polyfill
npm i @babel/preset-env --save-dev === https://www.npmjs.com/package/@babel/preset-env
npm i @babel/register --save-dev === https://www.npmjs.com/package/@babel/register
npm i babel-loader --save-dev === https://www.npmjs.com/package/babel-loader
```

Express Install All Gulp Nodes

```
npm i gulp gulp-cli del gulp-sass gulp-autoprefixer gulp-cssnano gulp-rename gulp-pug gulp-prettify browser-sync gulp-newer gulp-imagemin gulp-concat gulp-plumber gulp-notify gulp-uglify gulp-purgecss gulp-js-import gulp-zip gulp-babel --save-dev
```

Express Install All BabelJS Nodes

```
npm i @babel/core @babel/polyfill @babel/preset-env @babel/register babel-loader --save-dev
```
