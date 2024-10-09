const fs = require('fs')
const path = require('path')
//Создаём папку синхронным методом mkdirSync с использованием рекурсивного параметра для создания вложенных папок
//fs.mkdirSync(path.resolve(__dirname, 'dir', 'dir2', 'dir3'), {recursive:true})
//Удаляем папку синхронным методом
//fs.rmdirSync(path.resolve(__dirname, 'dir', 'dir2'))

//Создаём папку асинхронным методом с вылавливанием ошибки
fs.mkdir(path.resolve(__dirname, 'dir'), (err) => {
    if(err) {
        throw err;
    }
})