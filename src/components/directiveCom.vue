<template>
  <div class='hello'>
    <button @click="add" ref="btn" v-Throttle=5000>add</button>
    <span>{{value}}</span>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.component('directiveCom', {
  name: 'directiveCom',
  data () {
    return {
      value: 0
    }
  },
  methods: {
    add (e) {
      if (!this.$refs.btn.isDisableClick) {
        this.value += 1
      }
    }
  },
  component: {}
})
</script>

<style scoped>

</style>
