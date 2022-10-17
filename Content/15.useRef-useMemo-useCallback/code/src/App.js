import './App.css';
import RefComp from './RefComp';
import ReactMemoComp from './ReactMemoComp';
import UseMemoComp from './UseMemoComp';
import UseCallbackComp from './UseCallbackComp';

function App() {
  return (
    <div className="App">
      Basic App.js
      <RefComp />
      <ReactMemoComp />
      <UseMemoComp />
      <UseCallbackComp />
    </div>
  );
}



export default App;
