/* eslint-disable */
import Vue from "vue";
import App from "./App.vue";
import "reset-css";
import * as echarts from "echarts";
import VueEcharts from "vue-echarts";
Vue.component("v-chart", VueEcharts); //注册全局组件(这个组件专门在vue项目中高效绘制图表的工具)
//按需引入element中的组件
import { Card } from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Card);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
