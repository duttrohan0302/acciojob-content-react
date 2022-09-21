import React, { useEffect, useState } from "react";
import People from "./People";

class Birthdays extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            people: [],
            loading: true
        }

        this.syncPeople = this.syncPeople.bind(this)
        this.reloadAll = this.reloadAll.bind(this)
        this.clearAll = this.clearAll.bind(this)
        this.removePerson = this.removePerson.bind(this)
    }

    syncPeople(){
        setTimeout(()=>{
            this.setState({
                people: this.props.data,
                loading: false
            })
        },2000)
    }

    reloadAll(){
        this.setState({
            loading: true
        })
        this.syncPeople()
    }

    clearAll(){
        this.setState({
            people: []
        })
    }

    removePerson(id){
        this.setState({
            people: this.state.people.filter(person=>person.id!==id)
        })
    }

    componentDidMount(){
        this.syncPeople()
    }


  render() {

    const {loading, people} = this.state;

    return (
      <main>
        <section className="container">
          {loading ? (
            <h3>Loading...</h3>
          ) : (
            <>
              <h3>{people.length} Birthdays Today</h3>
              <People people={people} removePerson={this.removePerson} />
              <button
                onClick={this.clearAll}
                disabled={people && people.length ? false : true}
              >
                Clear All
              </button>
              {!people.length ? (
                <button onClick={this.reloadAll}>Reload</button>
              ) : null}
              <div></div>
            </>
          )}
        </section>
      </main>
    );
  }
}

// const Birthdays = ({data}) => {

//     const [people, setPeople] = useState([]);
//     const [loading, setLoading] = useState(true);

//     const clearAll = () => {
//         setPeople([])
//     }

//     const syncPeople = () => {
//         setTimeout(()=>{
//             setPeople(data)
//             setLoading(false)
//         },2000)
//     }
//     const reloadAll = () => {
//         setLoading(true)
//         syncPeople()
//     }

//     useEffect(()=>{
//         syncPeople()
//     },[])

//     const removePerson = (id) => {
//         setPeople(people.filter(person=>person.id!==id))
//     }

//     return(
//         <main>
//             <section className="container">
//                 {
//                     loading ?
//                     <h3>Loading...</h3>
//                     :
//                     <>
//                         <h3>{people.length} Birthdays Today</h3>
//                         <People people={people} removePerson={removePerson}/>
//                         <button onClick={clearAll} disabled={people && people.length ? false : true}>Clear All</button>
//                         {
//                             !people.length ?
//                             <button onClick={reloadAll}>Reload</button>
//                             :
//                             null
//                         }
//                         <div></div>
//                     </>

//                 }
//             </section>
//         </main>
//     )
// }

export default Birthdays;
