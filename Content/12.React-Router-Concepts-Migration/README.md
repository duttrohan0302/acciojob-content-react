# Router Concepts

## Choosing the Router
- While our app will only use a single router, several routers are available depending on environment our app is running in.
- For web, we use `createBrowserRouter`

### Create Browser Router
- This is recommended for all React router web projects.
- It uses the DOM history APIs to update the URL and manage the data stack

### `<RouterProvider>`
- All route objects are passed to this component to render our app and enable rest of the APIs

## Router Components
### `<BrowserRouter>`
- A browser router stores the current location in the browser's address bar using clean URLs and navigates using the browser's built-in history stack.

## Route
- Route 
    - Route are perhaps the most important part of a React Router app. They couple URL segments into components, data loadings
- path
    - The path patterns to match against the URL to determine if this route matches a URL, link href or form action
    - Dynamic Segments 
        - If a path segment starts with `:` then it becomes a "dynamic segment"
        - When the route matches the URL, the dynamic segment will be parsed from the URL and provided as `params` to other router APIs
- caseSensitive
    - Instructs the route to match case or not
- loader
    - The route loader is called before the route renders and provides data for the element through `useLoaderData`
- action
    - The route action is called when a submission is sent to the route from a Form
- element
    - The element to render when the route matches the URL.


## Components
### Form
- The Form component is a wrapped around a plain HTML form that emulates the browser for client side routing and data mutations.
- `action`
    - The url to which the form will be submitted, just like HTML form action. 
    - The only difference is the default action, with HTML forms, it defaults to full URL, with `<Form>` it defaults to relative URL of the closest route in context.

### Link
- A relative `<Link to>` value (that does not begins with `/`) resolves relative to the parent route which means it builds upon the URL path that was matched by the route that rendered that `<Link>`
- It may contain `..` to link to the routes further up the hierarchy
- In such cases, `..` works exactly like the command line `cd` function

### NavLink
- A `<NavLink>` is a special kind of `<Link>` that knows whether or not it is "active"
- Very useful in a navbar or sidebar

### Navigate
- This element changes the current location when it is rendered.
- It's a component wrapper around `useNavigate` and accepts all the same arguments as props
    <pre>
    < Navigate to="/dashboard">
    </pre>

### Outlet
- This should be used in parent route elements to render their child route elements.
- This allows the nested UI to show up when the child routes are rendered.
- If the parent route matched exactly, it will render a child index route or nothing if there is no index route.

### Routes
- `<Routes>` will match a set of child routes from the current location
- If we are using data router like `createBrowserRouter`, it is uncommon to use this component as it does not participate in data loading
- Whenever the location changes, `<Routes>` looks through all it's child routes to find the best match and renders that branch of the UI.
- `<Route>` elements may be nested to indicate the nested UI, which also corresponds to nested URL paths.
- Parent routes render their child routes by rendering an `<Outlet>`

## Hooks
### useLocation
- This hook returns the current location object.
- This can be useful if we'd like to perform some side effects whenever the current location changes.

### useMatch
- Returns the match data about a route at the given path relative to the current location.

### useNavigate
- The `useNavigate` hook returns a function that lets us navigate programmatically

### useParams
- The `useParams` hook returns an object of key/value pairs of the dynamic params of the current URL.
- The child routes inherit all params from their parent routes.


## Migrating from React Router v5 to v6
### Issues with React Router v5
- First, history.push() does not trigger navigation, it was observed that it updated the browser's url but does not navigate to that path.
- Defining routes with same path but optional parameters needs special arrangement. 
- For e.g. for `/games` and `/games/:id`, developers needs to arrange the definition so that the route with paramters comes first, otherwise the routes don't work as expected
- A route name `/test` would still be called if the browser route is `/`, `/t`, `/te` and so on unless we use the prop exact

### Migrating
- Update the react-router-dom package, by reinstalling to the latest one
- Remove Switches, instead use Routes component
- The way of providing the component has also changed
<pre>
    < Route exact path="/blogs">< Blogs /></ Route>
    < Route exact path="/contacts" component={Blogs}/>
</pre>
became
<pre>
    < Route path="blogs" element={< Blogs />} />
</pre>
- Change `history.push()` to `navigate` function which is returned by the `useNavigate` hook in v6