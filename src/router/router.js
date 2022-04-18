import { createRouter ,createWebHistory} from "vue-router";
import SignUpForm from '../components/SignUpForm.vue'
import LoginForm from '../components/LoginForm.vue'
import Home from '../components/Home.vue'
import DropDown from '../components/DropDown.vue'
import Test from '../components/Test.vue'

const router= createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            redirect:'/dashboard'
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
        {
            path:'/test',
            name:'Test',
            component: Test,
        },
        {
            path:'/dropdown',
            name:'DropDown',
            component: DropDown,
        },
    ]
}) 

export default router;