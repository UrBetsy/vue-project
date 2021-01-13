<template>
    <div class="drawer-container">
        <div class="drawer-header">
            <div></div>
            <el-avatar size='medium' :src="avatar"></el-avatar>
        </div>
        <div class="drawer-container">
            hello,
        </div>
    </div>
</template>

<script>
export default {
    name: 'myIntroduction',
    components: {
    },
    data() {
        return {
            avatar: "https://static.yximgs.com/udata/pkg/ks-ad-fe/fndosanfd.bd31375a.png",
        };
    },
    methods: {
    }
};
</script>

<style>
.drawer-container {
    padding: 50px;
}
.drawer-header {
    display: flex;
    justify-content: space-between;
}
.drawer-container {
    padding: 50px;
}
</style>
