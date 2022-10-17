# React Hooks

- We have already covered useState and useEffect

## useRef
- `Refs` are special attribute that are available on all React components. They allow us to create a reference to a given element/component when the component mounts.
- useRef allows us to easily use React refs
- Once we create a reference, we use the current property to modify(mutate) the element's property or can call any available methods on that element (like .focus() to focus an input)
- The useRef Hook allows us to persist values between renders.
#### Refs do not cause Re-renders unlike useState(controlled component method)
- If we tried to count how many times our application renders using the `useState` hook, we would be caught in an infinite loop since this hook itself causes a re-render.
- To avoid this, we can use the `useRef` hook.
- This hook can be used to store a mutable value that does not cause a re-render when updated.

## Hooks and Performance

### Preventing Re-renders and React.memo
- React.memo is a function that allows us to optimize the way our components are rendered.
- It performs memoization to prevent components from re-rendering when they do not need to.
- IMP!!! React.memo helps most with preventing lists of components from being re-renders when they parents components re-render.

### useMemo
- While React.memo() is a HOC, useMeo() is a React hook.
- With useMemo(), we can return memoized values and avoid re-rendering if the dependencies to a function ahve not changed.
#### Things to Remember
- We may rely on useMemo() as a performance optimization, not as a semantic guarantee.
- Every value referenced inside the function should also appear in the dependencies array

## Callbacks functions and useCallback
- useCallback is a hook that is used for improving our component performance
- Callback functions are the name of the functions that are "called back" within a parent component.
- useCallback functions in a similar way as React.memo. It memoizes callback functions so it's not recreated on every re-render. Using useCallback correctly can improve the performance of our app.
<pre>
    useCallback(()=>{
        myCallbackFunction()
    },[dependencies])
</pre>