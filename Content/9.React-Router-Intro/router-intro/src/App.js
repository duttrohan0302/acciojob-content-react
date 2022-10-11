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
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
