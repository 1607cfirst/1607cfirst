var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//跨域
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8900");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.get('/',function(req,res){
    res.setHeader('Access-Control-Allow-Origin','*');
    fs.readFile(__dirname + '/public/data.json',function(err,data){
        if(err){
          console.log(err)
        }else {
          res.json(JSON.parse(data))
        }
    })
});

app.get('/cd',function(req,res){
     res.setHeader('Access-Control-Allow-Origin','*');
    fs.readFile(__dirname + '/public/ershouwupin.json',function(err,data){
        if(err){
            console.log(err)
        }else {
            var length = JSON.parse(data).result.length;
            res.json({"length":length});
        }
    })
})
app.post('/ab',function(req,res){
    res.setHeader('Access-Control-Allow-Origin','*');
    fs.readFile(__dirname + '/public/ershouwupin.json',function(err,data){
        if(err){
            console.log(err)
        }else {
            var start = parseInt(req.body.page_index);
            var start = start*req.body.page_size;
            var end = start + parseInt(req.body.page_size);

            var data = data.toString();
            var json = JSON.parse(data);
            var result = json.result;

           /* console.log(start + ',' + end)*/
            var res_arr = result.slice(start,end);

            var res_data = {
                "result":res_arr
            }
            res.json(res_data)
        }
    })
});
app.get('/daojishi',function(req,res){
    res.setHeader('Access-Control-Allow-Origin','*');
    fs.readFile(__dirname + '/public/xianshiqianggou.json',function(err,data){
        if(err){
            console.log(err)
        }else {
            res.json(JSON.parse(data))
        }
    })
});
app.get('/xianshi',function(req,res){ 
    res.setHeader('Access-Control-Allow-Origin','*');
    fs.readFile(__dirname + '/public/rexiaojixin.json',function(err,data){
        if(err){
            console.log(err)
        }else {
            res.json(JSON.parse(data))
        }
    })
});
app.get('/haopin',function(req,res){
    res.setHeader('Access-Control-Allow-Origin','*');
    fs.readFile(__dirname + '/public/yonhupingjia.json',function(err,data){
        if(err){
            console.log(err)
        }else {
            res.json(JSON.parse(data))
        }
    })
});

app.listen(8888,function(){
  console.log('------服务器启动------')
  console.log('--访问地址：http://localhost:8888/')
});
