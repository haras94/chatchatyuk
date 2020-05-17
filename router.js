import vue from 'vue';
import VueRouter from 'vue-router';

import chat from './src/views/chat.vue';
import register from './src/views/register.vue';
import login from './src/views/login.vue';

vue.use(VueRouter);

const routes = [
    {
        path: '/chat',
        name: 'chat',
        component: chat,
      },
      {
        path: '/register',
        name: 'register',
        component: register,
      },
      {
        path: '/',
        name: 'login',
        component: login,
      },
         
         
    
    ];
    
    const router = new VueRouter({
      mode: 'history',
      routes,
    });
    
    export default router;
