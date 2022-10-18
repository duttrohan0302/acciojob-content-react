import './App.css';
import ContextProblem from './ContextProblem';
import ContextSolution from './ContextSolution';
import ReducerProblem from './ReducerProblem';
import ReducerSolution from './ReducerSolution';
import ShoppingListUsingReducer from './useReducerExample';

function App() {
  return (
    <>
      <ContextProblem />
      <ContextSolution />
      <ReducerProblem />
      <br />
      <ReducerSolution />
      <br />
      <ShoppingListUsingReducer />
    </>
  );
}

export default App;
