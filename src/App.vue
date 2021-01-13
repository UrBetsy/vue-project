<template>
    <el-container id="app">
        <el-header class="header">Header</el-header>
        <el-container class="container">
            <el-aside class="aside">
                <sider-bar></sider-bar>
            </el-aside>
            <el-main class="main-content">
                <router-view/>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import siderBar from './components/siderBar/index';
export default {
    name: 'App',
    components: {
        siderBar,
    },
};
</script>

<style>
@import './assets/style/index.less';
</style>
