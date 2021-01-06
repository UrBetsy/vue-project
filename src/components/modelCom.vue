<template>
  <div class='hello'>
    <input :value="value || ''" @input="$emit('input', $event.target.value)" />
  </div>
</template>

<script>
import Vue from 'vue';
export default Vue.component('modelCom', {
    name: 'modelCom',
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
    component: {},
});
</script>

<style scoped>

</style>
