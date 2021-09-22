import './style/main.css'
import 'hui/lib/hui.css'
import Vue from 'vue'
import App from './App.vue'
import HUI from 'hui'


Vue.use(HUI)
new Vue({
    el: '#app',
    render: (h) => h(App)
})