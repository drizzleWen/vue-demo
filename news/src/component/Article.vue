<template>
    <div>
        <div class="nav">

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
                articleData:{}
            }
        },
        watch:{
            $route(to){
                var reg=/article\/\d+/;
                if(reg.test(to.path)){
                    var articleId=this.$route.params.id || 0;
                    this.fetchData(articleId)
                }
            }
        },
        methods:{
            fetchData(id){
                var _this=this;
                this.$http.get('../src/data/article.data').then(function (res) {
                    _this.articleData=res.data
                }).catch(function (err) {
                    console.log('文章页',err)
                })
            }
        }
    }
</script>

<style scoped>
    html,body{ overflow-x: hidden; }
    .nav {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background-color: #fff;
        border-bottom: 1px solid #e8eaec;
        z-index: 99;
    }
</style>