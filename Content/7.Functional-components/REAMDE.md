## Intro to Functional components

- A simple Javascript function which returns something(usually valid JSX)
- We can also arrow functions

- Usually (before React 16.8), we have used React Classes if we wanted to store state, or if we just want to show something, we used functions (presentational components)
- How?

## React Hooks
- A new addition in React 16.8
- They let us hook into (use) state and other React features without using a class
- There are no plans to remove classes from React, hooks are just the next step

### Motivation behind hooks
- hooks solves or atleast eases the following problems
    - It's hard to reuse stateful logic between components
    - Complex components become hard to understand
    - Classes confused both people and machines
        - because for classes we need to understand a lot more concepts e.g. `this` keyword

## Things to Remember
- Only call Hooks at the top level
    - Don't call hooks inside if statements, for loops etc
    - This ensures that hooks are called in the same order each time a component renders
- Only call hooks from React functions
    - You cannot call hooks from regular javascript functions
    - Other than React functions, hooks can also be called from `custom hooks`

## useState
- Used for storing state variable
- How to declare a state variable?
    <pre>
    const [variableName, setVariableName] = useState(initial_value)
    </pre>
- useState gives 2 values
    - The first once is the state variable name 
    - The second one is the function which can be used to update this particular state variable
- How to update a state variable
    <pre>
    setVariableName(new value for variableName)
    </pre>