<template>
    <div class="header-container">
        <div></div>
        <div class="my-avatar" @click="drawer = true">
            <el-avatar size='medium' :src="avatar"></el-avatar>
        </div>
        <el-drawer
            title="我是标题"
            :modal="false"
            :visible.sync="drawer"
            :with-header="false"
            :show-close="true"
            @open="openDrawer"
        >
            <my-introduction />
        </el-drawer>
    </div>
</template>

<script>
import myIntroduction from './myIntroduction';
export default {
    name: 'Header',
    components: {
        myIntroduction,
    },
    data() {
        return {
            drawer: false,
            avatar: "https://static.yximgs.com/udata/pkg/ks-ad-fe/fndosanfd.bd31375a.png",
        };
    },
    methods: {
        openDrawer() {
            console.log('fa');
        }
    }
};
</script>

<style>
.header-container {
    border-bottom: solid 1px #e6e6e6;
    display: flex;
    justify-content: space-between;
}
</style>
