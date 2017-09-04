/**
 * Created by sp on 2017/9/1.
 */
define(['jquery','cookie'],function($){
    //实现登录功能
    $("#login").click(function(){
        $.ajax({
            type:"post",
            url:"/api/login",
            data:$("#loginForm").serialize(),
            dateType:"json",
            success:function(data){
                if(data.code==200){
                    //先保存cookie
                    $.cookie('loginInfo',JSON.stringify(data.result),{path:"/"});
                    location.href="/main/index";
                }
            },
            error:function(){
                alert("用户名或密码错误！");
            }
        })
        return false;
    });
})