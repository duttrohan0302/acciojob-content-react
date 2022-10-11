## React Router
- Helps us include routing in create-react-app projects
### Installation
- Run the following command in the terminal when you're inside the project folder
    <pre>
    npm i react-router-dom
    </pre>

### Example Explanation
- We wrap our content first with `<BrowserRouter>`
- Then we define out `<Routes>`.
- An application can have multiple `<Routes>`. In our case, we only used one
- `<Route>` Components can be nested
- In our eg, the first `<Route>` has a path of `/` and renders the `Layout` component(this is nested).
- The nested `<Route>s` inherit and add to the parent route. So the `blogs` path is combined with the parent and becomes `/blogs`
- The `Home` component route does not have path but has an `index` attribute. This specifies this route as the default route for the parent route, which is `/`
- Setting the `path` to `*` will act as a catch-all for any undefined URLs. Thisis great for a 404 error page.

### Pages / Components
- The `Layout` component has `<Outlet>` and `<Link>` elements.
- The `<Outlet>` renders the current route selected.
- `<Link>` is used to set the URL and keep track of browsing history
- In react we usually don't use `a` tag. Anytime we want link to an internal path, we will use `<Link to="/path">` instead of `<a href="">`

## Feature Overview of React Router
### Client Side Routing
- React Router enabled `client side routing`
- In traditional websites, the browser requests a document from a web server, downloads and evaluates the CSS and JS assets and renders the HTML sent from the server. When the user clicks a link, it starts the process all over again for a new page.
- Client side routing allows our app to update the URL from a link click without making another request for another document from the server. Instead, our app can immediately render some new UI and make data requests with `fetch` to update page with new information.
- This enables fast user experiences because the borwser doesn't need to request entirely new document or re-evalutes CSS & JS assets for next page. It also enables more dynamic user experiences with things like animations.
- Client side routing is enabled by creating a `Router` and linking/submitting to pages with `Link` and `<Form>`

### Nested Routes
- Nested Routing is the general idea of coupling segments of the URL to component hierarchy and data

### Dynamic Segments
- Segments of the URL can be dynamic placeholders that are parsed and provided to various apis/components
- `<Route path="projects/:projectId/tasks/:taskId">`

### Ranked Route Matching
- When matching URLs to routes, React router will rank the routes according to the number of segments, static segments, dynamic segment, etc and pinck the most specific match
- E.g.
    - Route 1 - `<Route path="/teams/:teamId">`
    - Route 2 - `<Route path="/teams/new">`
    - Let's say now we go to, `localhost:3000/teams/new`
    - Technially both routes match the url as `new` can be the value of `teamId`, still intuitively we want it to match with the 2nd route, react router knows it too
    - So we don't have to worry about route ordering

### Active Links
- Most webpages have persistent navigation sections at the top of the UI, the side bar, and often multiple levels.
- Styling the navigation items so the user knows where they are(`isActive`) or where they're going(`isPending`) in the app is done easily with `<NavLink>`

### Relative Links
- You have a nested Routes=> home then projects/:projectId then :taskId(inside Project component)
- In `<Project` @ `/home/project/123`
- `<Link to="/abc>` => `/home/project/123/abc`
- `<Link to=".">` =>`/home/project/123`
- `<Link to="..">` =>`/home`
- `<Link to=".." relative="path">` =>`/home/project`

## Redirects
- While loading or changing data, it's common to redirect the user to a different route
- For that, we can `throw redirect("/login")` or we can do `<Redirect >`