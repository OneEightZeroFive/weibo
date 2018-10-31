import React, { Component } from 'react';
//import logo from './logo.svg';
import './whome.css';
import Wheader from '../../components/wheader/wheader.jsx';

import Wchanel from '../../containers/wchanel/wchanel.jsx';
// react-router-dom提供了三个组件
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Whome extends Component {
    render() {
        return (
            <div>
                <Wheader />
                <div className="list-contaniner">
                    <Route path="/home/hot" component={Wchanel}  />
                    <Route path="/home/fresh" component={Wchanel}  />
                </div>
            </div>
        );
    }
}

export default Whome;
