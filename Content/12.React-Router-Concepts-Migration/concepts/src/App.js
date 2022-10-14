import './App.css';
import { BrowserRouter, Routes, Route, createBrowserRouter} from "react-router-dom"

import Home from "./Pages/Home"
import Layout from "./Pages/Layout"
import Blogs from "./Pages/Blogs"
import NoPage from './Pages/NoPage';
import {Form} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function FormPage(){
  return(
    <Form method="post" action="/events">
      <input type="text" name="title" />
      <input type="text" name="description" />
      <button type="submit">Create</button>
    </Form>
  )
}





export default App;
