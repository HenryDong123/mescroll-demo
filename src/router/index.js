import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import srcollerdemo from "../components/srcollerdemo";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SrcollerDemo',
      component: srcollerdemo
    }
  ]
})
