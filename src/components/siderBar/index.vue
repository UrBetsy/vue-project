<template>
    <div class='sider-container'>
        <el-menu
                class="menu"
                v-for="(nav, index) in navList"
                :key="index"
                :default-active="$route.path"
                active-text-color="#ff9000"
                router
            >
                <el-submenu v-if="nav.children" index="">
                    <template slot="title">
                        <i :class="nav.icon" class="nav_icon"></i>
                        <span slot="title">
                            {{ nav.title }}
                        </span>
                    </template>
                    <el-menu-item-group>
                        <template slot="title">{{ nav.title }}</template>
                        <el-menu-item
                            :index="sub.path"
                            v-for="(sub, idx) in nav.children"
                            :key="idx"
                        >
                            {{ sub.title }}
                        </el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
        </el-menu>
    </div>
</template>

<script>
import {
    navList,
} from './config';
export default {
    name: 'siderBar',
    component: {},
    data () {
        return {
            value: 0,
            navList,
        };
    },
    methods: {
    },
    mounted () {
        console.log(navList);
    },
};
</script>

<style scoped>

</style>
