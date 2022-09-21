import React,{useState, useEffect} from "react";
import './App.css';
import Loading from "./Components/Loading";
import Tours from "./Components/Tours";
import Tour from "./Components/Tour";
import fetchTours from "./APIs/fetchTours";

function App() {

  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(true);

  const getTours = async() => {
    try{
      setLoading(true)
      const data = await fetchTours();
      setTours(data)
      setLoading(false)
    }catch(err){
      console.log(err)
      setLoading(false)
    }
  }


  useEffect(() => {
    getTours()
  }, []);

  const removeTour = (id) => {
    setTours(tours.filter(tour=>tour.id!==id))
  }
  if(loading){
    return(
      <main>
        <Loading />
      </main>
    )
  }

  if(tours.length===0){
    return(
      <main>
        <div className="title">
          <h2>No tours left</h2>
          <button className="btn" onClick={getTours}>refresh</button>
        </div>
      </main>
    )
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  );
}

export default App;
