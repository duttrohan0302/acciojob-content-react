# React Advanced Hooks

## useContext Hook
### React Context
- React Context is way to manage state globally.
- It can be used together with the `useState` hook to share state between deply nested components more easily than with `useState` alone

### Problem
- Let's say we create a state variable in Component1 which needs to be used in Component5, we will have to pass it down as props thorough all the Components 1-5, which is very troublesome and waste of resources.
- We want to avoid the problem of creating multiple props to pass down data two or more levels from a parent component.

### Solution
- Create context
- To create context, import `createContext` from react and initialize it.
<pre>
const UserContext = createContext();
</pre>
- Usually contexts are global so we initialize them in a separate file and then import & use wherever we want.
- Whatever data we want that needs to be available for all the child components, we provide it as the value prop using Provider form createContext  
`<UserContext.Provider value={user}> `
`...`
`</UserContext.Provider>`  
- Wherever we want to consume it we use Consumer and then give our own variable name
`<UserContext.Consumer>`
`{(user)=> `In component 5 with ${user}`}`
`</UserContext.Consumer>`
- Still, if we have too many providers, it's difficult to use Consumer due to it's big syntax
- React.Context Consumer adds extra nesting, to avoid that we use useContext hook
- React hook useContext makes it much easier, all we need to do is give the context name as the argument to useContext hook.

## useReducer
### Reducers
- Reducers are pure functions which accepts 2 arguments and returns a new state value based on that
- Reducers are simple, predictable(pure) functions that take a previous state object and an action object and return new state object.
- The `useReducer` Hook is similar to the `useState` hook.
- It allows for custom state logic
- If we find ourselves keeping track of multiple pieces of state that rely on complex logic, `useReducer` may be useful.
- `useReducer` takes 2 argument, the reducer function and the initial state
- It returns the state and the dispatch
- Dispatch is used to call any action of given type, which the reducer function handles

## Custom Hooks
- We can use the combination of the pre-existing hooks to create our own custom hook
- Look into UseFetch.js and CustomHookUsage.js in the code to see an example