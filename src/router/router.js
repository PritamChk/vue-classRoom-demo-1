import { createRouter ,createWebHistory} from "vue-router";
import SignUpForm from '../components/SignUpForm.vue'
import LoginForm from '../components/LoginForm.vue'
import Home from '../components/Home.vue'

const router= createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            name:'Home',
            component: Home,
        },
        {
            path:'/dashboard',
            name:'Home',
            component: Home,
        },
        {
            path:'/login',
            name:'Login',
            component: LoginForm,
        },
        {
            path:'/register',
            name:'SignUpForm',
            component: SignUpForm,
        },
    ]
}) 

export default router;