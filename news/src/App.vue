<template>
    <div id="app">
        <NavHeader></NavHeader>
        <transition name="slide-down">
            <keep-alive>
                <router-view class="router-view"></router-view>
            </keep-alive>
        </transition>
        <FooterView></FooterView>
    </div>
</template>

<script>
    import NavHeader from "./component/Nav.vue"
    import Home from './component/Home.vue'
    import FooterView from './component/Footer.vue'
    import {mapGetters} from 'vuex'
    export default{
        computed:mapGetters([
            'headShow',
            'loadShow',
            'footerShow'
        ]),
        mounted(){
            var path=this.$route.path.substring(1);
            this.headChange(path);
            this.footerChange(path);

        },
        watch:{
            $route(to){
                var path=to.path.substring(1);
                this.headChange(path);
                this.footerChange(path);
            }
        },
        methods:{
            headChange(path){
                if(path=='user-info'||path.indexOf('article')!=-1){
                    this.$store.dispatch('SHOW_HEAD_FAIL')
                }else {
                    this.$store.dispatch('SHOW_HEAD_SUCC')
                }
            },
            footerChange(path){
                if(path.indexOf('article')!=-1){
                    this.$store.dispatch('SHOW_FOOTER_SUCC')
                }else {
                    this.$store.dispatch('SHOW_FOOTER_FAIL')
                }
            }
        },
        components: {
            NavHeader,
            Home,
            FooterView
        }
    }
</script>

<style>
    .slide-down-enter-active, .slide-down-leave-active {
        transition: all .4s cubic-bezier(0, 1.2, 1, 0.5);
        opacity: .7;
        transform: translate3d(0, 6em, 0);
    }

    .slide-down-enter, .slide-down-leave-active {
        opacity: .1;
        transform: translate3d(0, 6em, 0);
    }
</style>
