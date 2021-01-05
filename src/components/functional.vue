<script>
import Vue from 'vue'
export default Vue.component('functional', {
  name: 'functional',
  functional: true,
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  render: function (createElement, context) {
    return createElement('div', 'hello')
  }
})
</script>

<style scoped></style>
