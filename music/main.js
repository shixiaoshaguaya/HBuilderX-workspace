import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// Vue.prototype.serverUrl = "http://localhost:3000";
Vue.prototype.serverUrl = "https://mydnsservice.xyz:3000";

Vue.prototype.getGlobalUser = function(key) {
	var userInfo = uni.getStorageSync("globalUser");
	if (userInfo != null && userInfo != "" && userInfo != undefined) {
		return userInfo;
	} else {
		return null;
	}
}

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
