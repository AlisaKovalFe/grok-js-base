/*
Создайте функцию, которая убирает из строки символ "_", 
а следующую за "_" букву делает заглавной

Для начала пропиши аргументы функции.  

Пример: 'web_development' => 'webDevelopment'
*/

const camelCase = (str) => {
    /* Тут код*/
    let indexMatch = str.match(/_/).index
    let indexAfterMtach = indexMatch + 1

    let strNew = str.slice(0, indexMatch) + str.substr(indexAfterMtach, 1).toUpperCase() + str.slice(indexAfterMtach + 1).toLowerCase()

    return strNew

}

module.exports = camelCase