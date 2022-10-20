## Redux Concepts Continued

### combineReducers
<pre>
import { combineReducers } from "react-redux"
</pre>
- Combines multiple reducers and gives the same property names inside which we have our state
- State becomes 
<pre>
{
    counter: {
        num: 5
    },
    rotation: {
        rotating: true
    }
}
</pre>
- Must provide initial state to reducers in this case.

## Provider
<pre>
import { Provider } from "react-redux"
</pre>
- We need to tell our react app that we have a global state, and we provide the store for that
- Similar to how we had Context.Provider when we were learning about Context in useConsumer hook class

## Store
- It brings out the actions and reducers together, holding and changing the state for the whole app
- There can only be 1 store in an app
- We use createStore function from redux to create a store, nowadays that's deprecated so we can also use configureStore function from redux-toolkit to create the store
- To created the store by exporting configureStore which takes a default state and we create the store using the creaed reducer and default state.

## Connect
<pre>
import { connect } from "react-redux"
</pre>
- This connects our component to redux store
- We need get both our state and the actions we created
- For state, we use mapStateToProps and for actions we use mapDispatchToProps
- Syntax is
<pre>
// instead of 
export default App
// it comes
export default connect(mapStateToProps, mapDispatchToProps)(App)
</pre>