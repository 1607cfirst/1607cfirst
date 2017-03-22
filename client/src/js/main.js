$(function() {
    //固定的查询
//  alert($('#pos'));
    $('#pos').mouseover(function(){
    	
    	$('#pos img').css('display','block');
    }).mouseout(function(){
    	$('#pos img').css('display','none');
    })
	  
	//返回顶部
	$('#return').mouseover(function(){
    	
    	$('#return img').css('display','block');
    }).mouseout(function(){
    	$('#return img').css('display','none');
    })


    // 获取元素
//   var btn = document.getElementById('#return');
//
//   // 给浏览器窗口添加滚动事件
//   window.onscroll = function(){
//      // 判断滚动距离，如果不是0，显示返回按钮，否则隐藏
//      // 获取当前滚动距离
//      var top = document.body.scrollTop;
//      // 判断
//      if(top > 0){
//      	btn.style.display = 'block';
//      } else{
//      	btn.style.display = 'none';
//      }
//   }
//
//   // 添加点击事件
//   btn.onclick = function(){
//   	document.body.scrollTop = 0;
//   }


	//遍历
	//banner右侧的移入移除
	$("#uls1 li").mouseover(function() {
		var UliArry = $("#uls1 li"); //获取ulList下所有的li元素集合
		var DivArry = $("#pull div"); //获取tabcontent下所有的div元素
		var Aarry = $('.li-sp');
		var a = $('.li1 a');
        
		//  alert(DivArry.length);
		var count = $(this).index(); //获取li元素的索引
		//		$(this).eq(count).css('background','#008c55').siblings().css("background", "rgba(0,0,0,.6)");
		DivArry.eq(count).css("display", "block").siblings().css("display", "none");
		
		Aarry.eq(count).css('display', 'block').siblings().css("display", "none");
		a.eq(count).css('display','block');
//		alert(count);
	}).mouseout(function() {
		var UliArry = $("#uls1 li");
		var DivArry = $("#pull div");
		var Aarry = $('.li-sp');
		var count = $(this).index();
		DivArry.eq(count).mouseover(function(){
			DivArry.eq(count).css('display', 'block').siblings().css("display", "none");
		}).mouseout(function(){
			DivArry.eq(count).css("display", "none");
		})
		DivArry.eq(count).css("display", "none");
		Aarry.eq(count).css('display', 'none');
	})

	//轮播图
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		autoplay: 5000,
		//autoplayDisableOnInteraction:false,
		centeredSlides: true,
		spaceBetween: 30,
		loop: true,
		paginationClickable: true
	});
	//setInterval("swiper.slidePrev()", 1000);
//默认程序
$('#two-l').on('click','a',function(){
	var count = $('#moren a').index();
	$(this).eq(count).addClass('btn-on').siblings().removeClass('btn-on');
})



	//到店维修数据
//	$.ajax({
//		url: 'http://localhost:5555/shoplist',
//		dataType: 'json',
//		success: function(e) {
//			//			alert(e);
//			var str = '';
//			var shoplist = e.shop_data;
//			//			alert(shoplist[0].main);
//			for(var i in shoplist) {
//				str += '<div class="col-md-12" id="dlbox"><div class="col-md-12"><dl id="con3-dl"><dt><a href=""><img src="' +
//					shoplist[i].shop_ico + '"/></a></dt><dd><div id="dd-l"><p><a href="">' +
//					shoplist[i].shop_name + '</a>&nbsp;店铺等级:<a href="" class="l2"></a></p><p>主营:' +
//					shoplist[i].main + '</p> <p>地址:' + shoplist[i].addr_detail + '</p></div><div id="dd-r"><p><a href="" class="ra1"></a><span>先行赔付</span></p><p><a href="" class="ra2"></a><span>同城帮认定</span></p><p>人气:' +
//					shoplist[i].shop_visit + '次浏览  </p></div></dd><a href="" id="in-shop">进入店铺</a></dl></div></div>';
//
//			}
//			$('#content-3').html(str);
//
//		}
//	})
       //城市
       
    //banner左侧数据
    //修手机
//  $.ajax({
//		url: 'http://localhost:5555/screen',
//		dataType: 'json',
//		success: function(e) {
////			alert(e);
//			var str = '';
//			var title = e.result;
//			
////			alert(title[0].name);
//			for(var i in title) {
////				alert(title[i].name)
//				for(var j in title[i].list)
//			   str += '<dl><dt>'+title[i].name+'&gt;</dt><dd><p>'+
//             title[i].list[j].name+'</p> </dd></dl>'
//            
//			}
//			
//			$('#first-part').html(str);
//			
//		}
//	})
    
    
    


	//分页
	function getdata(page_index, page_size) {
		$.post('http://localhost:5555/getlist', {
				page_index: page_index,
				page_size: page_size
			},
			function(res) {
				//      			 	console.log(res);
				var str = '';
				var shoplist = res.result;
//							alert(shoplist[0].main);
				for(var i in shoplist) {
					str += '<div class="col-md-12" id="dlbox"><dl id="con3-dl" class="con3-dl"><dt><a href=""><img src="' +
						shoplist[i].shop_ico + '"/></a></dt><dd><div id="dd-l"><p><a href="">' +
						shoplist[i].shop_name + '</a>&nbsp;店铺等级:<a href="" class="l2"></a></p><p>主营:' +
						shoplist[i].main + '</p> <p>地址:' + shoplist[i].addr_detail + '</p></div><div id="dd-r"><p><a href="" class="ra1"></a><span>先行赔付</span></p><p><a href="" class="ra2"></a><span>同城帮认定</span></p><p>人气:' +
						shoplist[i].shop_visit + '次浏览  </p></div></dd></dl><a href="" id="in-shop" class="in-shop">进入店铺</a></div>';

				}
				$('#content-3').html(str);
				//进入店铺
					$('#dlbox dl').on('mouseover',function(){
		                  var inshop = $('#dlbox .in-shop');
//		                  alert(inshop);
                          var arr = [0,1,2,3,4];
                         
                         for(var i in arr){
                         	if(arr[i] == 0){
                         		inshop.eq(arr[0]).css('display','none');
                         	}else if(arr[i] == 1){
                         		inshop.eq(arr[1]).toggleClass('shop-on');
                         	}
                         	
                         }
//		                 
		                 
	                }).mouseout(function(){
	                	var arr = [0,1,2,3,4];
	                	
	                	for(var i in arr){
//                       	inshop.eq(arr[i]).addClass();
                         }
	                })
					
//					$('#dlbox dl').mouseover(function(){
//				 var dlArr = $('#dlbox');
//				 var inshop = $('#content-3 .in-shop');
//				 alert(inshop);
////				 alert(dlArr);
//				 var count = $('#dlbox dl').index();
////				 alert(count);
////				dlArry.eq(count).css('display', 'block');
//				inshop.eq(count).css('display', 'block').siblings().css("display", "none");
//				dlArry.eq(count).css('display', 'block');
//             
//			       })
					
					
                
				})   	   
               
               
	}
  
	//获取文件的总数量
	$.get('http://localhost:5555/gettotal', function(res) {
		var total = res.length;
		initPagination(total);
	})

	var initPagination = function(total) {
		//创建分页
		$('#Pagination').pagination(total * 2, {
			num_edge_entries: 2, //边缘页数
			num_display_entries: 5, //主ti页数
			items_per_page: 10,
			callback: pageselectCallback,
			prev_text: '上一页',
			next_text: '下一页',
			prev_show_always:false
		})
	};

	function pageselectCallback(page_index, jq) {
		getdata(page_index, 5);
		return false;
	};
   
 
  
   
   
	//商家好评
	$.ajax({
		url: 'http://localhost:5555/praise',
		dataType: 'json',
		success: function(e) {

			var shoplist = e.shop_data;
			//			alert(shoplist); 
			//商家好评榜
			var shoper = '';
			var num = 0;
			for(var j in shoplist) {
				num++;
				shoper += '<dl><dd><p>' + num + '</p><div id=""><img src="' +
					shoplist[j].shop_ico + '"/></div></dd><dt><p>' +
					shoplist[j].shop_name + '</p><p>' + shoplist[j].comments + '条评论</p></dt></dl>'

			}
			$('#r-con-list').html(shoper);
		}
	})

//     登录获取数据
$('#loginBtn').click(function(){
	$.ajax({
     	url:'http://localhost:5555/use',
     	dataType:'json',
     	success:function(e){
//   		alert(e);
     	   for(var i in e){
     	   	var user = $('#use').val();
     	   	var pass = $('#pass').val();
     	   	if(user == e[i].name && pass == e[i].pwd){
     	   		alert('登录成功');
     	   		$('#first-login').css('display','none');
     	   	    var li1 = $('<li><a href="#" data-toggle="modal" data-target="#tan1" style="display: none;" id="relogin">已登录</a></li>');
     	   		
     	   	}else{
     	   		alert('输入错误');
     	   	}
     	   	
     	   }
     	   $('#header-right').prepend(li1);
     	}
     	
     })
})
     


//修电脑

//banner卖手机
   $.ajax({
   	url:'http://localhost:5555/sellPhone',
   	dataType:'json',
   	success:function(e){
   		var str = '<ul>';
   		var sell = e.result;
// 		alert(sell);
			for(var i in sell){
				
				str += '<li>'+sell[i].name+'</li>';
			    if(i % 5 == 4){
			    	str += '</ul><ul>'
			    }
				
			}
	    str += '</ul>';
        $('#thid-part').html(str);
   		
   	}
   })
   
   
   //买二手机
   $.ajax({
   	url:'http://localhost:5555/buyPhone',
   	dataType:'json',
   	success:function(e){
   		var str = '<ul>';
   		var sell = e.result;
// 		alert(sell);
         var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
        
			for(var i in arr){
//				 alert(sell[arr[i]]);
				str += '<li>'+sell[arr[i]]+'</li>';
			    if(arr[i] % 5 == 0){
			    	str += '</ul><ul>'
			    }
//				
			}
	    str += '</ul>';
        $('#four-part').html(str);
   		
   	}
   })


//修电脑
$.ajax({
   	url:'http://localhost:5555/computer',
   	dataType:'json',
   	success:function(e){
// 		热门问题
//      alert(e);
   		str = '<p>';
   		other = '<p>'
   		var arr = ['hot','other'];
// 		alert(arr[0]);
   		var hotanswer = e.result[arr[0]];
   		var otheranswer= e.result[arr[1]];
// 		alert(hotanswer[1].name);
   		for(var i in hotanswer){
   			str += '<a>'+hotanswer[i].name+'</a>';
   			if(i % 4 == 3){
   				str += '</p><p>'
   			}
   		}
   		str += '</p>';
   		$('#se-dd1').html(str);
   		
   		
   		for(var j in otheranswer){
   			other += '<a>'+otheranswer[j].name+'</a>';
   			if(j % 4 == 3){
   				other += '</p><p>'
   			}
   		}
   		other += '</p>';
   		$('#se-dd2').html(other);
   		
   	 }
   })



})