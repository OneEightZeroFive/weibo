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
            containerid: 102803,
            news: []
        }
    }
    render() {
        return (
            <div ref="list">
                {(function (self) {
                    return self.state.news.map((item,index)=>{
                        console.log(item)
                        return (<Wlist key={index} route={self.props} detail={item} />)
                    })
                })(this)}
                
                <div onClick={this.loadMore.bind(this)}>查看更多</div>
            </div>
        );
    }
    loadMore() {

        var route = this.props.location.pathname;
        switch (route) {
            case "/home/hot":
                this.setState({
                    containerid: "102803"
                })

                break;
            case "/home/fresh":
                this.setState({
                    containerid: "102803_ctg1_7978_-_ctg1_7978"
                })
                break;
            default:
                this.setState({
                    containerid: "102803"
                })
        }

        var self = this;
        var page = self.state.page;
        page = page + 1
        self.setState({
            page: page
        })
        axios.get('http://localhost:3000/api/getIndex', {
            params: {
                containerid: this.state.containerid,
                page: this.state.page
            }
        })
            .then(function (response) {
                //console.log(response.data.data.cards);
                console.log(self.state.news)
                self.setState({
                    news: self.state.news.concat(response.data.data.cards)
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    componentDidMount() {
        //let containerid = "102803";

        this.loadMore();
        console.log(this)
        console.log(this.props.location.pathname);
        var self = this;
        window.onscroll = function (e) {
            // console.log(window.offsetHeight)
            // console.log(e.scrollHeight)
            // console.log(e.scrollTop)
            // console.log(self.refs.list.offsetHeight)
            // console.log(self.refs.list.scrollHeight)
            // console.log(window.scrollY)
        }
    }

}

export default Wchanel;
