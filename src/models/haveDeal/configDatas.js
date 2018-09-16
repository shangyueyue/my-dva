
const dataItem = {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: 'Meet hotel',
    des: '不是所有的兼职汪都需要风吹日晒',
};
export const listResponse=()=>{
    const result = [];
    for (let i = 0; i < 18; i++) {
        dataItem.key = i
        result.push(dataItem)
    }
    return  result;
}