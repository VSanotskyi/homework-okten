const str1 = "hello";
console.log(str1);

const str2 = "owu";
console.log(str2);

const str3 = "com";
console.log(str3);

const str4 = "ua";
console.log(str4);

const num1 = 1;
console.log(num1);

const num2 = 10;
console.log(num2);

const num3 = - 999;
console.log(num3);

const num4 = 123;
console.log(num4);

const num5 = 3.14;
console.log(num5);

const num6 = 2.7;
console.log(num6);

const num7 = 16;
console.log(num7);

const a = true;
console.log(a);

const b = false;
console.log(b);

// task 2
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм
// ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги
// конкатенації)

const firstName = "Vasyl";
const middleName = "Mykhailovych";
const lastName = "Sanotskyi";

const person = `${firstName} ${middleName} ${lastName}`;
console.log(person);

// task 3
// Додаткове для тих хто цікавився prompt`oм
//- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям,
// По-Батькові та роками. та вивести в консоль

const promptFirstName = prompt("enter first name");
const promptMiddleName = prompt("enter middle name");
const promptLastName = prompt("enter Last name");

const promptFullName = promptFirstName + " " + promptMiddleName + " " +
    promptLastName;
console.log(promptFullName);