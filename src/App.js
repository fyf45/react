import React, { Component } from 'react';
import { connect } from 'react-redux'
import AppRouter from './router/AppRouter';
import { Modal } from 'antd-mobile';
import './App.css'

@connect((state)=>({global: state.global}))
class App extends Component {

  render() {
      const {
          visible,
          closable,
          popup,
          transparent,
          title,
          platform,
          footer,
          animationType
      } = this.props.global
      return (
          <div>
              <AppRouter />
              <Modal
                  visible={visible}
                  closable={closable}
                  popup={popup}
                  transparent={transparent}
                  title={title}
                  platform ={platform}
                  onClose={()=>{}}
                  footer={footer}
                  animationType={animationType}
                  wrapClassName='model-wrap'
                  className ='model'
              >
                  {this.props.global.content}
              </Modal>
          </div>

      );
  }
}

export default App;
