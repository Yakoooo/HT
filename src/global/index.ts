import { App } from 'vue'
import elemenplus from './register-elementplus'
import formatTime from './register-time'

export function elemenplusapp(app: App): void {
  elemenplus(app)
  formatTime(app)
}
