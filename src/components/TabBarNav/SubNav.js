import React from 'react';
import { withRouter } from 'dva/router';
import style from './style.less';

class SubNav extends React.Component {
  handleOption=(e) => {
    const pathname = e.target.dataset.value;
    if (pathname) { this.props.history.push(pathname); }
  }

  render() {
    return (
      <div className={style.container}>
        <ul className={style.ulList} onClick={this.handleOption}>
          <li style={{ borderTop: 'none' }} data-value="1">资本性支出动支申请</li>
          <li data-value="2">其他费用动支申请</li>
          <li data-value="3">招待费动支申请</li>
          <li data-value="4">差旅动支申请</li>
          <li data-value="5">培训动支申请</li>
          <li data-value="6">会议动支申请</li>
        </ul>
        <div className={style.arrow} />
      </div>
    );
  }
}

export default withRouter(SubNav);
