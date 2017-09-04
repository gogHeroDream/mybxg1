/**
 * Created by sp on 2017/9/2.
 */
define(['jquery','template','bootstrap'],function($,template){
    //调用后台接口，获取列表数据
    $.ajax({
        type:"get",
        url:'/api/teacher',
        dataType:'json',
        success:function(data){
            //解析数据，渲染页面
            var html=template('teacherTpl',{list:data.result});
            $('#teacherInfo').html(html);
            $('.preview').click(function(){
                var td=$(this).closest('td');
                var tcId=td.attr("data-tcId");
                $.ajax({
                    type:"get",
                    url:"/api/teacher/view",
                    data:{tc_id:tcId},
                    dataType:"json",
                    success:function(data){
                        console.log(data);
                        //解析数据渲染页面
                        var html=template("modalTpl",data.result);
                        $('#modalInfo').html(html);
                        //显示弹窗
                        $("#teacherModal").modal();
                    }
                });
            })
            $(".eod").click(function(){
                var td=$(this).closest('td');
                var tcId=td.attr("data-tcId");
                var tcStatus=td.attr("data-status");
                //缓存this
                var that=this;
                //调用接口
                $.ajax({
                    type:"post",
                    url:"/api/teacher/handle",
                    data:{tc_id:tcId,
                          tc_status:tcStatus},
                    dataType:"json",
                    success:function(data){
                        if(data.code==200){
                            //修改当前状态
                            td.attr("data-status",data.result.tc_status);
                            //修改文字信息
                            if(data.result.tc_status==0){
                                $(that).html("注销");
                            }else{
                                $(that).html("启用");
                            }
                        }
                    }
                })
            })
        }
    });

});