//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {
    if (n === ~~n) {
        return true
    }
    else {
        return false
    }
}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {
    const arr = []
    for (let i = 2; i < 21; i++) {
        if (i % 2 == 0)
        {
            arr.push(i)
        }
        
    }
    return arr
}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {
    let sum = 0;
    for (let i = 0; i < n + 1; i++) {
        sum += i;
    }
    return sum
}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n, sum = 0) {
    if (n > 0) {
        return recSumTo(n - 1, sum + n); // Рекурсивный вызов с обновленным значением sum
    } else {
        return sum;
    }
}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {
    if (n < 0) {
        return "Факториал определен только для неотрицательных чисел.";
    }
    let fak = 1;
    for (let i = 1; i < n + 1; i++) {
        fak *= i
    }
    return fak
}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {
    if (n <= 0) {
        return false;
    }
    return (n & (n - 1)) === 0;
}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {
    if (n <= 0) {
        return "Введите положительное целое число для нахождения числа Фибоначчи.";
    }
    else if (n === 1) {
        return 1;
    }
    else if (n === 2) {
        return 1;
    }
    else {
        let a = 1;
        let b = 1;
        let result;

        for (let i = 3; i <= n; i++) {
            result = a + b;
            a = b;
            b = result;
        }

        return result;
    }
}

/** Напишите функцию, которая принимает начальное значение и функцию операции
 * и возвращает функцию - выполняющую эту операцию.
 * Если функция операции (operatorFn) не задана - по умолчанию всегда
 * возвращается начальное значение (initialValue)
 * @param initialValue
 * @param operatorFn - (storedValue, newValue) => {operation}
 * @example
 * const sumFn =  getOperationFn(10, (a,b) => a + b);
 * console.log(sumFn(5)) - 15
 * console.log(sumFn(3)) - 18
 */
function getOperationFn(initialValue, operatorFn = (a, b) => a) {
    let storedValue = initialValue;

    return function (newValue) {
        storedValue = operatorFn(storedValue, newValue);
        return storedValue;
    };
}

/**
 * Напишите функцию создания генератора арифметической последовательности.
 * При ее вызове, она возвращает новую функцию генератор - generator().
 * Каждый вызов функции генератора возвращает следующий элемент последовательности.
 * Если начальное значение не передано, то оно равно 0.
 * Если шаг не указан, то по дефолту он равен 1.
 * Генераторов можно создать сколько угодно - они все независимые.
 *
 * @param {number} start - число с которого начинается последовательность
 * @param {number} step  - число шаг последовательности
 * @example
 * const generator = sequence(5, 2);
 * console.log(generator()); // 5
 * console.log(generator()); // 7
 * console.log(generator()); // 9
 */
function sequence(start = 0, step = 1) {
    let currentValue = start;

    function generator() {
        const value = currentValue;
        currentValue += step;
        return value;
    }

    return generator;
}

/**
 * Напишите функцию deepEqual, которая принимает два значения
 * и возвращает true только в том случае, если они имеют одинаковое значение
 * или являются объектами с одинаковыми свойствами,
 * значения которых также равны при сравнении с рекурсивным вызовом deepEqual.
 * Учитывать специфичные объекты(такие как Date, RegExp итп) не обязательно
 *
 * @param {object} firstObject - первый объект
 * @param {object} secondObject - второй объект
 * @returns {boolean} - true если объекты равны(по содержанию) иначе false
 * @example
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 33], text: 'text'}) // true
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 3], text: 'text2'}) // false
 */
function deepEqual(firstObject, secondObject) {
    if (firstObject !== firstObject && secondObject !== secondObject) {
        return true; // Оба значения - NaN
    }

    if (firstObject === secondObject) {
        // Обработка случая, когда значения равны (включая NaN)
        return true;
    }

    if (
        firstObject === null ||
        typeof firstObject !== 'object' ||
        secondObject === null ||
        typeof secondObject !== 'object'
    ) {
        return false;
    }

    const keysFirst = Object.keys(firstObject);
    const keysSecond = Object.keys(secondObject);

    if (keysFirst.length !== keysSecond.length) {
        return false;
    }

    for (let key of keysFirst) {
        if (!keysSecond.includes(key) || !deepEqual(firstObject[key], secondObject[key])) {
            return false;
        }
    }

    return true;
}

function dummyFunction() {
    // Функция-заглушка для примера
}

module.exports = {
    isInteger,
    even,
    sumTo,
    recSumTo,
    factorial,
    isBinary,
    fibonacci,
    getOperationFn,
    sequence,
    deepEqual,
};
