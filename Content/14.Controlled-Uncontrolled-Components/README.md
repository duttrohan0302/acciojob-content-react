## Controlled Components

- HTML form elements work a bit differently from other DOM elements in React because form elements naturally keep some internal state.
- In HTML, form elements like `<input>`, `<textarea>` and `<select>` typically maintain their own state and update it based on user input. In React, mutable state is kept in the state property of the component and only updated with setState(or by useState func).

- In checkbox, the value resides at event.target.checked, whereas in other components like input, textarea or select, it resides at event.target.value

