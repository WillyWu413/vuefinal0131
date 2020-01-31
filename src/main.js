// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap';
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
import './bus';
import currencyFilter from './filters/currency';
import VeeValidate from 'vee-validate';
import zhTW from 'vee-validate/dist/locale/zh_TW';
import VueI18n from 'vue-i18n';
import App from './App';
import router from './router';
import './bus';


Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(VueI18n);
Vue.filter('currency', currencyFilter);
Vue.component('Loading', Loading);

axios.defaults.withCredentials = true;


const i18n = new VueI18n({
  locale: 'zhTW'
})
Vue.use(VeeValidate, {
  events: 'input|blur', //這是為了讓使用者離開該欄位時觸發驗證
  i18n,
  dictionary: {
    zhTW
  }
});

/* eslint-disable no-new */
new Vue({
  i18n,
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
});



router.beforeEach((to, from, next) => {
  console.log('to',to , 'from' , from , 'next',next);
  if (to.meta.requiresAuth){
    const api = `${process.env.APIPATH}/api/user/check`;
    axios.post(api).then(response => {
      console.log(response.data);
      if (response.data.success) {
        // vm.$router.push("/");
        next();
      }else{
        next({
          path: '/login',
        })
      }
    });
  }else{
    next();
  }
  
})

  
  

