# Components

- They are reusable fractions of our page
- Two types of components, class and functional

## Class based components
- Also known as stateful component
- Before React 16.8, the only way to track state and lifecycle(when the page loads or when a variable(state) changes etc), was by using Class Components
- Functional components at that time were only meant for presentational view

## Functional based components
- Also known as stateless component
- Later we will see how to store state in functional components
- Nowadays, mostly functional components are used

## State
- Data created inside a component
- It can be updated/added/deleted inside this component only
- Whenever it is updated, this whole component re-renders

## Props
- Props are data passed from one component to another
- State of one component if passed to another components, becomes the props there
- Any normal static data other than state can also be passed down as props

## JSX
- JSX stands for JavaScript XML
- It allows us to run write HTML in React
- Whenever using JSX, make sure React is in scope(i.e. you have imported React)
- It's not compulsory to use JSX but it makes it easier to write React applications
- It allows us to write HTML elements in JS and place them in the DOM without any `createElement()` and/or `appendChild()` methods
- All JSX expressions must have only 1 parent element
- If you want sister elements, without using extra divs, you can wrap them in React fragment `<></>` or `<React.Fragment></React.Fragment>`
- What is the benefit of that? Why not use an extra div?
- React fragment does not add any extra node to your dom
- Elements must be closed (e.g. `<br />` and not `<br>`)
- Use className instead of class, as class is a reserved keyword
- We can apply conditions here to change our JSX elements