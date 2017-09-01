define(['jquery','cookie'],function($){
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
	//验证是否登录
	 //session的ID
	var sessionId= $.cookie('PHPSESSID');
	if(!sessionId&&location.pathname!='/main/login'){
		location.href='/main/login';
	}
	//获取登录信息
	var loginInfo= $.cookie('loginInfo');
	var info=JSON.parse(loginInfo);
	//根据cookie的值来设置主页面人物的属性
	console.log(info);
	$(".profile h4").html(info.tc_name);
	$(".profile img").attr("src",info.tc_avatar);
})


