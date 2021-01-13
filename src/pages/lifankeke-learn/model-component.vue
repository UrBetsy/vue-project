<template>
  <div class="hello">
    <model-com
        v-model="inputValue"
    >
    </model-com>
    <div>我是页面中的值{{inputValue}}</div>
  </div>
</template>

<script>
import modelCom from '@/components/modelCom';
export default {
    name: 'model-component',
    component: {
        modelCom,
    },
    data () {
        return {
            inputValue: '我是默认值',
        };
    },
    methods: {
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text {
    color: green;
}
hr {
    height: 20px;
    background: currentColor;
}
.text1 {
    color: red;
    padding: 10px;
    border-width: 2px;
    border-style: solid;
}
.callout {
    height:20px;
    width: 30px;
    background: red;
    border: black solid 1px;
    position: relative;
}
.callout::before {
    content: "";
    position: absolute;
    top: -.4em;
    left: 1em;
    padding: .35rem;
    background: inherit;
    border: inherit;
    border-right: 0;
    border-bottom: 0;
    transform: rotate(45deg);
}
</style>
