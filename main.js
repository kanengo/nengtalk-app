//国际化json文件

import en from './i18n/en.json'
import zhHans from './i18n/zh-Hans.json'

const messages = {
	en,
	'zh-Hans': zhHans
}

	
let i18nConfig = {
	locale: uni.getLocale(),
	messages
}

// #ifndef VUE3
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'

import { createI18n } from 'vue-i18n'
const i18n = createI18n(i18nConfig)

import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
	app.use(i18n)
  return {
    app
  }
}
// #endif