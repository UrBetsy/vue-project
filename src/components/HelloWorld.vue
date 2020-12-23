<template>
  <div class="hello">
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
  </div>
</template>

<script>
import functional from './functional'
import modelCom from './modelCom'
export default {
  name: 'HelloWorld',
  component: {
    functional,
    modelCom,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      value: 0,
      inputValue: '我是默认值',
    };
  },
  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
