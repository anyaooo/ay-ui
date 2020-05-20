import Vue from "vue";
import App from "./App.vue";
import '@/assets/font-awesome/css/font-awesome.css'

import ayUi from './packages'

Vue.use(ayUi)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
