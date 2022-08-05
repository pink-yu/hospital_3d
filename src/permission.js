/**
 * 全站权限配置
 *
 */
import router from './router'
import store from '@/store'
router.beforeEach((to, from, next) => {
  // 缓冲设置
  
  const meta = to.meta || {}
  if (store.getters.access_token) {
    if (to.path === '/login') {
      next()
    } else {
      if (store.getters.roles.length === 0) {
        store.dispatch('GetUserInfo').then(() => {
          next()
        }).catch(() => {
          store.dispatch('FedLogOut').then(() => {
            next({ path: '/login' })
          })
        })
      } else {
        
        next()
      }
    }
  } else {
    if (meta.isAuth === false) {
      next()
    } else {
      next({ path: '/login' })
    }
  }
})

router.afterEach(() => {
})
