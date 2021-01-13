<template>
    <div class="hello">
        功能组件
        <functional>
            <template v-slot="{items}">
                <div>{{items}}</div>
            </template>
        </functional>
    </div>
</template>

<script>
import functional from '@/components/functional';
export default {
    name: 'functional-component',
    components: {
        functional,
    },
    data () {
        return {
            
        };
    },
    methods: {
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
