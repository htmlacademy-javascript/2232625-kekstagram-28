import './data.js';
import './utilites.js';
import { generatePreviews, displayFilterOptions } from './rendering-preview.js';
import './rendering-photo.js';
import './form.js';
import { getData, generateErrorMessage } from './server.js';

getData()
  .then((data) => {
    generatePreviews(data);
    displayFilterOptions(data);
  })
  .catch(() => {
    generateErrorMessage('Ошибка при загрузке данных!');
  });
