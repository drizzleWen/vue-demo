/**
 * Created by daiwenjiang on 2017/4/20.
 */
import {
    HEAD_SHOW_SUCCESS,
    HEAD_SHOW_FAIL,
    SHOW_LOADING,
    HIDE_LOADING,
    FOOTER_SHOW_FAIL,
    FOOTER_SHOW_SUCCESS
} from "./type"

const state={
    headShow:true,
    loadShow:false,
    footerShow:true
};

const mutations={
    [HEAD_SHOW_SUCCESS](state){
        state.headShow=true;
    },
    [HEAD_SHOW_FAIL](state){
        state.headShow=false
        console.log(state.headShow)
    },
    [SHOW_LOADING](state){
        state.loadShow=true
    },
    [HIDE_LOADING](state){
        state.loadShow=false
    },
    [FOOTER_SHOW_SUCCESS](state){
        state.footerShow=true
    },
    [FOOTER_SHOW_FAIL](state){
        state.footerShow=false;
    }
};

const getters={
    headShow(state){
        return state.headShow
    },
    loadShow(state){
        return state.loadShow
    },
    footerShow(state){
        return state.footerShow
    }
};

export default {
    state,
    mutations,
    getters
}