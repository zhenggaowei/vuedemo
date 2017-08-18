import Vue from 'vue'
import Router from 'vue-router'
import Main1 from '@/components/main/main1'
import Main2 from '@/components/main/main2'
import Main3 from '@/components/main/main3'
import Main4 from '@/components/main/main4'

import divBasis from '@/components/system/web/divGather/divBasis'
import divIntermediate from '@/components/system/web/divGather/divIntermediate'
import divAdvanced from '@/components/system/web/divGather/divAdvanced'
import divWebsite from '@/components/system/web/divGather/divWebsite'
import javascriptBasis from '@/components/system/web/javascriptGather/javascriptBasis'
import javascriptIntermediate from '@/components/system/web/javascriptGather/javascriptIntermediate'
import javascriptAdvanced from '@/components/system/web/javascriptGather/javascriptAdvanced'
import jqueryBasis from '@/components/system/web/jqueryGather/jqueryBasis'



Vue.use(Router);

export default new Router({
  //mode: 'history',
  routes: [
    {
      path: '/',
      name: 'main4',
      redirect: '/main4',
    },
    {
      path: '/main1',
      name: 'main1',
      component: Main1
    },
    {
      path: '/main2',
      name: 'main2',
      component: Main2
    },
    {
      path: '/main3',
      name: 'main3',
      component: Main3
    },
    {
      path: '/main4',
      name: 'main4',
      component: Main4,
      redirect: '/system/web/divGather/divBasis',
      children: [
        {
          path: '/system/web/divGather/divBasis',
          name: 'divBasis',
          component: divBasis
        },
        {
          path: '/system/web/divGather/divIntermediate',
          name: 'divIntermediate',
          component: divIntermediate
        },
        {
          path: '/system/web/divGather/divAdvanced',
          name: 'divAdvanced',
          component: divAdvanced
        },
        {
          path: '/system/web/divGather/divWebsite',
          name: 'divWebsite',
          component: divWebsite
        },
        {
          path: '/system/web/javascriptGather/javascriptBasis',
          name: 'javascriptBasis',
          component: javascriptBasis
        },
        {
          path: '/system/web/javascriptGather/javascriptIntermediate',
          name: 'javascriptIntermediate',
          component: javascriptIntermediate
        },
        {
          path: '/system/web/javascriptGather/javascriptAdvanced',
          name: 'javascriptAdvanced',
          component: javascriptAdvanced
        },
        {
          path: '/system/web/jqueryGather/jqueryBasis',
          name: 'jqueryBasis',
          component: jqueryBasis
        },
      ]
    }
  ]
})
