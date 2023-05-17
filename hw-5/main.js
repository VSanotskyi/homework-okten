// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!

// - створити функцію яка обчислює та повертає площу прямокутника зі
// сторонами а і б
const foo1 = (a, b) => a * b;

// - створити функцію яка обчислює та повертає площу кола з радіусом r
const calculateCircumference = (radius) => (2 * Math.PI * radius).toFixed(2);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та
// радіутом r
const areaOfTheCylinder = (h, r) => (2 * Math.PI * h * r).toFixed(3);

// - створити функцію яка приймає масив та виводить кожен його елемент
const arr = [111, false, "Hello", 111];
const foo2 = (arr) => {
    for(const arrElement of arr) {
        console.log(arrElement);
    }
};

foo2(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через
// аргумент
const markupP = (text) => {
    document.write(`<p class="text">${text}</p>`);
};

markupP("Hello, I am 'p'");

// - створити функцію яка створює ul з трьома елементами li.Текст li задати
// через аргумент всім однаковий
const markupList = (text) => {
    document.write("<ul style='list-style: none'>");
    document.write(`<li class="item">${text}</li>`);
    document.write(`<li class="item">${text}</li>`);
    document.write(`<li class="item">${text}</li>`);
    document.write("</ul>");
};

markupList("Hello, from js :)");

// - створити функцію яка створює ul з трьома елементами li. Текст li задати
// через аргумент всім однаковий. Кількість li визначається другим
// аргументом, який є числовим (тут використовувати цикл)
const markupList1 = (text, param) => {
    document.write("<ul style='list-style: none'>");
    for(let i = 0; i < param; i += 1) {
        document.write(`<li class="item">${text}</li>`);
    }
    document.write("</ul>");
};

markupList1("Hello, from js :)", 3);

// - створити функцію яка приймає масив примітивних елементів
// (числа,стрінги,булеві), та будує для них список
const foo3 = (arr) => {
    document.write("<ul style='list-style-type: lower-alpha'>");
    for(const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`);
    }
    document.write("</ul>");
};

foo3([33, 44, 55, 66, 77]);

// - створити функцію яка приймає масив об'єктів з наступними полями
// id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const arr1 = [
    {id: 1, name: "Pavlo", age: 25},
    {id: 2, name: "Orest", age: 31},
    {id: 3, name: "Andriy", age: 27},
];

const foo4 = (arr) => {
    document.write("<div style='display: flex'>");
    for(const {id, name, age} of arr) {
        document.write(`<div style="margin: 10px; 
                                    background-color: darkgray; 
                                    padding: 20px">
            <p>User Id: ${id}</p>
            <h2>${name}</h2>
            <p> age: ${age}</p>
        </div>`);
    }
    document.write("</div>");
};

foo4(arr1);

// - створити функцію яка повертає найменьше число з масиву
const arr3 = [3, 4, 5, 11, 6];
const minNumber = (arr) => arr.sort((a, b) => a - b)[0];

console.log(minNumber(arr3));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення
// елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
const arr4 = [1, 2, 10];
/*const sum = (arr) => arr.reduce((a, b) => a + b);*/
const sum = (arr) => {
    let sum = 0;

    for(const arrElement of arr) {
        sum += arrElement;
    }

    return sum;
};

console.log(sum(arr4));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у
// відаовідних індексах Приклад swap([11,22,33,44],0,1) //=> [22,11,33,44]
const swap = (arr, el1, el2) => {
    return arr.map(
        el => arr[el1] === el ? arr[el2] : arr[el2] === el ? arr[el1] : el);
};

console.log(swap([11, 22, 33, 44], 0, 1));

// - Написати функцію обміну валюти
// exchange(sumUAH,currencyValues,exchangeCurrency) Приклад
// exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD')
// // => 250
const exchange = (sum, arr, a) => {
    for(const {currency, value} of arr) {
        if(currency.toLowerCase() === a.toLowerCase()) return sum / value;
    }

    return "currency is missing";
};

console.log(exchange(10000,
    [{currency: "USD", value: 40}, {currency: "EUR", value: 42}], "USD"));


console.log("hello\tworld");

const foo = (numbers) => {
    const arr1 = [];
    const arr2 = [];
    for(const number of numbers) {
        if(number) arr1[arr1.length] = number;
        if(!number) arr2[arr2.length] = number;
    }

    return [...arr1, ...arr2];
};

console.log(foo([0, 1, 33, 24, 6, 0, 43]));