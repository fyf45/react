import React from "react";
import TabBar from "../../components/tabbar";
import { Button } from "antd-mobile";
import {connect} from "react-redux";

class Mine extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className='container'>

                <TabBar />
            </div>
        )
    }
}

export default Mine