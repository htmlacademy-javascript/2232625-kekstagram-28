import './data.js';
import './utilites.js';
import { generatePreviews } from './rendering-preview.js';
import './rendering-photo.js';
import './form.js';
import { getData, generateErrorMessage } from './server.js';

getData()
  .then((data) => {
    generatePreviews(data);
  })
  .catch(() => {
    generateErrorMessage('Ошибка при загрузке данных!');
  });
