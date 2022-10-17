import React, {useRef, useState, useEffect} from "react";
const RefComp = () => {

    const [query, setQuery] = useState("")
    const previousInputValue  = useRef("")
    const searchInput = useRef(null);
    const count = useRef(0);

    useEffect(()=>{
        count.current = count.current + 1;
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(searchInput.current.value)
    }

    const handleClearSearch = () => {
        searchInput.current.value=""
        searchInput.current.focus();

    }

    useEffect(()=>{
        previousInputValue.current = query
    },[query])
    console.log("component is rerendering")
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" value={query} onChange={e=>setQuery(e.target.value)}/>
            {/* <input type="text" ref={searchInput}/> */}
            <button type="submit">Search</button>
            <button type="button" onClick={handleClearSearch}>Clear</button>
        </form>
        <h1>Render Count: {count.current}</h1>
        <h2>Current Value: {query}</h2>
        <h2>Previous Value: {previousInputValue.current}</h2>
        <CounterApp />
        </>
    )
}

const CounterApp = () => {
    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     setCount(count+1)
    // }, [count]);
    return(
        <div>
            Count is {count}
            <br />
        </div>
    )
}

export default RefComp;