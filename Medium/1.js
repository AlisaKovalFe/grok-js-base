/*

Создайте функцию, которая принимает в качестве аргумента строку и выводит каждый символ этой строки в консоль.

*/

const logEachLetter = (str) => {
    /* Тут код*/
    for (let letter of str) {
        console.log(letter);
    }

}

module.exports = logEachLetter