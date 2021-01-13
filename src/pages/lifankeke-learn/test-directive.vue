<template>
    <div class="test-directive">
        <directiveCom />
    </div>
</template>

<script>
import directiveCom from '@/components/directiveCom';
export default {
    name: 'test-directive',
    component: {
        directiveCom,
    },
    data () {
        return {
        };
    },
    methods: {
    },
};
</script>

<style scoped>
</style>
