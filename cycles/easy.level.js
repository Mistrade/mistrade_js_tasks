/**
 * Задача 1 - Написать функцию, которая возвращает массив чисел в порядке возрастания в диапазоне от min до max
 *
 * @name getNumbersInRange
 * @function
 *
 * @param min{number} - минимальное число в диапазоне
 * @param max{number} - максимальное число в диапазоне
 *
 * @return Array<number>
 * @description Возвращаемое значение должно быть массивом из чисел, находящихся в диапазоне от min до max, включительно.
 * @description Если min число больше чем max - то вернуть пустой массив.
 * @description Для прохождения задачи необходимо чтобы все test case вернули true.
 *
 * @see https://learn.javascript.ru/array статья о массивах
 * @see https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/push как добавлять элементы в массив
 * @see https://learn.javascript.ru/while-for статья о циклах while и for
 */

function getNumbersInRange(min, max) {
    //код функции
    return []
}


console.log('-----Результаты тест кейсов по задаче 1, тема \"Циклы\", уровень \"Легкий\":')
const firstTry = getNumbersInRange(10, 12)
console.log('Первый тест вернул массив вида [10, 11, 12]: ', firstTry[0] === 10 && firstTry[1] === 11 && firstTry[2] === 12)
const secondTry = getNumbersInRange(-121, -117)
console.log('Второй тест вернул массив вида [-121, -120, -119, -118, -117]: ', secondTry[0] === -121 && secondTry[secondTry.length - 1] === -117 && secondTry.length === 5)
const thirdTry = getNumbersInRange(-117, -121);
console.log('Третий тест вернул массив вида []: ', thirdTry.length === 0)

/**
 * Задача 2 - Написать функцию, которая будет возвращать указанное количество рандомных чисел.
 * Каждое число должно быть в диапазоне от 0 до указанного значения в аргументе maxRandomValue.
 *
 * @name getArrayOfRandomNumbers
 * @function
 *
 * @param count{number} - длина массива (количество чисел в массиве), которое должна вернуть функция.
 * @param maxRandomValue{number} - максимальное значение рандомного числа (от 0 до maxRandomValue)
 *
 * @return Array<number> - массив сгенерированных рандомных целых чисел
 * @description Подсказка: наиболее оптимальным решением будет использование цикла while
 * @description Для прохождения задачи необходимо чтобы все test case вернули true.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random статья о том, как генерировать рандомные числа
 * @see https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/push как добавлять элементы в массив
 */

function getArrayOfRandomNumbers(count, maxRandomValue) {
    // код фнукции
}

console.log('-----Результаты тест кейсов по задаче 2, тема \"Циклы\", уровень \"Легкий\":')
const result1 = getArrayOfRandomNumbers(10, 22)
console.log('Функция вернула массив, содержащий 10 чисел, каждое из которых от 0 до 22', result1.length === 10 && result1.every((num) => num >= 0 && num <= 22))

const result2 = getArrayOfRandomNumbers(22, 190)
console.log('Функция вернула массив, содержащий 22 числа, каждое из которых от 0 до 190', result2.length === 22 && result2.every((num) => num >= 0 && num <= 190))

const result3 = getArrayOfRandomNumbers(-5, 190)
console.log('Функция при отрицательном count, вернула пустой массив: ', result3.length === 0)

const result4 = getArrayOfRandomNumbers(5, -10);
console.log('Функция вернула массив из 5 чисел, каждое из которых от -10 до 0: ', result4.length === 5 && result4.every((num) => num >= -10 && num <= 0))