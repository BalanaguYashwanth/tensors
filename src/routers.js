import forms from './components/forms'
import details from './components/details'
import usages from './components/usages'
import register from './components/register'
import helloworld from  './components/HelloWorld'
import login from './components/login'
import logout from './components/logout'
import forgotpassword from './components/forgotpassword'
import home from './components/home'
import ulogin from './components/ulogin'

import Vue from 'vue'
import Vuerouter from 'vue-router'
Vue.use(Vuerouter)

const router = new Vuerouter({
    mode:'history',
    routes:[
        {path:'/forms',name:'forms',component:forms},
        {path:'/details',name:'details',component:details},
        {path:'/usages',name:'usages',component:usages},
        {path:'/register',name:'register',component:register},
        {path:'/helloworld',name:'helloworld',component:helloworld},
        {path:'/login',name:'login',component:login},
        {path:'/logout',name:'logout',component:logout},
        {path:'/forgotpassword',name:'forgotpassword',component:forgotpassword},
        {path:'/home',name:'home',component:home},
        {path:'/ulogin',name:'ulogin',component:ulogin}
    ]
}) 


const openRoutes=['forms','login','register','forgotpassword','ulogin']

router.beforeEach((to,from,next)=>{
        
    if(openRoutes.includes(to.name)){
        next()
    }
    else if(localStorage.getItem('user-token')){
        next()
    }
    else{
        next('/login')
    }    

})

export default router
