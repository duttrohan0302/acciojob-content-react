import React, {Component} from "react";

class ErrorBoundary extends Component{
    state = {}

    static getDerivedStateFromError(error){
        console.log("Error is, ",error)
        return {hasError:true}
    }

    componentDidCatch(error, info){
        console.log("Error is, ",error)
        console.log("info is, ", info)
    }
    render(){
        console.log(this.state)
        if(this.state.hasError){
            return <h1> Something went wrong</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary;