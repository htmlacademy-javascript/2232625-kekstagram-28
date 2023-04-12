
const checkString = (string) => string.length <= 140;

const descendingCommentsOrder = (photoA, photoB) => photoB.comments.length - photoA.comments.length;

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const generateUniqueNumbersArr = (max, arrLength) => {
  const uniqueNumbers = [];
  while(uniqueNumbers.length < arrLength){
    const r = Math.floor(Math.random() * max) + 1;
    if(uniqueNumbers.indexOf(r) === -1) {
      uniqueNumbers.push(r);
    }
  }
  return uniqueNumbers;
};

const EscKey = (evt) => evt.key === 'Escape';

const EnterKey = (evt) => evt.key === 'Enter';

export {checkString, EscKey, EnterKey, descendingCommentsOrder, debounce, generateUniqueNumbersArr};
