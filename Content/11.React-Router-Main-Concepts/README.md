# React Router - Main Concepts

- React Router isn't just about matching a url to a function or a component.
- It's more about building a full User Interface that maps to the URL, so it might have more concepts in it than we're used to.
- Three main jobs of React Router:
    - Subscribing and manipulating the history stack
    - Matching the URL to you routes
    - Rendering a nested UI from the route matches

## Definitions
1. URL
    - The URL in the address bar
    - Route and URL are not the same in React Router
2. Location
    - This is a React Router specific object that is based on the build in browser's `window.location` object. It represents "where the user is at".
    - It's mostly an object representation of the URL but has a bit more to it than that.
3. Location.State
    - A value that persists with a location that isn't encoded in the URL.
    - Much like hash or search params(data encoded in the URL), but stored invisibly in the browser's memory.
4. History Stack
    - As the user navigates, the browser keeps track of each location in a stack. 
    - If you click and hold the back button in a browser, you can see the browser's history stack right there.
5. Client Side Routing(CSR)
    - A plain HTML document can link to other documents and the browser handles the history stack itself.
    - CSR enables developers to manipulate the browser stack without making a document request to the server.
6. History
    - An object that allows React Router to subscribe to changes in the URL as well as providing APIs to manipulate the browser history stack programmatically.
7. History Action
    - One of `POP`, `PUSH`, or `REPLACE`. Users can arrive at a URL for one of these three reasons.
    - A push when a new entry is added to the history stack(typically a link click or the programmer forced a navigation)
    - A replace is similar except it replaces the current entry on the stack instead of pushing a new one.
    - Finally, a pop happens when the user clicks the black or forward buttons in the browser chrome.
8. Segment
    - The parts of a URL or path pattern between the `/`characters.
    - For e.g. "/users/123" has two segments
9. Path Pattern
    - These look like URLs but can have special characters for matching URLs to routes
    - Like dynamic segments(`"/users/:userId"`)
    - Or star segments(`"/docs/*"`)
    - They aren't URLs, they're patterns that React Router will match.
10. URL Params 
    - The parsed values from the URL that matched a dynamic segment
11. Router
    - Stateful, top level component that makes all the other components and hooks work
12. Route Config 
    - A tree of route objects that will be ranked and matched(with nesting) against the current location to create a branch of route matches.
13. Route 
    - An object or Route Element typically with the shape of `<Route path element>` or `{path, element}`. 
    - The `path` is a path pattern
    - When the path pattern matches the current URL, the element will be rendered.
14. Route Element
    - Or `<Route>`. This element's props are read to create a route by `<Routes>`, but otherwise it does nothing.
15. Nested Routes 
    - Because routes can have children and each route defines a portion of the URL through segmenets, a single URL can match multiple routes in a nested "branch" of the tree. 
    - This enables automatic layout nesting through outlet, relative links or more.
16. Relative Links
    - Links that don't start with `/` will inherit the closest route in which they are rendered.
    - This makes it easier to link to deeper URLs without having to know and build the entire
17. Match
    - An object that holds information when a route matches the URL, like the url params and pathname are matched
18. Matches
    - An array of routes(or branch of route config) that matches the current location. 
    - This structure enables nested routes
19. Outlet
    - A component that renders the next match in a set of matches
20. Index Route
    - A child route with no path that renders in the parent's outlet at the parent's URL
21. Layout Route
    - A parent route without a path, used exclusively for grouping child routes inside a specific layout

## History and Locations
### History
- Before React Router can do anything, it has to be able to subscribe to changes in the browser history stack
- Browser maintain their own history stack as the user navigates around
- In traditional HTML CSS websites without JS, the browser will make requests to the server every time the user clicks a link, submits a form, or clicks the forward and backward button

For example, consider a user:  
1. clicks a link to `/dashboard`
2. clicks a link to `/accounts`
3. clicks a link to `/customers/123`
4. clicks the back button
5. clicks a link to `/dashboard`

The history stack will change as follows, the bold element denotes the current URL
1. <b>/dashboard</b>
2. `/dashboard`, <b>/accounts</b>
3. `/dashboard`, `/accounts`, <b>customers/123</b>
4. `/dashboard`, <b>/accounts</b>, `customers/123`
5. `/dashboard`, `/accounts`, <b>/dashboard</b>

No need to use `window.history`. React Router `history` provides a way to listen for URL changes whether the history action is push, pop or replace
<pre>
let history = createBrowserHistory();
history.listen(({location, action})=>{
    // this is called whenever new location come in
    // the action is POP, PUSH or replace
})
</pre>

### Locations
- No need to use `window.location`
- React Router has the concept of a location that's patterned after the `window.location` but it's much simpler.
<pre>
{
    pathname: "/abc/def",
    search: "?campaign=instagram",
    hash: "#menu",
    state: null,
    key: ""
}
</pre>
- The first three: `{ pathname, search, hash }` are exactly like `window.location`.
- If you just add up the three you'll get the URL the user sees in the browser
<pre>
location.pathname + location.search + location.hash
</pre>
- The last two, `{ state, key }` are React Router specific

#### Location Pathname
- This is the part of the URL after the origin, so for `https://example.com/acciojob/job`, the pathname is `/acciojob/job`
- This is the only part of the location that routes match against

#### Location Search
- People use a lot of different terms of this part of the URL
    - location search
    - URL search params
    - search params
    - query strings

#### Location Hash
- Hashes in URL indicates a scroll position on the current page

### Matching
#### Match Params
- `/teams/:teamId` will match both `/teams/123` and `/teams/cupckaes`
- We have to apply the check ourselves to render what we want

#### Ranking Routes
- Let's say we have following routes
<pre>
[
    /,
    /teams,
    /teams/:teamId,
    /teams/new
]
</pre>
- Consider the URL `/teams/new`, which route will it match
- Many routers simply match it to the first route that matches, but React Router is smart
- It knows that it has to match with the most specific route, hence it will match with `/teams/new` and not `/teams/:teamId`

### Outlets
`<App>`  
    `<Teams>`  
        `<Team />`  
    `</Teams>`  
`</App>`  
- `<Routes>` will render the first match's element for us, in our case, it would usually be `<App />`.
- For subsequent elements, `App` nees to render an outlet
- The `Outlet` component will always render the next match. That means `<Teams>` will also need an outlet to render `<Team />`

### Navigating
- When the URL changes, we call that a "navigation"
- There are two ways to navigate in React Route
    - `<Link>`
    - `navigate`

#### Link
- This is the primary mean of navigation
- Using this, allows the user to change the URL when they click it
- React Router will prevent the browser's default behaviour and tell the history to push a new entry into the history stack
- The location changes and the new matches wil render
- Links are accessible in the sense that they:
    - Still render a `<a href>` so all default accessibility concerns are met
    - Don't prevent the browser's default behaviour if it's a right click or command/control click to "open in new tab"

#### Navigate function
- This function is returned from the `useNavigate` hook and allows us, the programmer, to change the URL whenever we want
<pre>
let navigate = useNavigate();
navigate("/logout")
</pre>

### Data access
<pre>
let location = useLocation()
let urlParams = useParams()
let [urlSearchParams] = useSearchParams()
</pre>