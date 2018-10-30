import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
// 主页
import Whome from './containers/whome/whome.jsx';
// 详情页
import Wdetail from './containers/wdetail/wdetail.jsx';
// react-router-dom提供了三个组件
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Whome} />
          <Route path="/home" component={Whome} />
          <Route path="/detail/" component={Wdetail} />
        </div>
      </Router>
    );
  }
}

export default App;
