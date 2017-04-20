/**
 * Created by daiwenjiang on 2017/4/20.
 */
import *as types from './type'

export default {
    SHOW_HEAD_SUCC:({commit})=>{
        commit(types.HEAD_SHOW_SUCCESS)
    },
    SHOW_HEAD_FAIL:({commit})=>{
        commit(types.HEAD_SHOW_FAIL)
    },
    hideLOADING:({commit})=>{
        commit(types.HIDE_LOADING)
    },
    showLOADING:({commit})=>{
        commit(types.SHOW_LOADING)
    },
    SHOW_FOOTER_SUCC:({commit})=>{
        commit(types.FOOTER_SHOW_SUCCESS)
    },
    SHOW_FOOTER_FAIL:({commit})=>{
        commit(types.FOOTER_SHOW_FAIL)
    }
}