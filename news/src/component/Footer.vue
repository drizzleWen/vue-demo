<template>
    <div class="footerBtn">
        <ul>
            <router-link tag="li" to="/home" class="home">
                <a href="javascript:;"><i class="iconfont">&#xe729;</i></a>
            </router-link>
            <router-link tag="li" to="/follow" class="write">
                <a href="javascript:;"><i class="iconfont">&#xe6d3;</i></a>
            </router-link>
            <router-link tag="li" to="/user-info" class="user">
                <a href="javascript:;"><i class="iconfont">&#xe601;</i></a>
            </router-link>
        </ul>
    </div>
</template>


<style scoped>
    .footerBtn {
        width: 100%;
        height: 0.8rem;
        background: #fff;
        position: fixed;
        left: 0;
        bottom: 0;
        border-top: 1px solid #9e9a95;
    }

    .footerBtn ul {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .footerBtn ul li {
        flex: 1;
        text-align: center;
    }

    .footerBtn ul li a {
        display: block;
        width: 100%;
        height: 100%;
    }

    .footerBtn ul .home {
        height: 0.81rem;
        line-height: 0.81rem;
    }

    .footerBtn ul .write {
        height: 0.81rem;
        line-height: 0.81rem;
    }

    .footerBtn ul .user {
        height: 0.81rem;
        line-height: 0.81rem;
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
    }
</style>