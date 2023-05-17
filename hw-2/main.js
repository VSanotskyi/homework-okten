// task 1
const arr1 = [
    1,
    2,
    3,
    4,
    5,
    true,
    "Hello world",
    [1, 2, 3],
    {name: "Vasel"},
    1000,
];

console.log(arr1[0], arr1[1], arr1[2], arr1[3], arr1[4], arr1[5], arr1[6],
    arr1[7], arr1[8], arr1[9]);

// task 2
const books1 = [
    {
        title: "string",
        pageCount: "number",
        genre: "string",
    },
    {
        title: "string",
        pageCount: "number",
        genre: "string",
    },
    {
        title: "string",
        pageCount: "number",
        genre: "string",
    },
];

// task 3
const books2 = [
    {
        title: "string",
        pageCount: "number",
        genre: "string",
        authors: [
            {
                name: "author name",
                age: "author age",
            },
        ],
    },
    {
        title: "string",
        pageCount: "number",
        genre: "string",
        authors: [
            {
                name: "author name",
                age: "author age",
            },
        ],
    },
    {
        title: "string",
        pageCount: "number",
        genre: "string",
        authors: [
            {
                name: "author name",
                age: "author age",
            },
        ],
    },
];

// task 4
const users = [
    {
        name: "Name 1",
        userName: "User name 1",
        password: "password 1",
    },
    {
        name: "Name 2",
        userName: "User name 2",
        password: "password 2",
    },
    {
        name: "Name 3",
        userName: "User name 3",
        password: "password 3",
    },
    {
        name: "Name 4",
        userName: "User name 4",
        password: "password 4",
    },
    {
        name: "Name 5",
        userName: "User name 5",
        password: "password 5",
    },
    {
        name: "Name 6",
        userName: "User name 6",
        password: "password 6",
    },
    {
        name: "Name 7",
        userName: "User name 7",
        password: "password 7",
    },
    {
        name: "Name 8",
        userName: "User name 8",
        password: "password 8",
    },
    {
        name: "Name 9",
        userName: "User name 9",
        password: "password 9",
    },
    {
        name: "Name 10",
        userName: "User name 10",
        password: "password 10",
    },
];

for(const user of users) {
    const {
        password,
    } = user;

    console.log(password);
}

// task 5
let x = - 1;
console.log(x !== 0);

// task 6
let time = 30;

console.log(time <= 15
    ? 1
    : time <= 30
        ? 2
        : time <= 45
            ? 3
            : 4);

// task 6
const day = 30;
console.log(day <= 10
    ? 1
    : day <= 20
        ? 2
        : day <= 31
            ? 3
            : "enter the actual number of the month");

// task 7
dayOfWeek = 4;
switch(dayOfWeek) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday ");
        break;
    case 7:
        console.log("Sunday  ");
        break;
    default:
        console.log("enter the number of the day of the week");
}

// task 8
let a = 20;
let b = 32;

console.log(a > b
    ? "a > b"
    : a < b
        ? "a < b"
        : "a === b");

// task 9
let x1 = undefined;

if(x1 === 0 || x1 === undefined || x1 === null || x1 === "" || x1 === false) {
    x1 = "default";
}

console.log(x1);

// task 10
let coursesAndDurationArray = [
    {
        title: "JavaScript Complex",
        monthDuration: 5,
    },
    {
        title: "Java Complex",
        monthDuration: 6,
    },
    {
        title: "Python Complex",
        monthDuration: 6,
    },
    {
        title: "QA Complex",
        monthDuration: 4,
    },
    {
        title: "FullStack",
        monthDuration: 7,
    },
    {
        title: "Frontend",
        monthDuration: 4,
    },
];

for(const arrayElement of coursesAndDurationArray) {
    const {
        title,
        monthDuration,
    } = arrayElement;

    if(monthDuration >= 5) {
        console.log(`${title} is great`);
    } else {
        console.log(`${title} is bad`);
    }
}