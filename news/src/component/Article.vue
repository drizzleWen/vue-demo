<template>
    <div>
        <div class="nav">
            <ul>
                <li>
                    <i class="iconfont" onclick="window.history.go(-1)">&#xe600;</i>
                </li>
            </ul>
        </div>
        <div class="cont">
            <h3>{{articleData.title}}</h3>
            <div class="time"><p>{{}}</p></div>
            <div class="text-box" v-html="articleData.content"></div>
        </div>
    </div>
</template>

<script>
    export default{
        mounted(){
            this.fetchData(this.$route.params.id)
        },
        data(){
            return {
                articleData: {}
            }
        },
        watch: {
            $route(to){
                var reg = /article\/\d+/;
                if (reg.test(to.path)) {
                    var articleId = this.$route.params.id || 0;
                    this.fetchData(articleId)
                }
            }
        },
        methods: {
            fetchData(id){
                var _this = this;
                this.$http.get('../src/data/article.data').then(function (res) {
                    _this.articleData = res.data
                }).catch(function (err) {
                    console.log('文章页', err)
                })
            }
        }
    }
</script>

<style scoped>
    html, body {
        overflow-x: hidden;
    }

    .nav {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background-color: #fff;
        border-bottom: 1px solid #e8eaec;
        z-index: 99;
    }

    .nav ul {
        width: 6.4rem;
        height: 0.54rem;
        margin: 0 auto;
        line-height:.54rem;
        padding-top: .1rem;
    }
    @font-face {
        font-family: 'iconfont';
        src: url('../assets/font/iconfont.eot');
        src: url('../assets/font/iconfont.eot?#iefix') format('embedded-opentype'),
        url('../assets/font/iconfont.woff') format('woff'),
        url('../assets/font/iconfont.ttf') format('truetype'),
        url('../assets/font/iconfont.svg#iconfont') format('svg');
    }

    .iconfont {
        font-family: "iconfont" !important;
        font-size: 32px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;
        margin-left: .38rem;
    }

</style>