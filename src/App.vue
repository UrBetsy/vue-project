<template>
    <el-container id="app">
        <el-header class="header">
            <Header />
        </el-header>
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
import siderBar from '@/components/siderBar/index';
import Header from '@/components/Header/index';
export default {
    name: 'App',
    components: {
        siderBar,
        Header,
    },
    data() {
        return {
        };
    }
};
</script>

<style>
@import './assets/style/index.less';
.header {
    height: 60px;
}
</style>
