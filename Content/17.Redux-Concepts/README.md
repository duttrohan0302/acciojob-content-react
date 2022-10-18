# Redux

## What is Redux?
- Redux is a pattern and library for managing and updating application state, using events called "actions".
- It serves as a centralized store for state that needs to be used across the entire application, with rules ensuring that state can only be updated in a predictable fashion.

## Why should we use Redux?
- Redux helps us to manage "global" state - state that is needed across many parts of the application.
- The patterns and tools provided by Redux makes it easier to understand when, where, why, and how the state in our application is being updated, and how our application logic will behave when those changes occur.

## When should we use Redux?
Redux helps us deal with shared state management, but like with any other tool, it has tradeoffs.
There are more concepts to learn, and more code to write. It also adds some indirection to our code, and asks us to follow certain restrictions.  
It's a trade off between short term and long term productivity.

Redux is more useful when - 
- We have large amounts of application state that are needed in many places in the app.
- The app state is updated frequently over time.
- The logic to update that state may be complex.
- The app has a medium or large-sized codebase, and might be worked on by many people.

#### Not all apps need Redux. Analyse the app before building before making a decision.

## Redux Libraries and Tools
- Redux is a small standalone JS library but it is commonly used with several other packages.

### React-Redux
- Redux can integrate with any UI framework, and is most frequently used with React.
- React-Redux is the official package that allows our React components interact with a Redux store by reading pieces of state and dispatching actions to update the store.

### Redux DevTools Extension
- It shows a history of the changes to the state in our Redux store over time.
- This allows us to debug our applications effectively including using powerful techniques like "time-travel debugging".


## Redux Terms and Concepts

### State Management
- See the counter example in src/App.js
- It is a self contained app with the following parts 
    - The `state`, the source of truth that drives our app
    - The `view`, a declarative description of the UI based on current state
    - The `actions`, the events that occur in the app based on user input, and triggers the updates in the state
- This is a small exxample of `one-way data flow`
- The state describes the condition of the app at a specific point in time
- The UI is rendered based on that state
- When something happens(such as user clicking a button), the state is updated based on what occurred 
- The UI re-renders based on new state
- ... -> State -> View -> Actions -> State -> View -> ... 
- Problem -> However, the simplicity can break down when we have multiple components that needs to share and use the same state, especially if those components are located in different parts of the application. Sometimes this can be solved by `lifting state up` to parents components, but that doesn't always help.
- One way to solve this is to extract the shared state from the components, and put it into a centralized location outside the component tree.
- With this, our component tree becomes a big "view" and any component can acess the state or trigger actions, no matter where they are in the tree.
- By defining and separating the concepts involved in state management and enforcing rules that maintain independence between views and states, we give our code more structure and maintainability.
- This is the main idea behind Redux: a centralized place to contain the global state in our application and specific patterns to follow when updating that state to make the code predictable.

### Immutability
- `Mutable` means `changeable`. If something is `immutable`, it can never be changed.
- JS objects and arrays are mutable by default. If I create an object, I change the contents of it's fields. If I create an array, I can change the contents as well.
- In order to update values immutably, our code must make copies of existing objects/arrays and then modify the copies, we do this by using spread operators and array methods which return new copies of the array instead of mutating the original array.
- Redux expects that all state updates are done immutably.

## Terminology
### Actions
- An action is a plain JS object that has a `type` field. 
- Think of action as an event that describes something that happened in the application.
- The `type` field should be a string that gives this action a descriptive name.
- An action object can have other fields with additional information about what happened. By convention we put that information in a field called `payload`;
<pre>
const addTodoAction = {
    type: "ADD_ITEM",
    payload: {
        name: "Item2",
    }
}
</pre>

### Action Creators
- An action creator is a function that creates and returns an action object. We typically use these so that we don't have to write the action object by hand every time.
<pre>
const addTodo = text => {
    return {
        type: "ADD_ITEM",
        payload: {
            name: text,
        }
    }
}
</pre>

### Reducers
- A `reducer` is a function that receives the current state and an action object, decides how to update the state(usually using a if/else or switch case defined by the programmer), and returns the new state: `(state, action) => newState`
- Think of reducer as an event listener which handles events based on the received action(event) type

Reducers must always follow some specific rules:
- They should calculate the new state values based on the `state` & `action` arguments
- They are not allowed to modify the existing `state`. Instead, they must make immutable updates, by copying the existing `state` and making changes to the copies value.
- They shouldn't do any asynchronous logic, calculate random values or cause any other "side effects"  

The logic inside reducer functions typically follow the same series of steps
- Check to see if the reducer cares about this action
    - If so, make a copy of the state, update the copy with new values and return it.
- Otherwise, return the existing state unchanged

### Store
- The current Redux application state lives in an object called the store.
- The store is created by passing in a reducer and has a method called getState that returns the current state value.

### Dispatch
- The Redux store has a method called dispatch. 
- The only way to update the state is to call store.dispatch() and pass in an action object.
- THe store will run it's reducer function & save the new state value inside, and we can call getState() to retrieve the updated value.

## Redux Application Data Flow
- Initial Setup 
    - A redux store is created using a root reducer function
    - The store calls the root reducer once and saves the return value as it's initial state.
    - When the UI is first rendered, UI components access the current state of the Redux Store, and use that data to decide what to render. They also subscribe to any future store updates so they can know if the state has changed.
- Updates:
    - Something happens in the app, e.g. user clicking a button
    - The app code dispatches an action to the Redux store `dispatch({type: 'increment'})`
    - The store runs the reducer function again with the previous `state` and current `action`, and saves the return value in the new `state`
    - The store notifies all parts of the UI that are subscribed that the store has been updated
    - Each UI component that needs data from the store checks to see if the parts of the state they need have changed
    - Each component that sees its data has changed forces a re-render with the new data, so it can update what's shown on the screen
