
const checkString = (string) => string.length <= 140;
checkString('', 1);

const isPalindrom = (string) => {
  const tempString = string.toLowerCase().replaceAll(' ', '');

  let reverseString = ' ';
  for (let i = tempString.length - 1; i >= 0; i--) {
    reverseString += tempString.at(i);
  }

  return tempString === reverseString;
};
isPalindrom('');

const extractNumber = (string) => {
  let result = '';

  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }

  return parseInt(result, 10);
};
extractNumber('');
const descendingCommentsOrder = (photoA, photoB) => photoB.comments.length - photoA.comments.length;

const padStart = (string, minLength, pad) => {
  const result = string;
  while (result.length < minLength) {
    const newResultLength = result.length + pad.length;
    const actualPad =
      newResultLength <= minLength
        ? pad
        : pad.slice(0, minLength - newResultLength);
    actualPad();
  }
  return result;
};
padStart('', 1, '');

function debounce (callback, timeoutDelay = 500) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

const EscKey = (evt) => evt.key === 'Escape';

const EnterKey = (evt) => evt.key === 'Enter';

export {checkString, isPalindrom, extractNumber, padStart, EscKey, EnterKey, descendingCommentsOrder, debounce};
