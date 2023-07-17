/**
 * Задача 1 - написать функцию, которая вернет тип данных аргумента value
 * @param value{any} - входное значение, может быть любым
 * @return {string} - строковое значение типа данных для аргумента value
 */
function getDataType(value) {
  'use strict';
  // код функции
}

//тест кейсы к задаче 1
console.log('-----Результаты тест кейсов по задаче 1:');
console.log('22 это число: ', getDataType(22) === 'number'); // true
console.log(
  "'Hello, World!' это строка: ",
  getDataType('Hello, world!') === 'string'
); // true
console.log('true это логическое значение: ', getDataType(true) === 'boolean'); // true
console.log('typeof null это не null: ', getDataType(null) !== 'null'); //true
console.log(
  'typeof null это object (т.к. это баг JS): ',
  getDataType(null) === 'object'
); //true
console.log(
  'тип анонимной функции это function: ',
  getDataType(function () {}) === 'function'
); //true
console.log(
  "typeof {country: 'Russia'} это object: ",
  getDataType({ country: 'Russia' }) === 'object'
); //  true
console.log(
  'typeof undefined это undefined: ',
  getDataType(undefined) === 'undefined'
); // true

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

//тест кейсы к задаче 2
console.log('-----Результаты тест кейсов по задаче 2:');
console.log(
  'Январь - это зима: ',
  getTimeOfYear(0 /* Январь */)?.toLowerCase() === 'зима'
); // true
console.log(
  'Февраль - это зима: ',
  getTimeOfYear(1 /* Февраль */)?.toLowerCase() === 'зима'
); // true
console.log(
  'Март - это весна: ',
  getTimeOfYear(2 /* Март */)?.toLowerCase() === 'весна'
); // true
console.log(
  'Апрель - это весна: ',
  getTimeOfYear(3 /* Апрель */)?.toLowerCase() === 'весна'
); // true
console.log(
  'Май - это весна: ',
  getTimeOfYear(4 /* Май */)?.toLowerCase() === 'весна'
); // true
console.log(
  'Июнь - это лето: ',
  getTimeOfYear(5 /* Июнь */)?.toLowerCase() === 'лето'
); // true
console.log(
  'Июль - это лето: ',
  getTimeOfYear(6 /* Июль */)?.toLowerCase() === 'лето'
); // true
console.log(
  'Август - это лето: ',
  getTimeOfYear(7 /* Август */)?.toLowerCase() === 'лето'
); // true
console.log(
  'Сентябрь - это осень: ',
  getTimeOfYear(8 /* Сентябрь */)?.toLowerCase() === 'осень'
); // true
console.log(
  'Октябрь - это осень: ',
  getTimeOfYear(9 /* Октябрь */)?.toLowerCase() === 'осень'
); // true
console.log(
  'Ноябрь - это осень: ',
  getTimeOfYear(10 /* Ноябрь */)?.toLowerCase() === 'осень'
); // true
console.log(
  'Декабрь - это зима: ',
  getTimeOfYear(11 /* Декабрь */)?.toLowerCase() === 'зима'
); // true

/** Задача 3 - Написать функцию, которая будет производить возведение числа в квадрат.
 * @name squareNumber
 * @function
 *
 * Аргументы:
 * @param x{number} - целое число, которое нужно возвести в степень.
 *
 * Возвращаемое значение: целое число, являющееся квадратом числа.
 * @return number
 *
 * @see https://learn.javascript.ru/operators
 * @see https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math
 */

function squareNumber(x) {
  //код функции
}

//тест кейсы к задаче 3
console.log('-----Результаты тест кейсов по задаче 3:');
console.log(
  'квадратный корень от 5 в квадрате = 5: ',
  Math.sqrt(squareNumber(5)) === 5
); // true
console.log(
  'квадратный корень от 121 в квадрате = 121: ',
  Math.sqrt(squareNumber(121)) === 121
); // true
console.log(
  'квадратный корень от 99 в квадрате = 99: ',
  Math.sqrt(squareNumber(99)) === 99
); // true
console.log('11 в квадрате = 121: ', squareNumber(11) === 121); // true
console.log(
  '100 в квадрате = 10000 (десять тысяч): ',
  squareNumber(100) === 10000
); // true
console.log('25 в квадрате = 625: ', squareNumber(25) === 625); // true
console.log('21 в квадрате не равно 400: ', squareNumber(21) !== 400); // true

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
}

//тест кейсы к задаче 4
console.log('-----Результаты тест кейсов по задаче 4:');
console.log('5 находится между 5 и 5: ', checkNumberInRange(5, 5, 5)); // true
console.log(
  'утверждение, что 11 находится между 8 и 10 является ложным: ',
  checkNumberInRange(11, 8, 10) === false
); // true
console.log(
  '8 в квадрате, находится между 8*7 и 8*9: ',
  checkNumberInRange(8 * 8, 8 * 7, 8 * 9)
); // true

/**
 * Задача 5 - Компания по транспортировке мебели заносит любую мебель на 1-й этаж бесплатно,
 * со 2-го по 4-й включительно - по 200руб., с 5-го по 7-й включительно - по 300руб.,
 * а с 8-го и выше - по 400руб.
 * Напишите функцию, которая рассчитает стоимость подъема мебели по указанному выше прайсу.
 *
 * @name getDeliveryPrice
 * @function
 *
 * @param floor{number} - этаж, на который необходимо произвести подъем мебели.
 *
 * @return {number} - итоговая стоимость подъема мебели (целое число)
 */

function getDeliveryPrice(floor) {
  //код функции
}

//тест кейсы к задаче 5
console.log('-----Результаты тест кейсов по задаче 5:');
console.log('Подъем на 1 этаж - бесплатный: ', getDeliveryPrice(1) === 0);
console.log(
  'Подъем на 2 этаж будет стоить 200 рублей: ',
  getDeliveryPrice(2) === 200
);
console.log(
  'Подъем на 3 этаж будет стоить 400 рублей: ',
  getDeliveryPrice(3) === 400
);
console.log(
  'Подъем на 4 этаж будет стоить 600 рублей: ',
  getDeliveryPrice(4) === 600
);
console.log(
  'Подъем на 5 этаж будет стоить 900 рублей: ',
  getDeliveryPrice(5) === 900
);
console.log(
  'Подъем на 6 этаж будет стоить 1200 рублей: ',
  getDeliveryPrice(6) === 1200
);
console.log(
  'Подъем на 7 этаж будет стоить 1500 рублей: ',
  getDeliveryPrice(7) === 1500
);
console.log(
  'Подъем на 8 этаж будет стоить 1900 рублей: ',
  getDeliveryPrice(8) === 1900
);
console.log(
  'Подъем на 9 этаж будет стоить 2300 рублей: ',
  getDeliveryPrice(9) === 2300
);
console.log(
  'Подъем на 10 этаж будет стоить 2700 рублей: ',
  getDeliveryPrice(10) === 2700
);
console.log(
  'Подъем на 14 этаж будет стоить 4300 рублей: ',
  getDeliveryPrice(14) === 4300
);

/**
 * Задача 6 - Написать функцию, рассчитывающую сумму налога, которую необходимо заплатить, если налог начисляется
 * следующим образом:
 * - Зарплата до 15.000 рублей включительно - 10%
 * - Зарплата до 30.000 рублей включительно - 15%
 * - Зарплата до 60.000 рублей включительно - 17.5%
 * - Зарплата от 60.000 рублей включительно - 20%
 *
 * @name getTaxesAmount
 * @function
 *
 * @param income{number} - Размер заработной платы
 *
 * @return number
 *
 * @description Примечание: используйте множественные условия if/else/else if
 */

function getTaxesAmount(income) {
  //код функции
}

//тест кейсы к задаче 6
console.log('-----Результаты тест кейсов по задаче 6:');
console.log(
  'Налог на зарплату 12.500 будет 1.250 рублей: ',
  getTaxesAmount(12_500) === 1_250
);
console.log(
  'Налог на зарплату 20.000 будет 3.000 рублей: ',
  getTaxesAmount(20_000) === 3_000
);
console.log(
  'Налог на зарплату 50.500 будет 8.750 рублей: ',
  getTaxesAmount(50_000) === 8_750
);
console.log(
  'Налог на зарплату 60.000 будет 10.500 рублей: ',
  getTaxesAmount(60_000) === 10_500
);
console.log(
  'Налог на зарплату 100.000 будет 20.000 рублей: ',
  getTaxesAmount(100_000) === 20_000
);

/**
 * Задача 7 - Написать функцию, вычисляющую скорость, с которой необходимо двигаться,
 * чтобы преодолеть расстояние {distance} за время {time}.
 *
 * @name getSpeed
 * @function
 *
 * @param distance{number} - Расстояние в метрах
 * @param time{number} - Время в секундах
 *
 * @return {number} Скорость, которая нужна, чтобы преодолеть расстояние за указанное время. Единица измерения метры в секунду
 *
 * @description Дополнительный уровень: вернуть значение в единице измерения - километры в час.
 * @description Формула расчета скорости: скорость = расстояние / время
 * @description Если время или расстояние отрицательные - вернуть 0
 */

function getSpeed(distance, time) {
  //код функции
}

//тест кейсы к задаче 7
console.log('-----Результаты тест кейсов по задаче 7:');
console.log(
  'Чтобы преодолеть 10.000 метров за 60 секунд, необходимо двигаться со скоростью ~ 167 м/с: ',
  Math.round(getSpeed(10_000, 60)) === 167
);
console.log(
  'Чтобы преодолеть 100 км за 2 часа, необходимо двигаться со скоростью ~ 14м/с: ',
  Math.round(getSpeed(100_000, 7_200)) === 14
);
console.log(
  'Чтобы преодолеть 100 метров за 0 секунд, необходимо двигаться со скоростью 0 м/с: ',
  getSpeed(100, 0) === 0
);
console.log(
  'Чтобы преодолеть -200 метров за 10 секунд, необходимо двигаться со скоростью 0 м/с: ',
  getSpeed(-200, 10) === 0
);

/** Задача 8 - написать функцию, которая получив строку {str}, вернет эту строку в обратном порядке.
 * Например: str = 'Hello, World!', ожидаемый результат '!dlroW ,olleH'
 *
 * @param str{string} - Входная строка, которую необходимо перевернуть.
 *
 * @return {string} Возвращаемое значение должно быть входной строкой в обратном порядке.
 * @description Запрещено использовать метод reverse().
 * @description Важно сохранить регистр символов, которые были в исходной строке.
 */

function reverseString(str) {
  // код функции
}

//тест кейсы к задаче 8
console.log('-----Результаты тест кейсов по задаче 8:');
console.log(
  "Перевернутое значение строки 'абв' = 'вба': ",
  reverseString('абв') === 'вба'
);
console.log(
  "Перевернутое значение строки 'JavaScript' = 'tpircSavaJ': ",
  reverseString('JavaScript') === 'tpircSavaJ'
);
