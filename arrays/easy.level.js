/**
 * Задача 1.
 * @name data
 * @type {Array<{name: string, age: number}>}
 *
 * @description Сложность задач: 1-2 из 5
 *
 * @description Дан массив data, используя методы массивов решить задачи:
 * @description 1. Найти и вывести в консоль самого молодого и самого старшего человека
 * @description 2. Отсортировать массив по возрастанию возраста
 * @description 3. Преобразовать исходный массив в массив вида [15, 18, 35, 17, 66], то есть оставить только возраст людей в виде чисел.
 * @description 4. Выполнить задание аналогично п.3, только в порядке убывания, в начале - наибольшее числа, в конце - наименьшие.
 * @description 5. Вывести все имена в виде строки через запятую, пример: "Паша, Саша, Петя, и т.д."
 * @description 6. Вывести все имена, аналогично п.5, только в алфавитном порядке.
 * @description 7. Рассчитать средний возраст людей.
 * @description 8. Рассчитать сумму возраста всех людей моложе 30 лет.
 * @description 9. Отсортировать массив по возрастанию возраста не изменяя исходный массив data.
 *
 * @description Тренировка (необязательно): Определите алгоритмическую сложность вашего решения для каждой из задач.
 * @description Подробнее {@link https://tproger.ru/articles/computational-complexity-explained/ как вычислить алгоритмическую сложность}
 */

const data = [
  { name: 'Паша', age: 15 },
  { name: 'Саша', age: 18 },
  { name: 'Петя', age: 35 },
  { name: 'Жанет', age: 17 },
  { name: 'Оля', age: 66 },
];

/**
 * Задача 2.
 * @description Описание задачи: Напишите функцию, которая заполняет новый массив предоставленным значением.
 * @description Сложность задачи: 1 из 5
 * @summary Ожидаемый результат: (3, 'a') => ['a', 'a', 'a']
 *
 * @name fill
 * @function
 *
 * @param arraySize{number} - размер массива
 * @param value{any} - значение для массива
 * @returns {Array}
 *
 * @description Тренировка (необязательно): Определите алгоритмическую сложность вашего решения.
 * @description Подробнее {@link https://tproger.ru/articles/computational-complexity-explained/ как вычислить алгоритмическую сложность}
 */

const fill = (arraySize, value) => {
  //Код функции тут
};

//тест кейсы
console.log(
  'Функция fill с аргументами: arraySize - 3, value - "a", вернула массив ["a","a","a"]',
  JSON.stringify(fill(3, 'a')) === JSON.stringify(['a', 'a', 'a'])
);
console.log(
  'Функция fill с аргументом arraySize = 0, вернула пустой массив: ',
  Array.isArray(fill(0, 'a')) && fill(0, 'a').length === 0
);

/**
 * Задача 3.
 * @description Описание задачи: Напишите функцию, которая разворачивает массив в обратном порядке.
 * @description Сложность задачи: 1 из 5
 * @description Требования: Не использовать метод reverse
 * @summary Ожидаемый результат: [1, 2, 3] => [3, 2, 1]
 *
 * @param {Array} array - Массив любых элементов
 * @returns {Array}
 *
 * @description Тренировка (необязательно): Определите алгоритмическую сложность вашего решения.
 * @description Подробнее {@link https://tproger.ru/articles/computational-complexity-explained/ как вычислить алгоритмическую сложность}
 */
const reverse = (array) => {
  //код функции
};

//тест кейсы
console.log(
  'Функция reverse перевернула массив [1,2,3] в вид [3,2,1]: ',
  JSON.stringify(reverse([1, 2, 3])) === JSON.stringify([3, 2, 1])
);
console.log(
  'Функция reverse перевернула массив ["ф","в","ы"] в вид ["ы","в","ф"]: ',
  JSON.stringify(reverse(['ф', 'в', 'ы'])) === JSON.stringify(['ы', 'в', 'ф'])
);

/**
 * Задача 4.
 * @description Описание задачи: Напишите функцию, которая возвращает объект, составленный из значений вложенных массивов.
 * Первое значение - ключ, второе - значение этого ключа.
 * @description Сложность: 2/5
 * @summary Ожидаемый результат: [["name", "Стул"], ["category", "Мебель"]] => {name: "Стул", category: "Мебель"}
 *
 * @name fromPairs
 * @function
 *
 * @param arr{Array<[string, any]>} - Вложенный массив
 * @returns {{[key: string]: any}}
 *
 * @description Тренировка (необязательно): Определите алгоритмическую сложность вашего решения.
 * @description Подробнее {@link https://tproger.ru/articles/computational-complexity-explained/ как вычислить алгоритмическую сложность}
 */

const fromPairs = (arr) => {
  //код функции
};

//тест кейсы
console.log(
  fromPairs([
    ['name', 'Стул'],
    ['category', 'Мебель'],
  ])
); // {name: "Стул", category: "Мебель"}

/**
 * Задача 5.
 * @description Описание задачи: Напишите функцию, которая возвращает одноуровневый массив, составленный из значений многоуровневого массива.
 * @description Требования: решить задачу без использования методов flat
 * @description Сложность: 3/5
 * @summary Ожидаемый результат: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]
 *
 * @name flatArray
 * @function
 *
 * @param arr{Array<any>} - входной многоуровневый массив
 * @returns {Array<any>}
 *
 * @description Тренировка (необязательно): Определите алгоритмическую сложность вашего решения.
 * @description Подробнее {@link https://tproger.ru/articles/computational-complexity-explained/ как вычислить алгоритмическую сложность}
 */

const flatArray = (arr) => {
  //код функции
};

//тест кейсы
console.log(flatArray([1, 2, [3, 4, [5]]])); // [1, 2, 3, 4, 5]
console.log(flatArray([1, 2, [null, [12, [5]]]])); // [1, 2, null, 12, 5]

/**
 * Задача 6.
 * @description Описание задачи: Напишите функцию, которая сравнивает 2 массива примитивных значений и возвращает true или false, в зависимости от равенства этих массивов.
 * @description Требования: Запрещено использовать методы глобального объекта JSON
 * @description Сложность: 3/5
 * @summary Ожидаемый результат: ([1, 2, 3], [1, 2, 3]) => true
 *
 * @name isEqualArrays
 * @function
 *
 * @param arr1{Array<string | number | boolean | null | undefined>} - первый массив
 * @param arr2{Array<string | number | boolean | null | undefined>} - второй массив
 *
 * @returns {boolean} - true, если массивы равны и false - если нет.
 *
 * @description Тренировка (необязательно): Определите алгоритмическую сложность вашего решения.
 * @description Подробнее {@link https://tproger.ru/articles/computational-complexity-explained/ как вычислить алгоритмическую сложность}
 */

const isEqualArrays = (arr1, arr2) => {
  //код функции
};

console.log(isEqualArrays([1, 2, 3, true, false], [1, 2, 3, 4, 5])); // false
console.log(isEqualArrays([1, 2, 3, 4, 5], ['1', 2, 3, 4, 5])); // false
console.log(isEqualArrays([1, 2, 3], [1, 2, 3])); // true

/**
 * Задача 7.
 * @description Описание задачи: Напишите функцию, которая отфильтрует входной массив, от любых значений, конвертируемых в false.
 * @description Подсказка: конвертируемые к false значения: '', false, 0, null, undefined, NaN.
 * @description Сложность: 1/5
 * @description Дополнительно: Решите задачу несколькими способами.
 * @summary Ожидаемый результат: [1, 2, 3, 0, '', false, null, undefined, NaN, -0] => [1, 2, 3]
 *
 * @name onlyTruthful
 * @function
 *
 * @param arr{Array<any>} - Входной массив
 * @return {Array<any>} Очищенный, от конвертируемых к false значениям, массив.
 *
 * @description Тренировка (необязательно): Определите алгоритмическую сложность вашего решения.
 * @description Подробнее {@link https://tproger.ru/articles/computational-complexity-explained/ как вычислить алгоритмическую сложность}
 */

const onlyTruthful = (arr) => {
  //код функции
};

console.log(onlyTruthful([1, 2, 3, 0, '', false, null, undefined, NaN, -0])); //[1, 2, 3]
