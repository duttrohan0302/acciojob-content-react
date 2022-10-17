## Controlled Components

- HTML form elements work a bit differently from other DOM elements in React because form elements naturally keep some internal state.
- In HTML, form elements like `<input>`, `<textarea>` and `<select>` typically maintain their own state and update it based on user input. In React, mutable state is kept in the state property of the component and only updated with setState(or by useState func).

- In checkbox, the value resides at event.target.checked, whereas in other components like input, textarea or select, it resides at event.target.value


## Uncontrolled Component
- In most cases, it is recommended to use controlled components to implement forms. In a controlled component, form data is handled by a React component.
- The alternative is uncontrolled components where form data is handled by the DOM itself.

- To write an uncontrolled component, instead of writing an event handler for every state update, we can use a ref to get form values from the DOM.
- Since an uncontrolled component keeps the source of truth in the DOM, it is sometimes easier to integrate React and non-React code when using uncontrolled comonents. It's also less code.


### Refs
- Refs provide a way to access DOM nodes or React elements created in the render method
- Typically in React data flow, props are the only way that parent components interact with their children. To modify a child, we need to re-render it with new props.
- But there are some cases where we need to imperatively modify a child outside of the typical data flow.
- The child to be modified could be an instance of a React component or it could be a DOM element(like an input tag)
- In both of these cases, React provides an escape hatch

### When to Use Refs
- Managing focus, text selection or media playback
- Integrating with theird-party DOM libraries
- Triggering imperative animation
- Don't overuse Refs




