
const checkString = (string) => string.length <= 140;

const doDescendingCommentsOrder = (photoA, photoB) => photoB.comments.length - photoA.comments.length;

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const checkEscKey = (evt) => evt.key === 'Escape';

const checkEnterKey = (evt) => evt.key === 'Enter';

export {checkString, checkEscKey, checkEnterKey, doDescendingCommentsOrder, debounce};
