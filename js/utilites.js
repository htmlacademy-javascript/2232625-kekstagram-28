//Функция для проверки длины строки

const checkString = (string, length) => string.length <= length;
checkString('', 1);
//Функция для проверки, является ли строка палиндромом

const isPalindrom = (string) => {
  const tempString = string.toLowerCase().replaceAll(' ', '');

  let reverseString = ' ';
  for (let i = tempString.length - 1; i >= 0; i--) {
    reverseString += tempString.at(i);
  }

  return tempString === reverseString;
};
isPalindrom('');
//Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа

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

//Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами — и возвращает исходную строку, дополненную указанными символами до заданной длины.

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

const EscKey = (evt) => evt.key === 'Escape';

const EnterKey = (evt) => evt.key === 'Enter';

export {checkString, isPalindrom, extractNumber, padStart, EscKey, EnterKey};
