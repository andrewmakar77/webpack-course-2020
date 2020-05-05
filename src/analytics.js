import * as moment from 'moment';

function createAnalytics() {
  let counter = 0;
  let isDestroyed = false;
  let destroyedDate;

  const listener = () => counter++;

  document.addEventListener('click', listener);

  return {
    destroy() {
      document.removeEventListener('click', listener);
      isDestroyed = true;
      destroyedDate = moment().startOf('second').fromNow();
    },
    getClicks() {
      if (isDestroyed) {
        return `Analytics is destroyed: ${destroyedDate}`;
      }
      return counter;
    },
  };
}

window.analytics = createAnalytics();
