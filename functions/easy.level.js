/**
 * Задача 1 - написать функцию, которая вернет тип данных аргумента value
 * @param value{any} - входное значение, может быть любым
 * @return {string} - строковое значение типа данных для аргумента value
 */
function getDataType(value) {
    "use strict"
    // код функции
}

console.log('-----Результаты тест кейсов по задаче 1:')
console.log("22 это число: ", getDataType(22) === 'number') // true
console.log("\'Hello, World!\' это строка: ", getDataType('Hello, world!') === 'string') // true
console.log("true это логическое значение: ", getDataType(true) === 'boolean') // true
console.log("typeof null это не null: ", getDataType(null) !== 'null') //true
console.log("typeof null это object (т.к. это баг JS): ", getDataType(null) === 'object') //true
console.log("тип анонимной функции это function: ", getDataType(function () {
}) === 'function') //true
console.log("typeof {country: \'Russia\'} это object: ", getDataType({country: "Russia"}) === 'object') //  true
console.log("typeof undefined это undefined: ", getDataType(undefined) === 'undefined') // true

/** Задача 2 - написать функцию, которая скажет какое сейчас время года.
 *
 * Аргументы:
 * @param monthNumber{number} - целое число, которое может быть от 0 до 11, где 0 - Январь, а 11 - Декабрь.
 *
 * @description Примечание: на основе значения monthNumber, написать тело функции getTimeOfYear, которая вернет одно из значений: "Лето", "Осень", "Зима", "Весна"
 * @description Значение должно совпадать с реальным временем года для переданного месяца.
 * @description Дополнительный уровень: решить задачу несколькими способами.
 *
 * @return {"Зима" | "Лето" | "Осень" | "Весна"}
 */

function getTimeOfYear(monthNumber) {
    //код функции
}

//тест кейсы
console.log('-----Результаты тест кейсов по задаче 2:')
console.log("Январь - это зима: ", getTimeOfYear(0 /* Январь */)?.toLowerCase() === 'зима') // true
console.log("Февраль - это зима: ", getTimeOfYear(1 /* Февраль */)?.toLowerCase() === 'зима') // true
console.log("Март - это весна: ", getTimeOfYear(2 /* Март */)?.toLowerCase() === 'весна') // true
console.log("Апрель - это весна: ", getTimeOfYear(3 /* Апрель */)?.toLowerCase() === 'весна') // true
console.log("Май - это весна: ", getTimeOfYear(4 /* Май */)?.toLowerCase() === 'весна') // true
console.log("Июнь - это лето: ", getTimeOfYear(5 /* Июнь */)?.toLowerCase() === 'лето') // true
console.log("Июль - это лето: ", getTimeOfYear(6 /* Июль */)?.toLowerCase() === 'лето') // true
console.log("Август - это лето: ", getTimeOfYear(7 /* Август */)?.toLowerCase() === 'лето') // true
console.log("Сентябрь - это осень: ", getTimeOfYear(8 /* Сентябрь */)?.toLowerCase() === 'осень') // true
console.log("Октябрь - это осень: ", getTimeOfYear(9 /* Октябрь */)?.toLowerCase() === 'осень') // true
console.log("Ноябрь - это осень: ", getTimeOfYear(10 /* Ноябрь */)?.toLowerCase() === 'осень') // true
console.log("Декабрь - это зима: ", getTimeOfYear(11 /* Декабрь */)?.toLowerCase() === 'зима') // true


/** Задача 3 - Написать функцию, которая будет производить возведение числа в квадрат.
 * @name squareNumber
 * @function
 *
 * Аргументы:
 * @param num{number} - целое число, которое нужно возвести в степень.
 *
 * Возвращаемое значение: целое число, являющееся квадратом числа.
 * @return number
 *
 * @see https://learn.javascript.ru/operators
 * @see https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math
 */

function squareNumber(num) {
    //код функции
}

//тест кейсы
console.log('-----Результаты тест кейсов по задаче 3:')
console.log('квадратный корень от 5 в квадрате = 5: ', Math.sqrt(squareNumber(5)) === 5) // true
console.log('квадратный корень от 121 в квадрате = 121: ', Math.sqrt(squareNumber(121)) === 121) // true
console.log('квадратный корень от 99 в квадрате = 99: ', Math.sqrt(squareNumber(99)) === 99) // true
console.log('11 в квадрате = 121: ', squareNumber(11) === 121) // true
console.log('100 в квадрате = 10000 (десять тысяч): ', squareNumber(100) === 10000) // true
console.log('25 в квадрате = 625: ', squareNumber(25) === 625) // true
console.log('21 в квадрате не равно 400: ', squareNumber(21) !== 400) // true


/** Задача 4 - Написать функцию, которая вернет true или false, в зависимости от того, находится ли число в заданном диапазоне чисел.
 * Число должно быть меньше или равно, чем значение max, и больше или равно значения min.
 *
 * @name checkNumberInRange
 * @function
 *
 * Аргументы:
 * @param num{number} - число, которое необходимо проверить.
 * @param min{number} - минимальное число порога.
 * @param max{number} - максимальное число порога.
 *
 * @return boolean
 *
 * @description Примечание: Задача считается решенной, если все тест кейсы вернули true
 */

function checkNumberInRange(num, min, max) {
    //код функции
    return min <= num && max >= num
}

console.log('-----Результаты тест кейсов по задаче 4:')
console.log('5 находится между 5 и 5: ', checkNumberInRange(5, 5, 5)) // true
console.log('утверждение, что 11 находится между 8 и 10 является ложным: ', checkNumberInRange(11, 8, 10) === false) // true
console.log('8 в квадрате, находится между 8*7 и 8*9: ', checkNumberInRange(8*8, 8*7, 8*9)) // true
