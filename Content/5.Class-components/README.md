# Class based Components or Stateful Components

## How to convert function component to Class Component
- This is only when you don't have state
1. Create an ES6 class with the same name that extends React.Component
    <pre> 
    class YourClassName extends React.Component{
        
    }
    </pre>
2. Add a single empty method to it called render()
3. Move the return(...) into the render method 
4. Replace props with this.props in the render() body
5. Delete the remaining empty function declaration

## Intro to Lifecycle Methods
- componentDidMount() method runs after the component output has been rendered to the DOM

## Recap
- When Clock is passed to root.render(), React calls the constructor of the Clock component. Since Clock needs to show the current time, it initializes this.state with an object including the current time. We will update the time later.
- React then calls the Clock component's render() method. This is how react learns what should be displayed on the screen. React updates the DOM to match the Clock's render output.
- When the Clock output is inserted in the DOM, componentDidMount() is fired. And it asks the browser to setup a timer to call the component's tick() method once every second.
- Every second the browser calls the tick() method. Inside it, the Clock component schedules a UI update, using this.setState and updates the current time.
- Thanks to setStae(), React knows that state has changed, and calls the render() method again to learn what should be on the screen. This time, the this.state.date in the render() method will be different, and so the render output will include the updayed time. React updates the DOM accordingly.
- If the Clock component is ever removed from the DOM, React calls the componentWillUnmount() lifecyle method so the timer is stopped.

## Using state correctly
- Do not modify state directly
    <pre>
    //wrong
    this.state.comment = "Hello"
    </pre>
- Instead, use `setState()`
    <pre>
    this.setState({comment: "hello"})
    <pre>
- The only place where you can directly assign this.state is the constructor

## Things to Remember while using State
- State updates may be async
    - React batches multiple setState() calls into a single update for performance
    - Because this.props & this.state may be updated asynchronously, you should not rely on their values for calculating the next state
    - Insread use the second form of setState which accepts a function with currentState & currentProps as arguments
- State updates are merged
    - Let's say you have 2 state items, name, and age.
    - When I am using setState to update name, age doesn't get overwritten 
        <pre>
        this.setState({
            name: "New Name"
        })
        // the other values in state remains intact
        </pre>

- To have default value of props (to avoid getting undefined), we can use the following in a class component
    <pre>
    YourClassName.defaultProps={
        propName1: propValue1
        propName2: propValue2
    }
    </pre>
- Still, if you explicitly have to give undefined value, you can always provide the prop value as null
- What are this.props.children?
    - Let's say you have a component Comp1, now when you're rendering it, if instead of     `<Comp1 />`, I do `<Comp1>Some div tags here</Comp1>`
    - some div tags here become the value of this.props.children inside Comp1 component declaration

## React without ES6
- If we want to use React without ES6 syntax, we have to install create-react-class package and use it's methods
- See the [App with/without ES6 synatx](https://github.com/duttrohan0302/acciojob-content-react/tree/master/Content/5.Class-components/react-without-es6/src/App.js) to compare the changes 