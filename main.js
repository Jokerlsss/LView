import Vue from 'vue'
import App from './App'

import LStyle from 'common/LView-style.js'

Vue.config.productionTip = false

Vue.prototype.$style = LStyle

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
