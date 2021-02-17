import Vue from 'vue'
import App from './App.vue'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(faSearch);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
