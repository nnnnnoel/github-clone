import moment from 'moment';

export function toRelativeTime(time: string) {
  return moment(time).fromNow();
}

export function toUpdatedTime(time: string) {
  return 'Updated' + moment(time).format(' MMM DD');
}

export default {
  toRelativeTime,
  toUpdatedTime,
};
