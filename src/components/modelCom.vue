<template>
    <div class='hello'>
        <input :value="inputValue || ''" @input="$emit('input', $event.target.value)" />
    </div>
</template>

<script>
import Vue from 'vue';
export default Vue.component('modelCom', {
    name: 'modelCom',
    components: {},
    model: {
        prop: 'value',
        event: 'input',
    },
    data () {
        return {
        };
    },
    props: {
        inputValue: {
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
