import "./App.css";
import { useEffect, useState } from "react";
const App = () => {
  const [name, setName] = useState("Rohan");
  const [message, setMessage] = useState("hello World")
  return (
    <div className="App">
      Basic message
      <Greet name={name} setName={setName} />
      <input type="text" placeholder="Msg" value={message} onChange={(e)=>setMessage(e.target.value)}/>
      <RepeatMessage message={message} />
      {/* <GreetComponentDidMountExample name={name} /> */}
    </div>
  );
};

// const Greet = ({name}) => {
//   const message = `Hello, ${name}`; // Calculates output

//   //Bad!
//   document.title = `Greetings to ${name}` // Side effect

//   return <div>{message}</div> // Calculates output
// }

const Greet = ({ name, setName }) => {
  //  Example for componentDidUpdate
  const message = `Hello, ${name}`; // Calculates output

  // const changeDocTitle = () => {
  //   //Good!
  //   console.log("useEffect just ran");
  //   document.title = `Greetings to ${name}`; // Side effect
  // };
  // useEffect(changeDocTitle, [name]);

  useEffect(() => {
    //Good!
    console.log("useEffect just ran");
    document.title = `Greetings to ${name}`; // Side effect
  }, [name]);

  return (
    <div>
      {message}
      <br />
      <button onClick={() => setName("Dutt")}>Change name to Dutt</button>
      <button onClick={() => setName("Rohan")}>Change name to Rohan</button>
    </div> // Calculates output
  );
};

const GreetComponentDidMountExample = ({ name }) => {
  const message = `Hello ${name}`;

  useEffect(() => {
    //Runs once, after mounting
    console.log("component did mount functionality using useEffect");
    document.title = "Greetings Page";
  }, []);

  return <div>{message}</div>;
};

const RepeatMessage = ({ message }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log(message);
    }, 2000);

    // comment this return statement & change something in input box to see what happens if we dont use cleanup
    return()=>{
      clearInterval(interval)
    }
  }, [message]);
  return <div>I am logging to console {message}</div>;
};

export default App;
