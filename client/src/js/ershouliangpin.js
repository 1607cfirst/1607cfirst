$('#ssnr').focus(function(){
    $('#wzc').css('display','none');
    $('#wzs').css({display:'block',borderTop:'none'});
    $('#ssnr').css('borderColor','#185')
});
$('#ssnr').blur(function(){
    $('#wzc').css('display','block');
    $('#wzs').css('display','none');
    $('#ssnr').css('borderColor','#f4f4f4')
});

/*轮播图*/
var swiper1 = new Swiper('.bannerf', {
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    paginationClickable: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: 2500,
    autoplayDisableOnInteraction: false
});


/*物品*/
/*$.ajax({
    url:'http://localhost:8888/phonelist',
    dataType:'json',
    success:function(e){
        // alert(e);
        var str = '';
        var phonelist = e.result.good_list;
        for(var i = 0;i < phonelist.length;i++){
            str += ' <a href="" class="col-md-1.8"><div class="tp"><img src="'+
                phonelist[i].thum_img.big+'" alt=""></div> <div class="wz"> <p class="sjxh">'+
                phonelist[i].title+'</p><p class="xinjiu">'+phonelist[i].subhead+'</p><div class="xjjiage"><div class="left">￥ <span>'+
                phonelist[i].chengse+'</span></div><div class="r"><span class="youhui">'+
                phonelist[i].discount+'折</span><br><del class="yuanjia">￥'+phonelist[i].com_price+'</del></div></div> <p class="paishe">'+
                phonelist[i].describe+'</p></div> </a></div>'

        }
        $('#ershouwupin').html(str);
    }

})*/

/*热销机型*/
$.ajax({
    url:'http://localhost:8888/xianshi',
    dataType:'json',
    success:function(e){
        var str = '';
        var product = e.result.product_list;
        for(var i = 0;i < product.length;i++){
            str +='<a href="" class="col-md-2"><div class="tp"><img src="'+
                product[i].thum_img.big+'" alt=""></div><div class="wz"><p class="sjxh">'+product[i].title+'</p><p class="jies">'+product[i].selling_point+'</p><p class="xianjia">'+product[i].price+'</p> <p class="leixin">'+product[i].explain+'</p></div></a>'

        }
        $('#rexiaojixin').html(str);
    }

});

/*限时抢购*/
$.ajax({
    url:'http://localhost:8888/daojishi',
    dataType:'json',
    success:function(e){
        var str = '';
        var daojishi = e.result.flash_list;
        for(var i = 0;i < daojishi.length;i++){
            str += '<div class="swiper-slide"><a href="#" class="xianshiqg daol"><div class="left">' +
                '<img src="'+daojishi[i].thum_img.old+'" alt=""></div><div class="right"><h5>'+daojishi[i].title+'</h5>'+
            '<p class="xj">'+daojishi[i].subhead+'</p><p class="yj">'+daojishi[i].com_price+'</p><p class="jg">￥<span>'+daojishi[i].price+' </span>'+
            '</p><p class="djs">秒杀 85：37：38</p><p class="ljqg">立即抢购</p></div></a></div>'

        }

        $('#daojishi').html(str);

        var swiper2 = new Swiper('.bant', {
            slidesPerView: 4,
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev'
        });

    }

});

/*用户评价*/
/*
$.ajax({
    url:'http://localhost:8888/haopin',
    dataType:'json',
    success:function(e){
        // alert(e);
        var str = '';
        var shaidan = e.result;
        for(var i = 0;i < shaidan.length;i++){
            str += '+div class="div"><div class="tp"><img src="'+shaidan[i].product_info.product_img+'" alt=""></div>' +
                '<div class="yhdpj"><p>'+shaidan[i].comment_mobile+'</p><br><p class="wy">'+shaidan[i].comment_content+'</p>' +
                '</div></div>+'
        }
        $('#shaidan').html(str);
    }

});*/
/*分页*/
$(function(){

    function getdata(page_index,page_size){
       $.post('http://localhost:8888/ab',
            {page_index:page_index,page_size:page_size},
            function(res){
                console.log(res)
                var str = '';
                var phonelist = res.result;
                for(var i = 0;i < phonelist.length;i++){
                    str += ' <a href="" class="col-md-1.8"><div class="tp"><img src="'+
                        phonelist[i].thum_img.big+'" alt=""></div> <div class="wz"> <p class="sjxh">'+
                        phonelist[i].title+'</p><p class="xinjiu">'+phonelist[i].subhead+'</p><div class="xjjiage"><div class="left">￥ <span>'+
                        phonelist[i].chengse+'</span></div><div class="r"><span class="youhui">'+
                        phonelist[i].discount+'折</span><br><del class="yuanjia">￥'+phonelist[i].com_price+'</del></div></div> <p class="paishe">'+
                        phonelist[i].describe+'</p></div> </a></div>'

                }
                $('#ershouwupin').html(str);
            })
    }

    $.get('http://localhost:8888/cd',function(res){
        var total = res.length;
        /* console.log(total)*/
        initPagination(total);
    })
    
     /*控制换页按钮*/
    var initPagination = function(total) {
        // 创建分页
        /*console.log("total:" + total)*/
        $("#Pagination").pagination(total/5, {
            num_edge_entries: 2, //边缘页数
            num_display_entries: 5, //主体页数
            items_per_page:5,
            callback: pageselectCallback,
            prev_text: "《上一页",
            next_text: "下一页》"
        });
    };
  /*控制页面显示*/
    function pageselectCallback(page_index, jq){
        getdata(page_index,25);
        return false;
    }

});