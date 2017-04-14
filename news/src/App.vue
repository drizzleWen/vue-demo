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
    export default{
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
