import React, { Component } from "react";

class PageWithErrors extends Component{

    componentDidMount(){
        throw new Error("Some error")
    }

    render(){
        return(
            <div>
                Hey there
            </div>
        )
    }
}
export default PageWithErrors;