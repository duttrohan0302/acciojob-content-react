## React Router Tutorial

### Open your terminal and bootstrap a new React app using vite
- Installing the application
    <pre>
    npm create vite@latest router-tutorial -- --template react
    </pre>
- Install some additional dependencies
    <pre>
    cd router-tutorial
    npm install
    npm install react-router-dom localforage match-sorter sort-by
    </pre>
- Run the application
    <pre>
    npm run dev
    </pre>
- Go to `http://127.0.0.1:5173/`
- Copy paste css from [link](https://gist.githubusercontent.com/ryanflorence/ba20d473ef59e1965543fa013ae4163f/raw/499707f25a5690d490c7b3d54c65c65eb895930c/react-router-6.4-tutorial-css.css) to `src/index.css`
- Copy paste tutorial contact date from [link](https://gist.githubusercontent.com/ryanflorence/1e7f5d3344c0db4a8394292c157cd305/raw/f7ff21e9ae7ffd55bfaaaf320e09c6a08a8a6611/contacts.js) to `src/contacts.js`
- Delete ununsed files in `src/` so all we have left are the following files
    - index.css
    - contacts.js
    - main.jsx

### Adding a Router
- First thing to do is create a Browser Router and configure our first route. This will enable client side routing for our web app.
- We set up the root route first

### The Root Route
- Create `src/routes/` and `src/routes/root.jsx`

### Handling Not Found Errors
- It's always a good idea to know how your app responds to errors early in the project because we all write far more bugs than features when building a new app 😉! This will ensure that users get a good experience when this happens, also it will help us during development.
- Create `src/error-page.jsx`

### The Contacts Route UI
- Instead of 404 "Not Found" page, we want to actually render something at the URLs we have linked to.
- Create `src/routes/contact.jsx`
- Add the content there

### Client side Rotuing
- You might have noticed that when we click on the links in the sidebar, the browser is doing a full document request for the next URL instead of using React Router
- Client side routing allows our app to update the URL without requesting another document from the server. Instead, the app can immediately render new UI. 
- For that, replace `a` tags with `Link` from react-router-dom

### Loading Data
- URL segments, layouts and data are more often than not coupled (tripled?) together. We can see it in this app already
<pre>
URL Segment     |       Component       |       Data  
/               |       < Root />       |       list of contacts  
contacts/id     |       < Contact />    |       individual contact  
</pre>
- Create a loader in routes/root.jsx to get the contacts
- Import that loader in main.jsx and pass it as a loader key to createBrowserRouter
- Use useLoaderData in routes/root.jsx to get the contacts data
- That's it! React Router will now automatically keep that data in sync with out UI.

## Creating Contacts
- We'll be creating new conatcts by exporting an `action` in our root route, wiring it up to the root config and changing our `<form>` to a React Router `<Form>`

### URL Params in Loaders
- When we click on a contact name, we get the same static page again with one important difference, we can see the unique ID in the url now

### Updating Data
- Just like creating data, you update data with `<Form>`
- Create `src/routes/edit.jsx`