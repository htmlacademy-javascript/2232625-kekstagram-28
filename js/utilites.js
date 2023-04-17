const MAX_LENGHT = 140;
const DEB_TIMEOUT = 500;
const checkString = (string) => string.length <= MAX_LENGHT;

const doDescendingCommentsOrder = (photoA, photoB) => photoB.comments.length - photoA.comments.length;

const debounce = (callback, timeoutDelay = DEB_TIMEOUT) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const checkEscKey = (evt) => evt.key === 'Escape';

const checkEnterKey = (evt) => evt.key === 'Enter';

export {checkString, checkEscKey, checkEnterKey, doDescendingCommentsOrder, debounce};
