import React from "react";
import { Link } from 'react-router-dom'
import "./index.less";
import { SearchBar,Button } from "antd-mobile";
import TabBar from "../../components/tabbar";

class Home extends React.Component {

    componentDidMount(){
        console.log(process.env.NODE_ENV)
    }

    render(){
        return(
            <div className="home">
                <SearchBar placeholder="Search" maxLength={8} />
                <div className="test">this is home page</div>
                <Link to={'/counter'}>go to counter</Link>
                <TabBar />
            </div>
        )
    }
}
export default Home