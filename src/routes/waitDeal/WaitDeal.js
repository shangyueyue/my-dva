import React from 'react';
import CheckBox  from '@/components/bases/CheckBox';
import ConfirmModal from '@/components/bases/ConfirmModal';
import { InputItem } from 'antd-mobile';

class WaitDeal extends React.Component {

  state={
    isModalVisible: false
  }
  onConfirmClick=()=>{
      this.setState({
        isModalVisible: false
      })
  }

  onCancelClick=()=>{
    this.onConfirmClick();
  }
  handleClick=()=>{
    this.setState({
      isModalVisible: true
    })
  }
  componentDidMount() {
    console.log(123456)
    window.scrollTo(0, 0)
 }
 componentDidUpdate() {
  console.log(11555555)
  window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>
        <h1 onClick={this.handleClick}>this is waitDeal</h1>
        <CheckBox/>

        <br/>
        <InputItem>name</InputItem>
        <InputItem>name</InputItem>
        <InputItem>name</InputItem>
        <InputItem>name</InputItem>
        <InputItem>name</InputItem>
        <InputItem>name</InputItem>
        <InputItem>name</InputItem>
        <InputItem>name</InputItem>
        <InputItem>name</InputItem>
        <InputItem>name</InputItem>
        <InputItem>name</InputItem>
        <InputItem>name</InputItem>
        <InputItem>name</InputItem>
        <InputItem>name</InputItem>
        <InputItem>name</InputItem>
        <InputItem>name</InputItem>
        <InputItem>name</InputItem>
        <InputItem>name</InputItem>
        <InputItem>name</InputItem>
        <InputItem>name</InputItem>
        <InputItem>name</InputItem>
        <InputItem>name</InputItem>
        <InputItem>name</InputItem>
        <button onClick={()=>{this.props.history.push('/application')}}>htishshsghghhg</button>
        <InputItem>name</InputItem>
        <InputItem>name</InputItem>
        <InputItem>name</InputItem>
        <InputItem>name</InputItem>
       
        <ConfirmModal
          isVisible = { this.state.isModalVisible }
          onConfirmClick = { this.onConfirmClick }
          onCancelClick= { this.onCancelClick }
        >
          <div style={{textAlign: 'left'}}>this is confirmModal</div>
        </ConfirmModal>
      </div>
    );
  }
}

export default WaitDeal;
