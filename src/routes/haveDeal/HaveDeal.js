import React from 'react';
// import { InputItem } from 'antd-mobile';
import AlertModal from '../../components/feedback/AlertModal'

class HaveDeal extends React.Component {
  handleClick=(e)=>{
    console.log(e.target.dataset.age)
  }
  handleShowModal=()=>{
    console.log(111)
    const message="ddfjsnnbb"
    AlertModal({message})
  }
  render() {
    const msg='<a data-age="24">handleClick</a>'
    return (
      <div>
        <div onClick={this.handleShowModal}>shnsggnng</div>
        <div onClick={ this.handleClick} dangerouslySetInnerHTML={{__html: msg }}></div>
      </div>
    );
  }
}

export default HaveDeal;
