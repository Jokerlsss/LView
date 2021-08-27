import Vue from 'vue'
import App from './App'

import LStyle from 'common/LView-style.js'

// 获取整个父组件
import $parent from './utils/$parent.js'
import $zIndex from './utils/$zIndex.js'

// 全局通用方法及配置
const $l = {
	$parent,
	$zIndex
}

// $l 挂载到 $l 对象上
uni.$l = $l

Vue.config.productionTip = false

Vue.prototype.$style = LStyle
// $l 挂载到 Vue 对象上
Vue.prototype.$l = $l

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
