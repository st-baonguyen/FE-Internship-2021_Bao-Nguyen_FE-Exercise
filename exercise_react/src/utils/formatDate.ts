import { format, parseISO } from 'date-fns';

const formatTime = (stringTime: number) => {
  return (+stringTime < 10) ? '0' + stringTime : stringTime;
}

export const formatDate = (stringTime: string) => {
  return format(parseISO(stringTime), 'yyyy-MM-dd HH:mm:ss');
}

export const formatDateJs = (stringTime: string) => {
  const date = new Date(stringTime);
  const day = formatTime(date.getDate()) + '/' + formatTime(date.getMonth() + 1) + '/' + formatTime(date.getFullYear());
  const time = formatTime(date.getHours()) + ':' + date.getMinutes() + ':' + formatTime(date.getSeconds());
  return day + ' At ' + time;
}
