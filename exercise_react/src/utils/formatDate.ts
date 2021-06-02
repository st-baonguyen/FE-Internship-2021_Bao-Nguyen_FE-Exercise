import { format, parseISO } from 'date-fns';

export const formatDate = (stringTime: string) => {
  return format(parseISO(stringTime), 'yyyy-MM-dd HH:mm:ss');
}
