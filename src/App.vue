<template>
    <div id="app">
        <el-container>
            <el-header class="header">Header</el-header>
            <el-container class="container">
                <el-aside class="aside">
                    <router-link
                        to="/father/countdown"
                    >
                        榜单内容
                    </router-link>
                </el-aside>
                <el-main class="content">
                    <transition name="fold-right">
                        <router-view/>
                    </transition>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  color: hotpink;
  height: 100vh;
}
.header {
    background: rosybrown;
}
.aside {
    width: 20px;
}
.content {
    background: white;
}
.fold-right-enter-active {
    animation: fold-right-in cubic-bezier(0.22, 1, 0.36, 1) 0.6s;
    position: absolute;
    will-change: transform;
    min-width: 100vw;
    min-height: 100vh;
}
.fold-right-leave-active {
    animation: fold-right-out cubic-bezier(0.22, 1, 0.36, 1) 0.6s;
    position: absolute;
    will-change: transform;
    min-width: 100vw;
    min-height: 100vh;
}
@keyframes fold-right-in {
    0% {
        min-width: 100vw;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
        position: absolute;
    }
    100% {
        min-width: 100vw;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        position: absolute;
    }
}
@keyframes fold-right-out {
    0% {
        min-width: 100vw;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        position: absolute;
    }
    100% {
        min-width: 100vw;
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
        position: absolute;
    }
}
</style>
