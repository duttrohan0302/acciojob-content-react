# State & Props

- In last class we saw how we can create state and use it, and how we can pass props
- In this class, we will see how to update state as well

## Updating State
- To update state write
    <pre>
    this.setState({
        stateVariableKey: stateNewValue
    })
    </pre>
- REMEMBER!!! If any of your functions in class components are updating state or using `this` keyword, you have to bind the function in the constructor
    <pre>
    this.functionName = this.functionName.bind(this)
    </pre>
- No two components should have the same hierarchy and id, e.g. in map, every child should have it's own unique key

## Virtual DOM
- It's a lightweight JS representation of the Document object model used in frameworks like React
- In this, an idea or virtual representation of a UI is kept in memory & synced with the "real" DOM by a library such as ReactDOM. This is called reconcillation.
- ReactDOM compares the differences and only changes the node(& it's children) where the updation took place