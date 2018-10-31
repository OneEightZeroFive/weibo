import React, { Component } from 'react';
import './wdetail.css';
// react-router-dom提供了三个组件
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios'
import Wpop from "../../components/wpop/wpop.jsx"
import { connect } from 'react-redux';
class Wdetail extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      text: ""
    }
  }
  render() {
    return (
      <div>
        <div className="lite-topbar lite-page-top">
          <div className="nav-left"><i className="m-font m-font-arrow-left"></i></div>
          <div className="nav-main">
            <h4>微博正文</h4>
          </div>
          <div className="nav-right" onClick={this.props.showPop.bind(this,this.props)}><i className="m-font m-font-dot-more"></i></div>
        </div>

        <div className="main" style={{ marginTop: "2.75rem" }}>
          <div className="card m-panel card9 f-weibo">
            <div className="card-wrap">

              <header className="weibo-top m-box">
                <div className="m-avatar-box m-box-center"><a href="/profile/1216431741" className="m-img-box">
                  <img src="https://tva4.sinaimg.cn/crop.0.0.1022.1022.180/4881467dgw1egwcm2nl85j20sg0sgdhe.jpg" />
                  <i className="m-icon m-icon-bluev"></i></a></div>
                <div className="m-box-dir m-box-col m-box-center">
                  <div className="m-text-box"><a href="/profile/1216431741" className="">
                    <h3 className="m-text-cut">南都娱乐周刊
                                <i className="m-icon m-icon-vipl6"></i></h3>
                  </a>
                    <h4 className="m-text-cut"><span className="time">昨天 09:56</span>
                    </h4>
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
                  <div className="weibo-text">{(function (self) {
                    //console.log(self.props.detail.mblog.text)
                    // return self.props.detail.mblog?self.props.detail.mblog.text:""
                    return <div dangerouslySetInnerHTML={{ __html: self.state.text }}></div>
                  })(this)}</div>
                  <div>
                    <div className="weibo-media-wraps weibo-media f-media media-b">
                      <ul className="m-auto-list">
                        <li className="m-auto-box3">
                          <div className="m-img-box m-imghold-4-3">
                            <img src="https://wx1.sinaimg.cn/orj360/4881467dgy1fwq0it4nkmj20rs0ku78u.jpg"
                              className="f-bg-img" />

                          </div>
                        </li>
                        <li className="m-auto-box3">
                          <div className="m-img-box m-imghold-4-3">
                            <img src="https://wx4.sinaimg.cn/orj360/4881467dgy1fwq0ist6c0j21400qoqcb.jpg"
                              className="f-bg-img" />

                          </div>
                        </li>
                        <li className="m-auto-box3">
                          <div className="m-img-box m-imghold-4-3">
                            <img src="https://wx3.sinaimg.cn/orj360/4881467dgy1fwq0itg1m9j20c50h10tu.jpg"
                              className="f-bg-img" />

                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
        {(function(self){
          if(self.props.isShowPop){
            return <Wpop />
          }else{
            return;
          }
          console.log(self.props.isShowPop)
        })(this)}
        {/* <Wpop style={{
          display:'none'
        }} /> */}
      </div>
    );
  }
  componentDidMount() {
    var self = this;
    console.log(this.props.location.search)
    var arr = this.props.location.search.split("=");
    console.log(arr);
    var id = arr[1];
    axios.get('http://localhost:3000/api/extend', {
      params: {
        id
      }
    }).then(function (response) {
      //console.log(response.data.data.cards);
      console.log(response.data.data.longTextContent)
      self.setState({
        text: response.data.data.longTextContent
      })
    })
      .catch(function (error) {
        console.log(error);
      });
  }
}

export default connect(
  // 把store数据拿到该组件的props里面
  function (state) {
    return state
  },
  // 把该组件的数据提交到store里面
  function (dispatch) {
    return {
      showPop: (props,e) => {
        console.log(props.isShowPop)
        //可以触发多个
        dispatch({
          type:"showPop",
          isShowPop:!props.isShowPop
        })
      }
    }
  })(Wdetail);
