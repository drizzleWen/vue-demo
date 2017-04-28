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
            <div class="time"><p>{{articleData.time | normalTime}}</p></div>
            <div class="text-box" v-html="articleData.content"></div>
        </div>
        <div class="footer">
            <ul>
                <li>
                    <a href="javascript:void(null)">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-zan-copy"></use>
                        </svg>
                    </a>
                    <span class="num">1</span>
                </li>
                <li>
                    <a href="javascript:void(null)">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-pinglun"></use>
                        </svg>
                    </a>
                    <span class="num">1</span>
                </li>
                <li>
                    <a href="javascript:void(null)">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-xing"></use>
                        </svg>
                    </a>
                    <span class="num">1</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default{
        mounted(){
            this.fetchData(this.$route.params.id)
            if(this.$route.path.indexOf('article')>0){

                this.$store.dispatch('SHOW_FOOTER_FAIL')
            }
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
                    _this.articleData = res.data[id];
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
        line-height: .54rem;
        padding-top: .1rem;
    }

    @font-face {
        font-family: 'iconfont';  /* project id 276458 */
        src: url('//at.alicdn.com/t/font_ec22xcv6fuaw0zfr.eot');
        src: url('//at.alicdn.com/t/font_ec22xcv6fuaw0zfr.eot?#iefix') format('embedded-opentype'),
        url('//at.alicdn.com/t/font_ec22xcv6fuaw0zfr.woff') format('woff'),
        url('//at.alicdn.com/t/font_ec22xcv6fuaw0zfr.ttf') format('truetype'),
        url('//at.alicdn.com/t/font_ec22xcv6fuaw0zfr.svg#iconfont') format('svg');
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

    .icon {
        width: 3em; height: 3em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
        margin-top:.1rem;
    }

    .cont {
        margin-top: 1rem;
        padding: .1rem .3rem;
    }

    .cont .text-box {
        font-size: 0.25rem;
    }

    .cont h3{
        border-bottom: 1px solid #000;
        font-size: 18px;
        padding-bottom: .25rem;
    }


    .text-box p {
        line-height: 0.45rem;
        margin-bottom: 0.1rem;
    }

    .footer{
        position:fixed;
        bottom:0rem;
        height:.8rem;
        width:100%;
        background:#fff;
    }

    .footer ul{
        display:flex;
        height:100%;
    }

    .footer ul li{
        flex:1;
        text-align:center;
        line-height:.8rem;
    }
    
    .footer ul li .num{
        font-size: .3rem;
        font-weight: bold;
        color: red;
    }
</style>