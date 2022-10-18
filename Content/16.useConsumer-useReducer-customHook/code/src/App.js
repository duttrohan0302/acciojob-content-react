import './App.css';
import ContextProblem from './ContextProblem';
import ContextSolution from './ContextSolution';
import ReducerProblem from './ReducerProblem';
import ReducerSolution from './ReducerSolution';
import ShoppingListUsingReducer from './useReducerExample';
import CustomHookUsage from './CustomHookUsage';

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
      <h2>Custom Hook Example</h2>
      <CustomHookUsage />
    </>
  );
}

export default App;
