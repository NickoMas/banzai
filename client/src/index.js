import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Hero from './pages/Hero.vue';
import About from './pages/About.vue';
import Contacts from './pages/Contacts.vue';
import Coaches from './pages/Coaches.vue';
import './client.css';

// const Foo = { template: '<div>foo</div>' };
// const Bar = { template: '<div>bar</div>' };

const routes = [
  { path: '/main', component: Hero},
  { path: '/about', component: About},
  { path: '/contacts', component: Contacts},
  { path: '/сoaches', component: Coaches}
];

const router = new VueRouter({
  mode: 'history',
  routes
});

Vue.use(VueRouter);

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