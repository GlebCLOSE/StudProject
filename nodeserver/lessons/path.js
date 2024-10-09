const path = require('path');// Подключаем модуль PATH

//Функция "Join" позволяющая склеить пути. Может использоваться для адаптации работы в разных ОС.
console.log("Склеиваем несколько участков пути", path.join('first','second','third'))
//Используем переменную __dirname чтобы получить путь к текущей директории, можно использовать '..' для поднятия вверх от изначальной структуры
console.log("Используем __dirname в join", path.join(__dirname, '..','..'))
//Парсинг пути
const fullpath = path.join(__filename)
console.log('парсим путь', path.parse(fullpath))

console.log('Разделитель в ОС', path.sep)
console.log('Проверка на абсолютный путь', path.isAbsolute(fullpath))
console.log('Название файла', path.basename(fullpath))
console.log('Расширение файла', path.extname(fullpath))

console.log('ID Процесса - ', process.pid)

//----------------------------------------------

const siteURL = 'http://localhost:8080/users?id=5123'

const url = new URL(siteURL)

console.log(url)

