import { App } from 'vue'
import time from '@/utilt/time'

export default function (app: App): any {
  app.config.globalProperties.$filters = {
    formatTime(value: string) {
      return time(value)
    }
  }
}
