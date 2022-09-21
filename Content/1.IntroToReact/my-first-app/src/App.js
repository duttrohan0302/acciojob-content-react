import logo from './logo.svg';
import './App.css';

const var1 = "Rohan"

function App() {

  const var2 = "Dutt"
  console.log("hey there", var1, var2)
  return (
    // <h1>
    //   Not Allowed
    // </h1>
    <div className='my-class' style={{backgroundColor:"yellow"}}>
      Hello {var1} {var2} {5*4-3+8}
      <div>
        Sister div
        <h1>Child heading</h1>
      </div>
      <div>
        Sister div
      </div>
    </div>
    
  );
}

export default App;
