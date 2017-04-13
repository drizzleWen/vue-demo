<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="../assets/images/img.jpg" alt="">
                <div class="text-box">
                    <h2>111</h2>
                    <p>111 / 文</p>
                </div>
            </div>
            <div class="swiper-slide">
                <img src="../assets/images/img.jpg" alt="">
                <div class="text-box">
                    <h2>222</h2>
                    <p>222 / 文</p>
                </div>
            </div>
            <div class="swiper-slide">
                <img src="../assets/images/img.jpg" alt="">
                <div class="text-box">
                    <h2>333</h2>
                    <p>333 / 文</p>
                </div>
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>

</template>

<script>
    export default{
        mounted(){
            this.swiper()
        },
        methods: {
            swiper(){
                $(function () {
                    var mySwiper=new Swiper('.swiper-container',{
                        autoplay:3000,
                        pagination:'.swiper-pagination',
                        autoplayDisableOnInteraction:false
                    })
                })
            }
        }
    }
</script>

<style>

</style>