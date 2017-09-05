/**
 * Created by sp on 2017/9/5.
 */
define(['jquery'],function($){
    //工具函数
   return{
       setMenu:function(path){
           $('.navs a[href="'+path+'"]').addClass('active');
       }
   }
})
