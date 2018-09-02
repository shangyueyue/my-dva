import React from 'react';
import { Modal} from 'antd-mobile';

class ConfirmModal extends React.Component{

    state={
        isVisible: true
    }
    onCancele=()=>{
       const {onCancelClick} =this.props;
       if(onCancelClick) onCancelClick();
    }
    onConfirm=()=>{
       console.log(2);
       const {onConfirmClick} =this.props;
       if(onConfirmClick) onConfirmClick();
    }
    render(){
        const {
                title='系统提示',
                isVisible=false,
                confirmText='确定',
                cancelText='取消'
              }=this.props;
        return(
            <div>
                <Modal
                    visible={isVisible}
                    title={title}
                    footer={[
                                { text: cancelText, onPress: this.onCancele },
                                { text: confirmText, onPress: this.onConfirm }
                            ]}
                    closable={false}
                    transparent
                    maskClosable={false}
                >
                   {this.props.children}
                </Modal>
            </div>
        )
    }
}


export default ConfirmModal;