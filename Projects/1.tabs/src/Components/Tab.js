import React from "react";

const Tab = (props) => {

    const tabData = props.tabData;
    const setSelectedPage = props.setSelectedPage;
    
    return (
        <div className="tab" onClick={()=>setSelectedPage(tabData)}>
            <a href="#">{tabData}</a>
        </div>
    )
}

export default Tab;