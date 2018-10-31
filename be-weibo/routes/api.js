var express = require('express');
var router = express.Router();
var request = require("request");

/* GET users listing. */
// 首页的
router.get('/getIndex', function (req, res, next) {
    res.append("Access-Control-Allow-Origin", "*");
    //res.send('456');
    //热门   102803
    //新鲜事  102803_ctg1_7978_-_ctg1_7978
    //搞笑    102803_ctg1_4388_-_ctg1_4388
    let containerid = req.query.containerid;
    let page = req.query.page;
    console.log(req.query.containerid);
    request(`https://m.weibo.cn/api/container/getIndex?containerid=${containerid}&openApp=0&page=${page}`, (err, response, body) => {
        console.log(888);
        res.send(body);
    })
});

// 详情页的
router.get('/extend', function (req, res, next) {
    res.append("Access-Control-Allow-Origin", "*");
    //res.send('456');
    //热门   102803
    //新鲜事  102803_ctg1_7978_-_ctg1_7978
    //搞笑    102803_ctg1_4388_-_ctg1_4388
    let id = req.query.id;
    console.log(req.query.containerid);
    request(`https://m.weibo.cn/statuses/extend?id=${id}`, (err, response, body) => {
        res.send(body);
    })
});

module.exports = router;