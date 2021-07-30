import Vue from 'vue'
const isServer = Vue.prototype.$isServer
export default function(lang) {
  if (!isServer) {
    if (typeof window.BFDESIGN !== 'undefined') {
      if (!('langs' in BFDESIGN)) {
        BFDESIGN.langs = {}
      }
      BFDESIGN.langs[lang.m.locale] = lang
    }
  }
}
