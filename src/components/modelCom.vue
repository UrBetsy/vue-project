<template>
    <div class='hello'>
        <input :value="value || ''" @input="$emit('input', $event.target.value)" />
    </div>
</template>

<script>
import Vue from 'vue';
export default Vue.component('modelCom', {
    name: 'modelCom',
    component: {},
    model: {
        prop: 'value',
        event: 'input',
    },
    data () {
        return {
        };
    },
    props: {
        value: {
            type: String,
            default: '',
        },
    },
    methods: {
    },
});
</script>

<style scoped>

</style>
