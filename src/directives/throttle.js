export const Throttle = {
  bind: function (el, binding) {
    let throttleTime = binding.value || 2000
    let cbFun
    el.addEventListener('click', () => {
      el.isDisableClick = true
      if (!cbFun) {
        cbFun = setTimeout(() => {
          el.isDisableClick = false
          cbFun = null
        }, throttleTime)
      }
    }, true)
  },
  unbind () {}
}
