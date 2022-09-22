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