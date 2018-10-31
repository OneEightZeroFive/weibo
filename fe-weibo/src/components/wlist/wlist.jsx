import React, { Component } from 'react';
//import logo from './logo.svg';
import './wlist.css';
// import Link from 'react-router-dom/Link';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Wlist extends Component {
    constructor(props){
        super(props);
        this.props = props;
        // console.log(this.props.detail.mblog)
    }
    render() {
        return (
            <div>
                <div onClick={this.changeRoute.bind(this)} className="wb-item-wrap">
                    <div className="wb-item">
                        <div className="card m-panel card9 f-weibo">
                            <div className="card-wrap">
                                <header className="weibo-top m-box">
                                    <div className="m-avatar-box m-box-center"><a href="/profile/1700648435" className="m-img-box">
                                        <img src={this.props.detail.mblog?this.props.detail.mblog.user.avatar_hd:""} />
                                        <i className="m-icon m-icon-bluev"></i></a></div>
                                    <div className="m-box-dir m-box-col m-box-center">
                                        <div className="m-text-box"><a href="/profile/1700648435" className="">
                                            <h3 className="m-text-cut">
                                            {(function(self){
                                                return self.props.detail.mblog?self.props.detail.mblog.user.screen_name:"";
                                            })(this)}
                                    <i className="m-icon m-icon-vipl6"></i></h3>
                                        </a>
                                            <h4 className="m-text-cut"><span className="time">昨天 16:50</span> <span className="from">
                                                来自 微博网页版</span>
                                                <span className="time">已编辑</span></h4>
                                        </div>
                                    </div>
                                    <div callback="follow()" className="m-add-box m-followBtn"><span className="m-add-box"><i className="m-font m-font-plus"></i>
                                        <h4>关注</h4>
                                    </span></div>
                                </header>
                            </div>
                            <article className="weibo-main">
                                <div className="card-wrap">
                                    <div className="weibo-og">
                                        <div className="weibo-text">
                                        {(function(self){
                                            //console.log(self.props.detail.mblog.text)
                                            // return self.props.detail.mblog?self.props.detail.mblog.text:""
                                            return <div dangerouslySetInnerHTML={{__html: self.props.detail.mblog?self.props.detail.mblog.text:""}}></div>
                                        })(this)}
                                        </div>
                                        <div data-v-4ecfaa36="">
                                            <div data-v-4ecfaa36="" className="weibo-media f-media">
                                                <div data-v-4ecfaa36="" className="weibo-media-wraps">
                                                    <div data-v-20ce663c="" className="card-video type-video">
                                                        <div data-v-20ce663c="" className="mwb-video mwbv-play mwbv-info">
                                                            <div data-v-20ce663c="" className="m-img-box">
                                                                <img data-v-20ce663c="" src="https://wx2.sinaimg.cn/large/655dd5f3gy1fwo166k9aij210v0i1765.jpg" /></div>
                                                            <button data-v-20ce663c="" className="mwbv-play-button"><span
                                                                data-v-20ce663c="" className="mwbv-icon"></span></button>
                                                            <div data-v-20ce663c="" className="mwbv-info-bar">
                                                                <div data-v-20ce663c="" className="m-box">
                                                                    <div data-v-20ce663c="" className="m-box-col"></div>
                                                                    <div data-v-20ce663c="" className="time"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </article>
                            <footer className="f-footer-ctrl">
                                <div className="m-diy-btn m-box-center-a"><i className="lite-iconf lite-iconf-report"></i>
                                    <h4>2804</h4>
                                </div>
                                <div className="m-diy-btn m-box-center-a"><i className="lite-iconf lite-iconf-comments"></i>
                                    <h4>3.9万</h4>
                                </div>
                                <div className="m-diy-btn m-box-center-a"><i className="lite-iconf lite-iconf-like"></i>
                                    <h4>32.6万</h4>
                                </div>
                                <aside><i className="m-font m-font-dot-more"></i></aside>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    changeRoute(){
        console.log(this)
        console.log(this.props.detail.mblog.id)
        var id = this.props.detail.mblog.id;
        this.props.route.history.push({
            pathname:"/detail",
            search:`?id=${id}`
        })
        // console.log(this.props.route.history.push("/detail"))
    }
    componentDidMount() {
        // console.log(this);
    }
}

export default Wlist;
