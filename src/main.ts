import { createSSRApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import updateLocale from 'dayjs/plugin/updateLocale'

const ZH_RELATIVE_TIME = {
  future: '%s 后',
  past: '%s前',
  s: '几秒钟',
  m: ' 一分钟',
  mm: '%d 分钟',
  h: '一个小时',
  hh: '%d 小时',
  d: '一天',
  dd: '%d 天',
  M: '一个月',
  MM: '%d 个月',
  y: '一年',
  yy: '%d 年',
}

const EN_RELATIVE_TIME = {
  future: 'in %s',
  past: '%s ago',
  s: 'a few seconds',
  m: 'a minute',
  mm: '%d minutes',
  h: 'an hour',
  hh: '%d hours',
  d: 'a day',
  dd: '%d days',
  M: 'a month',
  MM: '%d months',
  y: 'a year',
  yy: '%d years',
}

dayjs.extend(relativeTime)
dayjs.extend(updateLocale)

dayjs.updateLocale('zh-cn', {
  relativeTime: ZH_RELATIVE_TIME,
})

export function createApp() {
  const pinia = createPinia()
  const app = createSSRApp(App)

  app.use(pinia)
  return {
    app,
  }
}

