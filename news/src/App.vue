<template>
    <div id="app">
       <NavHeader></NavHeader>
        <transition name="slide-down">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
    </div>
</template>

<script>
    import NavHeader from "./component/Nav.vue"
    import Home from './component/Home.vue'
    export default{
        components:{
            NavHeader,
            Home
        }
    }
</script>

<style>

</style>
