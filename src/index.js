import button from './components/button'
import buttonGroup from './components/button/src/button-group.vue'
import alter from './components/alert'
const components = {
  button,
  buttonGroup,
  alter,
}
const bfui = {
  ...components,
}
const install = (Vue) => {
  if (install.installed) return
  Object.keys(bfui).forEach((key) => {
    let keyName = 'bf-' + key
    Vue.component(keyName, bfui[key])
  })
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
const API = {
  version: process.env.VERSION,
  install,
  ...components,
}
export default API
