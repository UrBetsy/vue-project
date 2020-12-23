<template>
    <div id="app">
        <el-container>
            <el-header class="header">Header</el-header>
            <el-container class="container">
                <el-aside class="aside">Aside</el-aside>
                <el-main class="content">
                    <router-view/>
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
  color: #2c3e50;
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
</style>
