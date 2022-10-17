import React,{useState,useMemo} from "react";

const UseMemoComp = () => {
    
    const [number, setNumber] = useState(1);
    const [inc, setInc] = useState(0);

    const factorial = useMemo(()=>factorialOf(number),[number])
    // const factorial = factorialOf(number);

    const onClick=() =>setInc(i=>i+1)
    
    return(
        <div>
            Factorial of 
            <input type="text" value={number} onChange={e=>setNumber(Number(e.target.value))} /> 
            is {factorial}
            <button onClick={onClick}>Re-render</button>
        </div>
    )
}


const factorialOf = (n) =>{
    console.log("factorialOf(n) called")
    return n<=0 ? 1 : n*factorialOf(n-1)
}

export default UseMemoComp;