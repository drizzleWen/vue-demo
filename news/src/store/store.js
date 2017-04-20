/**
 * Created by daiwenjiang on 2017/4/20.
 */
import Vue from 'vue'
import vuex from 'vuex'
import mutations from './mutation'
import actions from './action'

Vue.use(vuex);

export default new vuex.Store ({
    modules:{
        mutations
    },
    actions
});