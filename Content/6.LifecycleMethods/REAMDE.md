# Lifecycle Methods
- React Component Lifecycle is the lifetime of a component.
- Lifecycle methods are series of events that happen throughout the birth, growth and death of a React component.

## What is the React component lifecycle? What are React lifecycle methods?
- In react, components go through a lifecycle of events
  1. Mounting (adding nodes to the DOM)
  2. Updating(altering nodes in the DOM)
  3. Unmounting (removing nodes from the DOM)
  4. Error handling (verifying that our code works and is bug free)
- Think of these as a component's birth, growth, death.
- Error handling is like annual physical checkup

## Mounting lifecycle methods
- The mounting phase refers to the phase during which a component is created & inserted into the DOM.
- The following methods are called in order
    1. constructor()
        - This is usually where we initialize the state, and bind event handlers
        - This is the first method invoked before the component is mounted to the DOM
        - This is not where you would introduce any side effects or subscriptions, such as event handlers
    2. static getDerivedStateFromProps()
        - This is a new React lifecycle method as of React 17 designed to replace `componentWillReceiveProps()`
        - It's main function is to ensure that the state and props are in sync for when it's required
        - This method is called before the component is rendered to the DOM on initial mount
        - It allows a component to update it's internal state in response to a change in props
    3. render()
        - Compulsory lifecycle method
        - We can return plain strings, JSX, React Fragments inside this
        - We can also return boolean or null if we don't want to render anything
        - Remember! This function should be pure, i.e. do not attempt to use setState or interact with the external APIs inside render
    4. componentDidMount()
        - After render is called, the component is mounted to the DOM and this method is invoked
        - We can use this to grab a DOM node from the component tree immediately after it's mounted

## Updating lifecycle methods
- Whenever a change is made to the state or props of a React component, the component is rerendered
- i.e. component is updated
- Following are the lifecycle methods under this
    1. static getDerivedStateFromProps()
        - This is the first Reeact lifecycle method to be invoked during the updating phase
        - This method is invoked in both the mounting & updating phases
    2. shouldComponentUpdate()
        - In most cases, we'll want a component to rerender when state or props changes
        - But still, we do have control over this behavior
        - Within this lifecycle method, we can return a boolean - `true` or `false` & control whether the component gets rerender(upon a change in state)
        - If this function returns false, `render()`, `getSnapshotBeforeUpdate()` & `componentDidUpdate()` won't be called
    3. render()
        - This is called next
        - This is only called if `shouldComponentUpdate()` returns true, which it by default does
    4. getSnapshotBeforeUpdate()
        - Think of it like version control like git
        - Gives the prevProps, and the prevState
        - Usually use it with `componentDidUpdate()`
    5. componentDidUpdate()
        - Accepts three argument - prevProps, prevState, snapshot
        - snapshot is the what we return from `getSnapshotBeforeUpdate()`

## Unmounting lifecycle methods
- The following method is invoked during the component unmounting phase
    1. componentWillUmount()
        - This is invoked immediately before a component is unmounted and destroyed
        - This is the ideal place to perform any necessary clean
        - E.g. clearing up timer(clearInterval or clearTimeout), cancelling network requests or cleaning up any subscriptions that were created in `componentDidMount()`

## Error handling lifecycle methods
- When things go bad in our code, errors are thrown
- The following methods are invoked when an error is thrown by a descendant component
    1. static getDerivedStateFromError(error)
        - Whenever an error is thrown in a descendant component, this method is called first 7 the error is passed as an argument
        - Whatever value is returned from this method is used to update the state of the component
    2. componentDidCatch(error, info)
        - This is also called after an error in descendant component is thrown
        - Apart from error, it is passed one more agument which represents more information about the error