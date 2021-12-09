import day from 'dayjs'
import utc from 'dayjs/plugin/utc'
day.extend(utc)
const DATE_FROMR = 'YY-MM-DD HH:mm:ss'

export default function (time: string, timeFrom: string = DATE_FROMR) {
  return day(time).utcOffset(8).format(timeFrom)
}
