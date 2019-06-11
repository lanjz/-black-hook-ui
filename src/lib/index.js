import toast from './toast'
import messageBox from './messageBox'
import loading from './loading'

const install = function (Vue, args = {}) {
  Vue.prototype.$showLoading = loading.show
  Vue.prototype.$hideLoading = loading.hide
  Vue.prototype.$alert = messageBox
  Vue.prototype.$toast = toast
}


if(typeof window !== 'undefined' && window.Vue) {
  window.Vue.use()
}


export default {
  install,
}
