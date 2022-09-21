import React, { Component, useState } from "react";
import "./App.css";
import ReactMarkdown from "react-markdown";

// function App() {
//   const [markdown, setMarkdown] = useState("");

//   const changedMarkdown = (e) => {
//     setMarkdown(e.target.value);
//   };
//   return (
//     <div className="App">
//       <textarea
//         name="textarea"
//         id="textarea"
//         onChange={changedMarkdown}
//       ></textarea>
//       <ReactMarkdown className="preview" children={markdown} />
//     </div>
//   );
// }

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      markdown: ""
    }

    this.changedMarkdown = this.changedMarkdown.bind(this)
  }

  changedMarkdown(e){
    this.setState({
      markdown: e.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <textarea
          name="textarea"
          id="textarea"
          // onChange={(e)=>this.changedMarkdown(e)}
          onChange={this.changedMarkdown}
        ></textarea>
        <ReactMarkdown className="preview" children={this.state.markdown} />
      </div>
    );
  }
}

export default App;
