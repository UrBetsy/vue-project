
import { Throttle } from '../directives/throttle'

export const directivePlugin = {
  install: (Vue, options) => {
    // 全局自定义指令
    Vue.directive('Throttle', { ...Throttle })
  }
}
