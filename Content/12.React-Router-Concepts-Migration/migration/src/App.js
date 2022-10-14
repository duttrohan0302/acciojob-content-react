import './App.css';
import { BrowserRouter, Route, Switch} from "react-router-dom"

import Home from "./Pages/Home"
import Layout from "./Pages/Layout"
import Blogs from "./Pages/Blogs"
import Contact from "./Pages/Contact"
import NoPage from './Pages/NoPage';

function App() {
  return (
    <BrowserRouter>
          <Switch>
          <Route path='/'><Layout />
            <Route exact path="/"><Home /></Route>
            <Route exact path="/blogs"><Blogs /></Route>
            <Route exact path="/contact" component={Contact}/>
            {/* <Route exact path="*"><NoPage /></Route> Doesnt work in v5 */} 
          </Route>
          {/* <Route path="*" element={<NoPage />} /> */}
      </Switch>
    </BrowserRouter>

  );
}





export default App;
