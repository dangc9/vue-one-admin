import { router } from '@/router'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

nprogress.configure({
  easing: 'ease',
  speed: 500,
  trickleSpeed: 200,
  showSpinner: false
})
router.beforeResolve((to, from, next) => {
  nprogress.start()
  next()
})
router.afterEach(() => {
  nprogress.done()
})
