import React, { Component } from 'react';
//import logo from './logo.svg';
import './wheader.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Wheader extends Component {
        constructor(props) {
                super(props);
                this.state = {
                        navs: [{
                                title: "热门",
                                cur: true,
                                path: "/home/hot",
                                id:"102803"
                        }, {
                                title: "新鲜事",
                                cur: false,
                                path: "/home/fresh",
                                id:"102803_ctg1_7978_-_ctg1_7978"
                        }, {
                                title: "搞笑",
                                cur: false,
                                path: "/home/fresh",
                                id:"102803"
                        }, {
                                title: "情感",
                                cur: false,
                                path: "/home/fresh",
                                id:"102803"
                        }, {
                                title: "明星",
                                cur: false,
                                path: "/home/fresh",
                                id:"102803"
                        }, {
                                title: "社会",
                                cur: false,
                                path: "/home/fresh",
                                id:"102803"
                        }, {
                                title: "数码",
                                cur: false,
                                path: "/home/fresh",
                                id:"102803"
                        }, {
                                title: "汽车",
                                cur: false,
                                path: "/home/fresh",
                                id:"102803"
                        }, {
                                title: "电影",
                                cur: false,
                                path: "/home/fresh",
                                id:"102803"
                        }, {
                                title: "游戏",
                                cur: false,
                                path: "/home/fresh",
                                id:"102803"
                        }]
                }
        }
        cur(index, e) {
                console.log(index, e.target.getAttribute("data-nav"))
                //console.log(this.state.navs);
                var navs = this.state.navs;
                for (let i = 0; i < navs.length; i++) {
                        navs[i].cur = false
                }
                navs[index].cur = true
                console.log(navs)
                // this.state.navs[index].cur = true;
                this.setState({
                        navs
                })
        }
        render() {
                return (
                        <div className="App">
                                <div className="lite-topbar main-top">
                                        <div className="nav-top">
                                                <div className="nav-left unlogin-logo"></div> <a className="nav-search unlogin-search">
                                                        <aside ><label className="m-search"><i className="m-font m-font-search"></i>
                                                                <div className="m-text-cut"> 大家都在搜：结婚途中当了啦啦队</div>
                                                        </label></aside>
                                                </a>
                                                <div className="nav-right">
                                                        <div className="lite-iconf lite-iconf-releas"></div>
                                                </div>
                                        </div>
                                        <div className="nav-main">
                                                <div className="m-box">
                                                        <div className="m-box-col inner-box">
                                                                <div className="scroll-box slide-container">
                                                                        <div className="slide-wrap">
                                                                                <ul className="nav_item">

                                                                                        {
                                                                                                (function (navs) {
                                                                                                        console.log(this);
                                                                                                        var self = this;
                                                                                                        var arr = navs.map((item, index) => {
                                                                                                                return (<Link to={{
                                                                                                                        pathname:item.path,
                                                                                                                        search: `?id=${item.id}`,
                                                                                                                        hash: "#the-hash",
                                                                                                                }} key={index}><li onClick={this.cur.bind(this, index)} className={item.cur ?
                                                                                                                        "item_li cur" : "item_li"}>
                                                                                                                        <span data-nav={index}>
                                                                                                                                {item.title}
                                                                                                                                <em></em>
                                                                                                                        </span>

                                                                                                                </li></Link>)

                                                                                                        })
                                                                                                        return arr;
                                                                                                        console.log(navs);
                                                                                                }.bind(this))(this.state.navs)
                                                                                        }
                                                                                </ul>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        <div className="nav-plus m-box-center m-box-center-a"><i className="m-font m-font-arrow-down"></i></div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                );
        }
}

export default Wheader;
