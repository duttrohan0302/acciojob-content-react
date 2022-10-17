import './App.css';
import ControlledComponentFunctional from './ControlledComponent';
import UncontrolledComponent from './UncontrolledComponent';

function App() {
  return (
    <div className="App">
      Basic App.js
      <ControlledComponentFunctional />
      <hr />
      <UncontrolledComponent />
      <table>
        <thead >
          <tr>
          <td>feature</td>
          <td>uncontrolled</td>
          <td>controlled</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>One time value retrieval(on Submit)</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Validating on Submit</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Instant Field Validation</td>
            <td>No</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Conditionally disabling submit button</td>
            <td>No</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Enforcing input format</td>
            <td>No</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Several inputs for one piece of data</td>
            <td>No</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Dynamic Input</td>
            <td>No</td>
            <td>Yes</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}



export default App;
