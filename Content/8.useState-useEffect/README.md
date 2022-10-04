## useEffect Hook
- Another reason why we use React hooks are their expressiveness
- We can do so much by writing so little
- But the brevity has a price, they're sometimes relatively difficult to get started 

- `useEffect()` -  The hook that manages side effects in functional React components

### useEffect() is for side effects
- What are side effects?
    - A functional React component uses props and/or state to calculate the output
    - If the functional component makes calculations that don't target the output value, then these calculations are named as side effects
    - E.g. of side effects are fetch requests, manipulating DOM directly, using timer functions like `setTimeout()` etc
    - The component rendering & side effects logic are independent. It would be a mistake to perform side-effects directly in the body of the component, which primarily used to compute the output
    - How to decouple rendering from the side effect? We can use `useEffect()`
    - This hook runs side effects independently of rendering
- useEffect() hook accepts 2 arguments
    <pre>
    useEffect(callback[, dependencies]);
    </pre>
    - `callback` is the function containing the side-effect logic. callback is executed right after changes were being pushed to the DOM
    - `dependencies` is an optional array of dependencies. `useEffect()` executes `callback` only if the dependencies have changed between renderings
- The sole purpose of `useEffect()`
    - Put your side-effect logic into the `calback` function, then use the dependencies argument to control when you want the side-effect to run.

### Dependencies argument
- `dependencies` argument of useEffect(callack, dependencies) lets us control when the side effect runs.
- When dependencies are:
    1. Not provided: The side-effect runs after every rendering
    <pre>
    import { useEffect } from "react";
    function MyComponent(){
        useEffect(()=>{
            // Runs after EVERY rendering
        })
    }
    </pre>
    2. An empty array: The side-effect runs once after the initil rendering
    <pre>
    import { useEffect } from "react";
    function MyComponent(){
        useEffect(()=>{
            // Runs ONCE after initial rendering
        },[])
    }
    </pre>
    3. Has `props` or `state` values `[prop1, prop2,..., state1, state2]`: The side effect runs only when any dependency value changes
    <pre>
    import { useState, useEffect } from "react";

    function MyComponent({prop1}){
        const [state1, setState1] = useState(' ')
        useEffect(()=>{
            // Runs ONCE after initial rendering
            // and after every rendering ONLY if `prop` or `state` changes
        },[prop1, state1])
    }
    </pre>

### Component Lifecycle
1. Component did mount
    - Use an empty dependencies array to invote a side-effect once after component mounting
2. Component did update
    - Each time the side-effect uses props or state values, you must indicate these values as dependencies

### Side-effect Cleanup
- Some side-effect needs cleanup. E.g. Closing a socket, clearing timers
- If the `callback` of `useEffect(callback, deps)` returns a function, then `useEffect()` considers this an effect cleanup:
    <pre>
      useEffect(() => {
        effect
        return () => {
            // cleanup function
        };
    }, [deps]);
    </pre>
- Cleanup works the following way:
    -After initial rendering, useEffect() invokes the callback having the side-effect. `cleanup` function is not invoked.
    - On later renderings, before invoking the next side-effect callback. useEffect() invokes the cleanup function from previous side-effect execution(to cleanup everything after the previous side-effect), then runs the current side-effect
    - Finally, after unmounting the component, useEffect() invokes the cleanup function from the latest side-effect
    - IMPORTANT!!! Must see cleanup example in the code