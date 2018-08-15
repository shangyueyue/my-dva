import React from 'react';
import { connect } from 'dva';
// import { Button, List } from 'antd-mobile';
import { Button } from 'antd-mobile'
import styles from './IndexPage.css';


class IndexPage extends React.Component {
  render(){
    console.log(this.props.loading)
    return (
      <div className={styles.normal}>
        <h1 className={styles.title}>Yay! Welcome to dva!</h1>
        <div>
            <Button type="primary" size="small">small</Button>
            <div>
            
            </div>
        </div>
      </div>
    );
  }
 
}

IndexPage.propTypes = {
};
function mapStateToProps(state) {
  // const { list, total, page } = state.user;
  console.log(state)
  return {
    loading: state.loading.models.user,
  };
}
export default connect(mapStateToProps)(IndexPage);
