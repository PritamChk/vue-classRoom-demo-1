import { createRouter ,createWebHistory} from "vue-router";
import SignUpForm from '../components/SignUpForm.vue'
import LoginForm from '../components/LoginForm.vue'
import HelloWorld from '../components/HelloWorld.vue'

const router= createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            name:'Home',
            component: SignUpForm,
        },
        {
            path:'/dashboard',
            name:'Home',
            component: SignUpForm,
        },
        {
            path:'/login',
            name:'Login',
            component: LoginForm,
        },
        {
            path:'/about',
            name:'HelloWorld',
            component: HelloWorld,
        }
    ]
}) 

export default router;