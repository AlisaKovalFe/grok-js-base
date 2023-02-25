/*

Создайте функцию, которая принимает в качестве аргументов 2 неотрицательных числа, 
а возвращает сумму всех целых чисел в диапазоне между ними.

Первое число может больше второго!

Пример: (5, 3) => 12

*/

const sumOfIntegers = (start, end) => {
    /* Тут код*/
    let sum = 0

    if (start > end) {
        let buf = start
        start = end
        end = buf
    }
    for (let i = start; i <= end; i++) {
        sum += i
    }
    return sum
}

module.exports = sumOfIntegers
