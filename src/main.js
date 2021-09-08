import './main.css'
console.log('test main')
import Vue from 'vue'
import App from './App.vue'
import { Button } from 'hui'
import 'hui/lib/hui.css'

Vue.use(Button)

new Vue({
    el: '#app',
    render: (h) => h(App)
})