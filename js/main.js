import './utilites.js';
import { generatePreviews, displayFilterOptions } from './rendering-preview.js';
import './rendering-photo.js';
import './form.js';
import { getData, generateErrorMessage } from './server.js';

const ERROR_MESSAGE = 'Ошибка при загрузке данных.';
getData()
  .then((data) => {
    generatePreviews(data);
    displayFilterOptions(data);
  })
  .catch(() => {
    generateErrorMessage(ERROR_MESSAGE);
  });
