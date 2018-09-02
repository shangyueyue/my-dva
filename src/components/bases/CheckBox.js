import React from 'react';
import { Checkbox, Toast } from 'antd-mobile';

class CheckBox extends React.Component{

    state={
        isChecked: '1'
    }
    handleOnChange=(value)=>{
        console.log("value",value);
        this.setState({isChecked:value});
        Toast.loading('加载中...', 0);

    }


    render(){
        return(
            <div>
                <Checkbox checked={this.state.isChecked === '1'} onChange={this.handleOnChange.bind(this,'1')} />
                <br/>
                <Checkbox checked={this.state.isChecked ==='2'} onChange={this.handleOnChange.bind(this,'2')} />
                <br/>
                <Checkbox checked={this.state.isChecked === '3'} onChange={this.handleOnChange.bind(this,'3')} />
            </div>
        )
    }

}

export default CheckBox;