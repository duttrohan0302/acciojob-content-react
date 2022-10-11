import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom"

import Home from "./Pages/Home"
import Layout from "./Pages/Layout"
import Blogs from "./Pages/Blogs"
import Contact from "./Pages/Contact"
import NoPage from './Pages/NoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LayoutCoveredComponent><Home /></LayoutCoveredComponent>} />
          <Route path="/blogs" element={<LayoutCoveredComponent><Blogs /></LayoutCoveredComponent>} />
          <Route path="contact" element={<LayoutCoveredComponent><Contact /></LayoutCoveredComponent>} />
          <Route path="*" element={<LayoutCoveredComponent><NoPage /></LayoutCoveredComponent>} />
      </Routes>
    </BrowserRouter>
  );
}

const LayoutCoveredComponent = (props) => {
    return(
        <>
            <Layout />
            {props.children}
        </>
    )
}
export default App;
