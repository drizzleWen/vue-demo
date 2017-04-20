/**
 * Created by wenjiang.dai on 2017/4/11.
 */
import Home from './component/Home.vue'
import Follow from './component/Follow.vue'
import Column from './component/Column.vue'
import Article from './component/Article.vue'
import userInfo from './component/userInfo.vue'
import userLogin from './component/userLogin.vue'
import userReg from './component/userReg.vue'

export default [
    {
        path: '/home', component: Home
    },
    {
        path: '/follow', component: Follow
    },
    {
        path: '/column', component: Column
    },
    {
        path: '/user-info', component: userInfo
    },
    {
        path:'/article/:id',component:Article
    },
    {
        path:'/',redirect:'/home'
    }
]
