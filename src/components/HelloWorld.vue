<template>
  <div class="hello">
    <div>过滤器{{filterValue | filterAddTwo}}</div>
    <functional :items="[1, 2, 3, 4]"></functional>
    <select v-model="value">
        <option disabled value="0">请选择</option>
        <option value="1">A</option>
        <option value="2">B</option>
        <option value="3">C</option>
    </select>
    <model-com
        v-model="inputValue"
    >
    </model-com>
    <span class="text">
        文字文字
    </span>
    <hr>
    <div class="text1">文字文字</div>
    <div class="callout"></div>
    <directiveCom />
  </div>
</template>

<script>
import functional from './functional';
import modelCom from './modelCom';
import directiveCom from './directiveCom';
export default {
    name: 'HelloWorld',
    component: {
        functional,
        modelCom,
        directiveCom,
    },
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            value: 0,
            inputValue: '我是默认值',
            filterValue: 4,
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
