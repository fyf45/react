import * as React from 'react';
import { connect } from 'react-redux'
import { Button }  from 'antd-mobile'
import { add, minus, asyncAdd,getData } from '../../actions/counter'

@connect((state)=>({num: state.counter.num}),{ add, minus, asyncAdd,getData })
export default class Counter extends React.Component{


    componentDidMount(){

    }

    loadData(){
        this.props.getData({})
    }

    render(){
        return(
            <div className='container'>
                <Button onClick={()=>this.props.add()}>加</Button>
                <p style={{textAlign: 'center'}}>{this.props.num}</p>
                <Button onClick={()=>this.props.minus()}>减</Button>
                <Button onClick={()=>this.props.asyncAdd()}>异步加</Button>
                <Button onClick={()=>this.loadData()}>请求数据</Button>
            </div>
        )
    }
}