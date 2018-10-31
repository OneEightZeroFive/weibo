import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
// 主页
import Whome from './containers/whome/whome.jsx';
// 详情页
import Wdetail from './containers/wdetail/wdetail.jsx';

// react-router
// react-router-dom提供了三个组件
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import createBrowserHistory from "history/createBrowserHistory";
// const history = createBrowserHistory();

// redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
//创建仓库
const store = createStore(// Reducer
  // 仓库的初始化的值
  function (state = {
    count: 0,
    title: "微博",
    author: "laoyao",
    isShowPop: false
  }, action) {
    const count = state.count
    switch (action.type) {
      case 'showPop':
        let obj = {
          ...state,
          isShowPop: action.isShowPop
        }
        console.log(obj)
        return obj
      case 'multi':
        return Object.assign({}, state, { name: action.name });
      default:
        return state
    };

  });
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route path="/" exact component={Whome} />
            <Route path="/home" component={Whome} />
            <Route path="/detail/" component={Wdetail} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
