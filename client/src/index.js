import "@babel/polyfill";
import Vue from 'vue';
import Vuex from 'vuex'
import VueRouter from 'vue-router';
import VueScrollTo from 'vue-scrollto';
import VCalendar, { setupCalendar} from 'v-calendar'
import App from './App.vue';
import Hero from './pages/Hero.vue';
import About from './pages/About.vue';
import Contacts from './pages/Contacts.vue';
import Coaches from './pages/Coaches.vue';
import Calendar from "./pages/Calendar.vue";
import { navItemsCollection } from "./helpers/collections";
import * as assets from "./assets";
import './client.css';

// const Foo = { template: '<div>foo</div>' };
// const Bar = { template: '<div>bar</div>' };

const routes = [
  { path: '/hero', component: Hero },
  { path: '/about', component: About },
  { path: '/contacts', component: Contacts },
  { path: '/coaches', component: Coaches },
  { path: '/calendar', component: Calendar }
];

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueScrollTo, {
  // container: '.main-wrapper',
  duration: 700,
  offset: -90,
  easing: "ease",
});
Vue.use(VCalendar, {
  componentPrefix: 'vc',  // Use <vc-calendar /> instead of <v-calendar />
  screens: {
    tablet: '576px',
    laptop: '992px',
    desktop: '1200px',
  }
});

setupCalendar({
  locale: 'rus', // TODO: store in separate file
});
  

const store = new Vuex.Store({
  state: {
    isActiveHero: false
  },
  mutations: {
    initializeActiveHero(state) {
      state.isActiveHero = window.location.pathname === '/hero'
    },
    updateActiveHero(state, payload) {
      const { event } = payload;
      const label = event.target.parentNode;
      label.click();
      state.isActiveHero = label.dataset.link ? true : false;
    }
  }
})

new Vue({
  data: {
    name: ''
  },
  created: function() {
    console.log('this', this)
  },
  store,
  router: new VueRouter({
    mode: 'history',
    routes
  }),
  el: '#banzai',
  render: h => h(App)
});