# How to run ?
npm install
npm run dev-server

# HTML

**charset meta tag**
The charset attribute specifies the character encoding for the HTML document. This setup use **UTF-8** character encoding scheme.

**viewport meta tag**
Used to control the viewport's size and scale.
* width propert controls the size of the viewport
* initial-scale property controls the zoom level when the page is first loaded.


# BABEL

.babelrc file is used to tell babel which presets to use for transpiling the code.

**@babel/preset-env**
Helps babel to convert ES6, ES7 and ES8 code to ES5

**@babel/preset-react**
Transforms JSX to Javascript

**@babel/core**
It allows us to run babel from tools like webpack

**@babel-loader**
It's a webpack plugin. It allows us to teach webpack how to run babel when webpack sees certain files.

# Extra Configurations

**Source Map**
We setup Source map using **devtool** property. It enhances our debugging process. It is used to display original Javascript file while debugging instead of minified code.

# CSS

**css-loader**
Allows webpack to load CSS assets.

**style-loader**
Take CSS and add it to the DOM by injecting a **<style>** tag

**NOTE:** style-loader should be added before css-loader. Otherwise we end up in having an error.


**reference:** https://dev.to/iamismile/how-to-setup-webpack-and-babel-for-react-59ph
