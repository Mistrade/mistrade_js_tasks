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
}

//тест кейсы к задаче 1
console.log(
  '-----Результаты тест кейсов по задаче 1, тема "Циклы", уровень "Легкий":'
);
const firstTry = getNumbersInRange(10, 12);
console.log(
  'Первый тест вернул массив вида [10, 11, 12]: ',
  firstTry[0] === 10 && firstTry[1] === 11 && firstTry[2] === 12
);
const secondTry = getNumbersInRange(-121, -117);
console.log(
  'Второй тест вернул массив вида [-121, -120, -119, -118, -117]: ',
  secondTry[0] === -121 &&
    secondTry[secondTry.length - 1] === -117 &&
    secondTry.length === 5
);
const thirdTry = getNumbersInRange(-117, -121);
console.log('Третий тест вернул массив вида []: ', thirdTry.length === 0);

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
 * @return {Array<number>} - массив сгенерированных рандомных целых чисел
 * @description Подсказка: наиболее оптимальным решением будет использование цикла while
 * @description Для прохождения задачи необходимо чтобы все test case вернули true.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random статья о том, как генерировать рандомные числа
 * @see https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/push как добавлять элементы в массив
 */

function getArrayOfRandomNumbers(count, maxRandomValue) {
  // код функции
}

//тест кейсы к задаче 2
console.log(
  '-----Результаты тест кейсов по задаче 2, тема "Циклы", уровень "Легкий":'
);
const result1 = getArrayOfRandomNumbers(10, 22);
console.log(
  'Функция вернула массив, содержащий 10 чисел, каждое из которых от 0 до 22',
  result1.length === 10 && result1.every((num) => num >= 0 && num <= 22)
);

const result2 = getArrayOfRandomNumbers(22, 190);
console.log(
  'Функция вернула массив, содержащий 22 числа, каждое из которых от 0 до 190',
  result2.length === 22 && result2.every((num) => num >= 0 && num <= 190)
);

const result3 = getArrayOfRandomNumbers(-5, 190);
console.log(
  'Функция при отрицательном count, вернула пустой массив: ',
  result3.length === 0
);

const result4 = getArrayOfRandomNumbers(5, -10);
console.log(
  'Функция вернула массив из 5 чисел, каждое из которых от -10 до 0: ',
  result4.length === 5 && result4.every((num) => num >= -10 && num <= 0)
);

/**
 * Задача 3 - Написать функцию, которая проверит что каждое число в массиве соответствует указанному диапазону чисел
 *
 * @name checkNumbersInArray
 * @function
 *
 * @param arr{Array<number>} - входной массив чисел, над которым необходимо провести проверки
 * @param min{number} - Минимальное значение, которое может быть в массиве
 * @param max{number} - Максимальное значение, которое может быть в массиве
 *
 * @return {number} - Количество чисел, которые не удовлетворяют заданному min и max диапазону.
 * Вернуть 0, если все числа находятся в диапазоне от min до max включительно
 * или вернуть false - если есть нарушение диапазона.
 *
 * @description Решить без использования метода массива every. Только через for или while.
 */

function checkNumbersInArray(arr, min, max) {
  // код функции
}

//тест кейсы к задаче 3
console.log(
  'Тест 1. Все числа в массиве [1, 2, 3, 4, 5] соответствуют диапазону от 1 до 10: ',
  checkNumbersInArray([1, 2, 3, 4, 5], 1, 10) === 0
);
console.log(
  'Тест 2. В массиве [9, 2, 3, 4, 5] одно число не соответствует диапазону от 1 до 5: ',
  checkNumbersInArray([9, 2, 3, 4, 5], 1, 5) === 1
);
console.log(
  'Тест 3. В массиве [1,2,3,4,5] пять чисел не соответствуют диапазону от 10 до 100: ',
  checkNumbersInArray([1, 2, 3, 4, 5], 10, 100) === 5
);
