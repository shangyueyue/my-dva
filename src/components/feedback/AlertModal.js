import { Modal } from 'antd-mobile';

const { alert } = Modal;

const AlertModal =(props)=>{
    const {
        title = '系统提示',
        message,
        
    } = props;
    const alertInstance = alert(title,message, [
        { text: '取消', onPress: onCancel },
        { text: '确定', onPress: onConfirm },
    ]);
    function onCancel(){
        alertInstance.close();
    }
    function onConfirm(){
        alertInstance.close();
    }
}

export default AlertModal;