import React from "react";

const Content = (props) => {

    const { selectedPage } = props;
    // equivalent to
    // const selectedPage = props.selectedPage;

    return(
        <div className="viewport">
            Pages go here - {selectedPage}
        </div>
    )
}

export default Content;