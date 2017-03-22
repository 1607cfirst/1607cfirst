var express = require('express');
var bodyParser = require('body-parser');
var shortid = require('shortid');
var fs = require('fs');

var app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/su',function(req,res){
  res.sendFile(__dirname + '/public/login.html')
})
app.all('*',function(req,res,next){
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
next();
});






app.get('/',function(req,res){
	res.setHeader('Access-Control-Allow-Origin','*');
    fs.readFile(__dirname + '/public/data/data1.json',function(err,data){
        if(err){
          console.log(err)
        }else {
          res.json(JSON.parse(data))
        }
    })
})



app.get('/shoplist',function(req,res){
	res.setHeader('Access-Control-Allow-Origin','*');
    fs.readFile(__dirname + '/public/data/data3.json',function(err,data){
        if(err){
          console.log(err)
        }else {
          res.json(JSON.parse(data))
        }
    })
})


app.get('/screen',function(req,res){
	res.setHeader('Access-Control-Allow-Origin','*');
    fs.readFile(__dirname + '/public/data/data5.json',function(err,data){
        if(err){
          console.log(err)
        }else {
          res.json(JSON.parse(data))
        }
    })
})


//商家好评端口
app.get('/praise',function(req,res){
	res.setHeader('Access-Control-Allow-Origin','*');
    fs.readFile(__dirname + '/public/data/data4.json',function(err,data){
        if(err){
          console.log(err)
        }else {
          res.json(JSON.parse(data))
        }
    })
})

//分页
//获取文件总数量的接口
app.get('/gettotal',function(req,res){
	fs.readFile(__dirname+'/public/data/data3.json',function(err,data){
		if(err){
			console.log(err);
		}else{
			var length = JSON.parse(data).shop_data.length;
			res.json({'length':length});
		}
	})
})


app.post('/getlist',function(req,res){
	
	fs.readFile(__dirname+'/public/data/data3.json',function(err,data){
		if(err){
			console.log(err);
		}else{
			
			var start = parseInt(req.body.page_index);
			var start = start*req.body.page_size;
			var end = start + parseInt(req.body.page_size);
			
			var data = data.toString();
			var json = JSON.parse(data);
			var result = json.shop_data;
			
			var res_arr = result.slice(start,end);
			var res_data = {
				'result':res_arr
			}
			
			res.json(res_data);
			
		}
	})
	
})


//app.get('/success',function(req,res){
//res.sendFile(__dirname + '/loginsuccess.html')
//})

//登录接口
//app.post('/login',function(req,res){
//	
//  var name = req.body.user;
//  var pwd = req.body.pwwd;
////  $.ajax({
////  	type:"get",
////  	url:"http://localhost:5555/use",
////  	async:true
////  	ssuccess:function(e){
////  		
////  	}
////  });
//  fs.readFile('user.json',function(err,data){
//      if(err){
//        console.log(err)
//      }else {
//        var str = data.toString();
//        alert(str);
//        var json = JSON.parse(str);
//        for(p in json){
//          var item = json[p];
//          if(item.name == name && item.pwd == pwd){
//              res.redirect('/su')
////              alert('登录成功');
//          }
//        }
//      }
//  })
//})

//注册接口
app.post('/regist',function(req,res){
    var name = req.body.name;
    var pwd = req.body.pwd;
    var id = shortid.generate();
    var user = {
      id:id,name:name,pwd:pwd
    }
    var userstr = JSON.stringify(user);

    fs.readFile('user.json',function(err,data){

      if(err){
        console.log(err)
      }else {
        var json = JSON.parse(data);
        //添加一条数据
        json[id] = user;
        var str = JSON.stringify(json)
        fs.writeFile('user.json',str,function(err){
          if(err){
             console.log('err:' + err)
          }else {
              //重定向到登陆页面
//          res.redirect('/logpage');
//          alert('注册成功');
           
          }
        })
      }
    })
    
})


//获取注册的数据
app.get('/use',function(req,res){
	res.sendFile(__dirname+'/user.json');
})

//头部的城市切换
 
app.get('/citySwitch',function(req,res){
	res.setHeader('Access-Control-Allow-Origin','*');
    fs.readFile(__dirname + '/public/data/data1.json',function(err,data){
        if(err){
          console.log(err)
        }else {
          res.json(JSON.parse(data))
        }
    })
})


//卖手机的部分
app.get('/sellPhone',function(req,res){
	fs.readFile(__dirname+'/public/data/6.json',function(err,data){
		if(err){
			console.log(err);
		}else{
			res.json(JSON.parse(data));
		}
		
	})
})


//买二手机
app.get('/buyPhone',function(req,res){
	fs.readFile(__dirname+'/public/data/7.json',function(err,data){
		if(err){
			console.log(err);
		}else{
			res.json(JSON.parse(data));
		}
		
	})
})


//修电脑部分
app.get('/computer',function(req,res){
	fs.readFile(__dirname+'/public/data/5.json',function(err,data){
		if(err){
			console.log(err);
		}else{
			res.json(JSON.parse(data));
		}
		
	})
})

//地图数据


app.get('/mapmarker',function(req,res){
    fs.readFile(__dirname + '/public/data/map.json',function(err,data){
        if(err){
            console.log(err)
        }else{
            var json = JSON.parse(data.toString());
            console.log(json)
            res.json(json);
        }
    })
})





app.listen(5555,function(){
  console.log('------服务器启动------')
  console.log('--访问地址：http://localhost:5555/')
})
