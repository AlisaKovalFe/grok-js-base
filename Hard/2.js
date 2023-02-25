/*

Создайте функцию, которая принимает в качестве аргументов массив строк,
а возвращает первый самый длинный элемент массива.
Если входной массив пуст, функция возвращает null.
Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов.

Для начала пропиши аргументы функции.  

Пример: [ 'one', 'two', 'three' ] => 'three'

*/

const longestString = (arr) => {
    /* Тут код*/
    if (arr.length === 0) return null

    let element
    let max = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > max) {
            max = arr[i].length
            element = arr[i]
        }
    }
    return element
}

module.exports = longestString
