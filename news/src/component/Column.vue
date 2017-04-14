<template>
    <div class="contant">
        <div class="newsList">
            <ul>
                <li v-for="(item,index) in arrList">
                    <a href="javascript:;">
                        <h2>{{index + 1}}{{item.title}}</h2>
                        <p>{{item.detail}}</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                arrList:[]
            }
        },
        mounted(){
            this.fetchData()
        },
        methods:{
            fetchData(){
                var _this=this;
                this.$http.get('src/data/index.data').then(function (res) {
                    _this.arrList=res.data
                }).catch(function (err) {
                    console.log('栏目页',err)
                })
            }
        }
    }
</script>

<style scoped>
    .contant{
        margin-top: .6rem;
    }
</style>
