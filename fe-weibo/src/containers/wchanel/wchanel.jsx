import React, { Component } from 'react';
//import logo from './logo.svg';
import './wchanel.css';
// 详情页
import Wlist from '../../components/wlist/wlist.jsx';
import axios from 'axios';
// react-router-dom提供了三个组件
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Wchanel extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.props = props;
        this.state = {
            page: 0,
            containerid: "102803",
            news: []
        }
    }
    render() {
        return (
            <div ref="list">
                {(function (self) {
                    return self.state.news.map((item, index) => {
                        // console.log(item)
                        return (<Wlist key={index} route={self.props} detail={item} />)
                    })
                })(this)}

                {/* <div onClick={this.loadMore.bind(this)}>查看更多</div> */}
            </div>
        );
    }
    loadMore() {
        console.log(this.state)
        var self = this;
        var page = self.state.page;
        page = page + 1
        self.setState({
            page: page
        })
        console.log(this.state)
        // if(parseInt(sessionStorage.getItem("isLoading"))>0){
        //     //return;
        // }else{
            console.log("触发请求")
            axios.get('http://localhost:3000/api/getIndex', {
                params: {
                    containerid: sessionStorage.getItem("containerid"),
                    page: self.state.page
                }
            })
                .then(function (response) {
                    //console.log(response.data.data.cards);
                    console.log(self.state.news)
                    self.setState({
                        news: self.state.news.concat(response.data.data.cards)
                    })
                    sessionStorage.setItem("isLoading",0);
                })
                .catch(function (error) {
                    console.log(error);
                });
        // }
    }
    componentWillReceiveProps(){
        console.log("路由变化了")
    }
    componentDidMount() {
        sessionStorage.setItem("isLoading",0);
        var route = this.props.location.pathname;
        console.log(route);
        this.setState({
            containerid: "102803_ctg1_7978_-_ctg1_7978",
            test:"123"
        });
        switch (route) {
            case "/home/hot":
                this.setState({
                    containerid: "102803"
                })
                sessionStorage.setItem("containerid","102803")
                break;
            case "/home/fresh":
                console.log(111);
                this.setState({
                    containerid: "102803_ctg1_7978_-_ctg1_7978",
                    test:"123"
                });
                sessionStorage.setItem("containerid","102803_ctg1_7978_-_ctg1_7978")
                console.log(this.state)
                
                break;
            default:
                console.log(222);
                this.setState({
                    containerid: "102803"
                })
        }
        //let containerid = "102803";
        this.loadMore();
        
        console.log(this)
        console.log(this.props.location.pathname);
        var self = this;
        // window.onscroll = function (e) {
        //     // console.log(window.offsetHeight)
        //     // console.log(e.scrollHeight)
        //     // console.log(e.scrollTop)
        //     // console.log(self.refs.list.offsetHeight)
        //     console.log(self.refs.list.scrollHeight)
        //     console.log(window.scrollY);
        //     console.log(window.screen.height);
        //     sessionStorage.setItem("isLoading",1);
        //     if(self.refs.list.scrollHeight<=(window.scrollY+window.screen.height+84)){
        //         console.log("到底了")
        //         self.loadMore();
        //     }
        // }
    }

}

export default Wchanel;
