import Vue from 'vue'
// import App from './App.vue'
// import router from './router'
import wrap from '@vue/web-component-wrapper'
import Log from '../src/components/Log.vue'


Vue.config.productionTip = false

new Vue({
    // router,
  render: function (h) { return h(App) }
}).$mount('#app')

const CustomElement = wrap(Vue, Log);

window.customElements.define('suns-log', CustomElement);
