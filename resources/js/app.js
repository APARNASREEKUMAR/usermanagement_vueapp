import './bootstrap';
window.Vue = require('vue');
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);
import Myheader from './components/layouts/header.vue';
import Myfooter from './components/layouts/footer.vue';
import Home from './components/layouts/landingpage.vue';
import UserList from './components/users/index.vue';
import UserCreate from './components/users/create.vue';
import UserEdit from './components/users/edit.vue';
import GoogleMap from './components/googlemap.vue';

import Map from './components/googlemap/Map.vue'
import GoogleMaps from './components/googlemap/GoogleMap.vue'
import ListView from './components/googlemap/ListView.vue'
import Sidebar from './components/googlemap/Sidebar.vue'

Vue.component('GoogleMaps', GoogleMaps);
Vue.component('ListView', ListView);
Vue.component('Sidebar', Sidebar);

const routes=[
    { path:'/users/create',component:UserCreate },
    { path:'/users',component:UserList },
    { path:'/',component:UserList },
    { path:'/home',component:Home },
    { path:'/googlemap',component:Map }
]
const router = new VueRouter({
    mode:'history',
    routes
})
const app = new Vue({
    el: '#app',
    router,
    components:{Myheader,Myfooter},
});
window.EventBus = new Vue({
    data(){
      return {
        sanfrancisco: [37.78268, - 122.41136]
      }
    }
   });



