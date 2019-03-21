import Vue from 'vue'

// 导入 app 根组件
import app from './App.vue'
import './lib/mui/css/mui.min.css'
// import './lib/mui/js/mui'
import { header ,tabbar} from 'mint-ui'
Vue.component(header.name,header)
var vm = new Vue({
    el:'#app',
    render:c=>c(app)
})

