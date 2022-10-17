import React from "react";

class UncontrolledComponent extends React.Component{

    constructor(props){
        super(props);
        this.handleSubmitForm = this.handleSubmitForm.bind(this)

        this.inputName = React.createRef();
    }
    handleSubmitForm(event){
        event.preventDefault();
        console.log("form was submitted", this.inputName.current.value)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmitForm}>
                <label htmlFor="name">
                    Name: &nbsp;
                    <input type="text" name="name" ref={this.inputName}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}
export default UncontrolledComponent;