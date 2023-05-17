// task 1
function calc(a, b) {
    return a * b;
}

// task 2
function calculateCircumference(radius) {
    return (
        2 * Math.PI * radius
    ).toFixed(2);
}

// task 3
function areaOfTheCylinder(h, r) {
    return (
        2 * Math.PI * h * r
    ).toFixed(3);
}

// task 4
const arr = [11, true, "Hello"];

function foo(arr) {
    for(const arrElement of arr) {
        console.log(arrElement);
    }
}

foo(arr);

// task 5
function markupP(text) {
    document.write(`<p class="text">${text}</p>`);
}

markupP("Hello, I am function markup 'p' ");

// task 6
function markupUl(text) {
    document.write(`<ul class="list">
            <li class="item">${text}</li>
            <li class="item">${text}</li>
            <li class="item">${text}</li>
        </ul>`);
}

markupUl("Hello, we are from function markup ul");

// task 7;
const listEl = document.createElement("ul");
listEl.classList.add("list-1");

function markupUlEl(text) {
    let iter = 1;

    for(let i = 0; i < 3; i += 1) {
        const itemEl = document.createElement("li");
        listEl.append(itemEl);
        listEl.style.fontSize = "24px";
        itemEl.textContent = `${text}, iter: ${iter}`;

        iter += 1;
    }
}

markupUlEl("Hello");

document.body.append(listEl);

// task 8
const array1 = [1234, "Hello", true];

function createList(arr) {
    document.write("<ul class='list'>");
    for(const arrElement of arr) {
        document.write(`<li class="item">${arrElement}</li>`);
    }
    document.write("</ul>");
}

createList(array1);

// task 9
const arr1 = [
    {id: 1, name: "Vasyl", age: 30},
    {id: 2, name: "Petro", age: 27},
    {id: 3, name: "Alex", age: 25},
    {id: 4, name: "Olha", age: 32},
];

function fnA(arr) {

    for(const {id, name, age} of arr) {
        console.log("id:", id);
        console.log("Name:", name);
        console.log("age:", age);
    }
}

fnA(arr1);

// task 10
const arr2 = [34, 87, 23, 98, 87];

function getSmallestNumber(arr) {
    let smallNum = arr[0];

    for(let i = 0; i < arr.length; i += 1) {
        if(arr[i] < smallNum) {
            smallNum = arr[i];
        }
    }

    return smallNum;
}

console.log(getSmallestNumber(arr2));

// task 11
const arr3 = [1, 2, 10];

function sumArr(arr) {
    let result = 0;

    for(const arrElement of arr) {
        result += arrElement;
    }

    return result;
}

console.log(sumArr(arr3));

// task 12
function swap(arr, a, b) {
    const a1 = arr[a];
    arr[a] = arr[b];
    arr[b] = a1;

    return arr;
}

console.log(swap([1, 2, 3, 4, 5], 0, 1));

//task 13
function exchange(sum, arr, a) {
    for(const arrElement of arr) {
        const {currency, value} = arrElement;

        if(currency.toUpperCase() === a.toUpperCase()) {
            return sum / value;
        }
    }
    return "currency is missing";
}

console.log(exchange(10000,
    [{currency: "USD", value: 40}, {currency: "EUR", value: 42}], "USD"));