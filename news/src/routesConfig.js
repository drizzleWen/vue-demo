/**
 * Created by wenjiang.dai on 2017/4/11.
 */
import Home from './component/Home.vue'
import Follow from './component/Follow.vue'
import Column from './component/Column.vue'

export default [
    {
        path: '/home', component: Home
    },
    {
        path: '/follow', component: Follow
    },
    {
        path: './column', component: Column
    }
]
