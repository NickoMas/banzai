import "@babel/polyfill";
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueScrollTo from 'vue-scrollto';
import App from './App.vue';
import Main from './pages/Main.vue';
import About from './pages/About.vue';
import Contacts from './pages/Contacts.vue';
import Coaches from './pages/Coaches.vue';
import Calendar from "./pages/Calendar.vue";
import { navItemsCollection } from "./helpers/collections";
import './client.css';

// const Foo = { template: '<div>foo</div>' };
// const Bar = { template: '<div>bar</div>' };

const routes = [
  { path: '/main', component: Main },
  { path: '/about', component: About },
  { path: '/contacts', component: Contacts },
  { path: '/coaches', component: Coaches },
  { path: '/calendar', component: Calendar }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

Vue.use(VueRouter);
Vue.use(VueScrollTo, {
  // container: '.main-wrapper',
  duration: 500,
  easing: "ease",
});

new Vue({
  data: {
    name: ''
  },
  created: function() {
    console.log('this', this)
  },
  router,
  el: '#banzai',
  render: h => h(App)
});