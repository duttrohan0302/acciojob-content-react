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