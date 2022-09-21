import React from "react";
import Tab from "./Tab";

function Tabs(props){

    const tabsLocal = props.myTabs;
    const setSelectedPage = props.setSelectedPage;

    return(
        <div className="tabs">
            {
                tabsLocal.map((tabName,index)=>(
                    <Tab key={index} tabData={tabName} setSelectedPage={setSelectedPage}/>
                ))
            }
        </div>
    )
}

export default Tabs;