/*

Создайте функцию, которая возвращает массив из 10 случайных целых чисел от 0 до 10.

Пример: () => [ 0, 1, 2, 2, 7, 4, 3, 2, 6, 3 ]

*/

const randomArr = () => {
    /* Тут код*/
    let arr = []
    let min = 0
    let max = 10

    for (let i = min; i < max; i++) {
        n = Math.round(Math.random() * 10)
        arr.push(n)
    }
    return arr
}


module.exports = randomArr
