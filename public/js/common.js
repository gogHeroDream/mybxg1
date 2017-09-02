define(['jquery','template','cookie'],function($,template){
	//NProgress.start();
	//NProgress.done();
	//控制左侧菜单折叠
	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});

	//退出功能
	$("#logoutBtn").click(function(){
		$.ajax({
			type:"post",
			url:"/api/logout",
			dataType:"json",
			success:function(data){
				if(data.code==200){
					location.href='/main/login';
				}
			}
		});
	});
	//验证是否登录过
	 //session的ID
	var sessionId= $.cookie('PHPSESSID');
	if(!sessionId&&location.pathname!='/main/login'){
		location.href='/main/login';
	}
	//获取登录信息
	var loginInfo= $.cookie('loginInfo');
	var info=JSON.parse(loginInfo);
    //根据cookie的值来设置主页面人物的属性  模板引擎
	var tplstr='<div class="avatar img-circle"> <img src="{{tc_avatar}}"> </div> <h4>{{tc_name}}</h4>';
	var html=template.render(tplstr,info);
	$(".aside .profile").html(html);

	//console.log(info);
	//$(".profile h4").html(info.tc_name);
	//$(".profile img").attr("src",info.tc_avatar);
})


