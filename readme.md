Простой бекенд микросервис на Node.JS с NoSQL базой данных

Установить модули
npm i или yarn

Для запуска с отслеживанием изменений для разработки:
nodemon или ./node_modules/.bin/nodemon index.js

Для запуска в обычном режиме:
node index.js

Использование:
http://localhost:5555/all
http://localhost:5555/add/list/ в body отправляем { title: 'Текст для записи'}
и т.д.
