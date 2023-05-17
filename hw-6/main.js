// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
const findLength = (str) => console.log(`str length ${str.length}`);
findLength("hello world");
findLength("lorem ipsum");
findLength("javascript is cool");

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
const toUpperCaseStr = (str) => console.log(str.toUpperCase());
toUpperCaseStr("hello world");
toUpperCaseStr("lorem ipsum");
toUpperCaseStr("javascript is cool");

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
const toLowerCaseStr = (str) => console.log(str.toLowerCase());
toLowerCaseStr("HELLO WORLD");
toLowerCaseStr("LOREM IPSUM");
toLowerCaseStr("JAVASCRIPT IS COOL");

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих
// пробілів.

const clearStr = (str) => str.trim();

console.log(clearStr(" dirty string   "));


// - Напишіть функцію stringToArray(str), яка перетворює рядок на
// масив слів. let str = 'Ревуть воли як ясла повні'; let arr =
// arrayToString(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
const stringToArray = (str) => str.split(" ");
const arrayToString = (arr) => arr.join(" ");

console.log(stringToArray("Ревуть воли як ясла повні"));
console.log(arrayToString(["Ревуть", "воли", "як", "ясла", "повні"]));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map
// перетворити всі об'єкти в масиві на стрінгові.

const numToString = (arr) => arr.map(a => a + "");

console.log(numToString([10, 8, - 7, 55, 987, - 1011, 0, 1050, 0]));

// - створити функцію sortNums(direction), яка
// прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в
// залежності від значення аргументу direction. let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21] sortNums(nums,'descending') //
// [21,11,3]  ==========================
const numbers = [11, 21, 3];
const sortNums = (numbers, direction) => {
    if(direction === "ascending") return numbers.sort((a, b) => a - b);

    return numbers.sort((a, b) => b - a);
};

console.log(sortNums(numbers, "ascending"));
console.log(sortNums(numbers, "descending"));

// - є масив let coursesAndDurationArray
// = [ {title: 'JavaScript Complex', monthDuration: 5}, {title: 'Java Complex',
// monthDuration: 6}, {title: 'Python Complex', monthDuration: 6}, {title: 'QA
// Complex', monthDuration: 4}, {title: 'FullStack', monthDuration: 7}, {title:
// 'Frontend', monthDuration: 4} ]; -- відсортувати його за спаданням за
// monthDuration -- відфільтрувати , залишивши тільки курси з тривалістю більше
// 5 місяців -- за допомоги map перетворити кожен елемент на наступний тип
// {id,title,monthDuration} =========================
let coursesAndDurationArray = [
    {title: "JavaScript Complex", monthDuration: 5},
    {title: "Java Complex", monthDuration: 6},
    {title: "Python Complex", monthDuration: 6},
    {title: "QA Complex", monthDuration: 4},
    {title: "FullStack", monthDuration: 7},
    {title: "Frontend", monthDuration: 4},
];

const sortCurses = (courses) => {
    return courses.sort(
        (a, b) => a.monthDuration - b.monthDuration);
};

console.log(sortCurses(coursesAndDurationArray));

// ---

const filterLength = (courses) => courses.filter(a => a.monthDuration > 5);

console.log(filterLength(coursesAndDurationArray));

// ---

const addId = (courses) => courses.map(({title, monthDuration}, index) => {

    return {id: `${index + 1}`, title: title, monthDuration: monthDuration};
});

console.log(addId(coursesAndDurationArray));

// описати колоду карт (від 6 до туза без джокерів) todo
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше

// {
// cardSuit: '', // 'spade', 'diamond','heart', 'clubs' value: '', // '6'-'10',
// 'ace','jack','queen','king','joker' color:'', // 'red','black' }
// =========================


//
// Взяти описану колоду карт, та за допомоги reduce
// упакувати всі карти по "мастях" в об'єкт { spades:[], diamonds:[],
// hearts:[], clubs:[] } =========================


// взяти з arrays.js (який
// лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

const coursesArray = [
    {
        title: "JavaScript Complex",
        monthDuration: 5,
        hourDuration: 909,
        modules: ["html",
                  "css",
                  "js",
                  "mysql",
                  "mongodb",
                  "react",
                  "angular",
                  "aws",
                  "docker",
                  "git",
                  "node.js"],
    },
    {
        title: "Java Complex",
        monthDuration: 6,
        hourDuration: 909,
        modules: ["html",
                  "css",
                  "js",
                  "mysql",
                  "mongodb",
                  "angular",
                  "aws",
                  "docker",
                  "git",
                  "java core",
                  "java advanced"],
    },
    {
        title: "Python Complex",
        monthDuration: 6,
        hourDuration: 909,
        modules: ["html",
                  "css",
                  "js",
                  "mysql",
                  "mongodb",
                  "angular",
                  "aws",
                  "docker",
                  "python core",
                  "python advanced"],
    },
    {
        title: "QA Complex",
        monthDuration: 4,
        hourDuration: 909,
        modules: ["html", "css", "js", "mysql", "mongodb", "git", "QA/QC"],
    },
    {
        title: "FullStack",
        monthDuration: 7,
        hourDuration: 909,
        modules: ["html",
                  "css",
                  "js",
                  "mysql",
                  "mongodb",
                  "react",
                  "angular",
                  "aws",
                  "docker",
                  "git",
                  "node.js",
                  "python",
                  "java"],
    },
    {
        title: "Frontend",
        monthDuration: 4,
        hourDuration: 909,
        modules: ["html",
                  "css",
                  "js",
                  "mysql",
                  "mongodb",
                  "react",
                  "angular",
                  "aws",
                  "docker",
                  "git",
                  "sass"],
    },
];

const findModulesSass = (arr) => {
    return arr.filter(a => a.modules.includes("sass"));
};

console.log(findModulesSass(coursesArray));

const findModulesDocker = (arr) => arr.filter(
    a => a.modules.includes("docker"));

console.log(findModulesDocker(coursesArray));
