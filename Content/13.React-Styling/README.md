## Styling React Using CSS
There are many ways to style React with CSS
- Inline Styling
- CSS Stylesheets
- CSS Modules

## 1. Inline Styling
`<h1 style={{color: "red", backgroundColor: "blue"}}>Hello Style</h1>`
### Things to remember
- camelCased Property names, i.e. backgroundColor and not background-color
- We have to give an object to the style prop of the given tag

## 2. CSS Stylesheets
- Behave as normal stylesheets, same rules applies
- No need for camel case or objects

## 3. CSS Modules
- Create the module with .module.css extension, e.g. my-style.module.css
<pre>
.bigblue{
    color: pink;
    padding: 40px;
    font-family: sans-serif;
    text-align: center;
}
</pre>
- Now wherever we want to use these styles, we use the following code
<pre>
import styles from "my-style.module.css"
</pre>
- Provide styles.bigblue as the value for the className of the tag where you want to apply the styles


## Styling React using Sass
- Sass is a CSS pre-processor
- Sass files are executed on the server and sends CSS to the browser

- Install sass using `npm install sass`
- Create a file with .scss extension
- Add styles to it, in Scss, we can easily add variables
- Import the scss file to a component and voila, we're done!

## [React Bootstrap](https://react-bootstrap.github.io/components/alerts)
`npm install react-bootstrap bootstrap`

- Only install bootstrap if we plan on customizing the Bootstrap Sass files, or we don't want to use the cdn link.

### Importing the components
<pre>
// Preferred as it only imports the particular component
import Button from "react-bootstrap/Button";

// Less Ideal as it imports the whole package, i.e. sends a lot of amount of code to the client
import {Button} from "react-bootstrap";
</pre>

- Because React-Bootstrap doesn't depend on a very precise version of bootstrap, they don't ship with any included CSS. However some stylesheet is required to use all these components.
<pre>
// The following line can be included in your src/index.js or App.js file

import 'bootstrap/dist/css/bootstrap.min.css';
</pre>

## Why React-Bootstrap?
- React-Bootstrap is a complete re-implementation of the Bootstrap components using React. 
- It has no dependency on either bootstrap,js or jQuery.
- If we have React set-up and React-Boostrap installed, we have everything we need.
- Any manipulation of the DOM here happens using virtual DOM, which provides a more reliable solution


