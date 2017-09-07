/**
 * Created by sp on 2017/9/1.
 */
require.config({
    baseUrl:'/public/assets',
    paths:{
        jquery:"jquery/jquery",
        cookie:"jquery-cookie/jquery.cookie",
        common:"../js/common",
        login:"../js/login",
        template:"artTemplate/template-web",
        teacherList:"../js/teacherList",
        bootstrap:"./bootstrap/js/bootstrap",
        index:"../js/index",
        util:"../js/util",
        teacheradd:"../js/teacherAdd",
        datepicker:"./bootstrap-datepicker/js/bootstrap-datepicker",
        language:"./bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min",
        validate:'validate/jquery-validate.min',
        form:"jquery-form/jquery.form",
        settings:"../js/settings",
        uploadify:"uploadify/jquery.uploadify.min"
    },
    shim:{
        bootstrap:{
            deps:['jquery']
        },
        language:{
            deps:['jquery','datepicker']
        },
        validate:{
            deps:['jquery']
        },
        uploadify:{
            deps:['jquery']
        }
    }
})
