import React from "react";
import { TabBar } from "antd-mobile";
import history from "../../router/history";
import "./index.less";
import iconHome from "../../assets/images/home.png";
import iconHomeSelected from "../../assets/images/home@selected.png";
import iconMy from "../../assets/images/my.png";
import iconMySelected from "../../assets/images/my@selected.png";

class Tabs extends React.Component{
    constructor(props){
        super(props)
    }


    renderTab() {
        const pathName = window.location.pathname
        const tabs = [
            {
                title: "商城",
                icon: iconHome,
                iconSelected: iconHomeSelected,
                path: '/'
            },
            {
                title: "我的",
                icon: iconMy,
                iconSelected: iconMySelected,
                path: '/mine'
            }
        ]
        return tabs.map((item,index) => {
            return(
                <TabBar.Item 
                    key={index}   
                    title={item.title}
                    selected={item.path === pathName ? true : false}
                    icon={
                        <div style={{
                            width: "22px",
                            height: "22px",
                            background: `url(${item.icon}) center center / 21px 21px no-repeat`
                        }}></div>
                    }
                    selectedIcon={
                        <div style={{
                            width: "22px",
                            height: "22px",
                            background: `url(${item.iconSelected}) center center / 21px 21px no-repeat`
                        }}></div>
                    }
                    onPress={()=>{this.linkTo(item.path)}}>
                </TabBar.Item>
            )
        })
    }

    linkTo(path){
        history.push(path)
    }

    render(){
        return(
            <div className="tabbar">
                <TabBar
                    unselectedTintColor="#353535"
                    tintColor="#353535">
                    { this.renderTab() }
                </TabBar>
            </div>
        )
    }
}
export default Tabs