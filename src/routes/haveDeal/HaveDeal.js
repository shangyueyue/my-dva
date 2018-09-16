
import  React from 'react';
import { connect } from 'dva'
import { ListView, Flex } from 'antd-mobile';

class HaveDeal extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    })
    this.state = {
      dataSource: dataSource.cloneWithRows({}),
    }
    this.isLoading=false;
  }

  componentDidMount() {
    this.props.dispatch({
      type:'haveDeal/fetchList',
      payload:{currentPage:1}
    })
    this.isLoading=true;
  }

  // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
  componentWillReceiveProps(nextProps) {
    const { haveDeal: { listCurrentDatas }} = nextProps ;
    if (this.isLoading) {
      // console.log("nextProps",nextProps,this.props.haveDeal.listCurrentDatas)
      this.isLoading=false;
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(listCurrentDatas),
      });
    }
  }

  onEndReached = (event) => {
    const {currentPage,totalPages}= this.props.haveDeal;
    if(currentPage*5 >= totalPages) return;
    if(!this.state.isLoading){
      const {currentPage}= this.props.haveDeal;
      this.isLoading=true;
      this.props.dispatch({
        type:'haveDeal/getList',
        payload:{nextPage: currentPage+1}
      })
    }
  }

  _renderRow =(dataRow,rowId)=>{
    console.log("rowId",rowId)
    return (
      <Flex style={{height: 200}}>
        <p><img src={dataRow.img} alt=""/></p>
        {dataRow.des}
      </Flex>
    )
  }

  render() {
  
    return (
      <ListView
        style={{padding:'50px 0'}}
        dataSource={this.state.dataSource}
        renderHeader={() => <span>header</span>}
        renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
          {this.state.isLoading ? 'Loading...' : 'Loaded'}
        </div>)}
        renderRow={this._renderRow}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
        pageSize={4}
        useBodyScroll
      />
    );
  }
}



export default connect(({haveDeal})=>({haveDeal}))(HaveDeal);