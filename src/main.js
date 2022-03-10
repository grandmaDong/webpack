import './style/main.css'
import Vue from 'vue'
import App from './App.vue'
import HUI from 'hui'
import 'hui/lib/hui.css'


Vue.use(HUI)
new Vue({
    el: '#app',
    render: (h) => h(App)
})