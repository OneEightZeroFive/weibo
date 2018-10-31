import React, { Component } from 'react';
//import logo from './logo.svg';
import './wpop.css';
class Wpop extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="m-wpbtn-lbox">
                <ul className="m-wpbtn-list">
                    <li><a>复制链接</a></li>
                    <li><a>查看编辑记录</a></li>
                </ul>
                <ul className="m-wpbtn-list">
                    <li><a>取消</a></li>
                </ul>
            </div>
        )
    }
}
export default Wpop;