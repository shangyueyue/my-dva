
import React from 'react';
import { withRouter } from 'dva/router';
// import { connect } from 'dva';
import { TabBar } from 'antd-mobile';
import SubNav from './SubNav';
import tabBarNavConfigs from './tabBar.config';
// import imgUrl from '../../assets/svgs/waitDeal.svg';

class TabBarNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: props.location.pathname,
      hidden: false,
    }
   
  }

  UNSAFE_componentWillMount(){
    //解决 fixed 定位问题
    this.screenHeight = document.body.offsetHeight;
    console.log(this.screenHeight,222)
    window.onresize=()=>{
     const nowHeight = document.body.offsetHeight;
     console.log(nowHeight,3333)
    if(nowHeight < this.screenHeight){
      this.setState({
        hidden:true
      })
    }else{
      this.setState({
        hidden:false
      })
    }
    }
  }

  onHandlePress=(key) => {
    this.setState({
      selectedTab: key,
    });
    if (this.props.location.pathname === key) return;
    if (key === '/application') return;
    this.props.history.push(key);
  }


  render() {
    // alert(window.screen.availHeight)
    // alert(document.body.clientHeight)
    return (
      <div style={{ position:'fixed', width:'100%',bottom: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          {
            tabBarNavConfigs.map((configs) => {
              const { title, key, icon, selectedIcon } = configs;
              return (
                <TabBar.Item
                  title={title}
                  key={key}
                  icon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${icon}) center center /  21px 21px no-repeat`,
                  }}
                  />
                  }
                  selectedIcon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${selectedIcon}) center center /  21px 21px no-repeat`,
                  }}
                  />
                  }
                  selected={this.state.selectedTab === key}
                  onPress={this.onHandlePress.bind(this, key)}
                />
              );
            })
          }
        </TabBar>
        {
          this.state.selectedTab === '/application' && <SubNav />
        }
      </div>
    );
  }
}

export default withRouter(TabBarNav);
