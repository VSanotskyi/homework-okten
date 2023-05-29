/*
 - створити блок,
 - додати йому класи wrap, collapse, alpha, beta
 - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
 - додати цей блок в body.
 - клонувати його повністю, та додати клон в body.
 */

const div = document.createElement("div");
div.classList.add("wrap", "collapse", "alpha", "beta");
div.style.backgroundColor = "silver";
div.style.width = "300px";
div.style.height = "300px";

document.body.appendChild(div);
document.body.appendChild(div.cloneNode(true));

// ---

/*
 - Є масив:
 ['Main','Products','About us','Contacts']
 Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
 */

const arr = ["Main", "Products", "About us", "Contacts"];

const ulTask2 = document.createElement("ul");

for(const el of arr) {
    const li = document.createElement("li");
    li.textContent = el;
    ulTask2.appendChild(li);
}

document.body.appendChild(ulTask2);

// ---

/*
 - Є масив
 let coursesAndDurationArray = [
 {title: 'JavaScript Complex', monthDuration: 5},
 {title: 'Java Complex', monthDuration: 6},
 {title: 'Python Complex', monthDuration: 6},
 {title: 'QA Complex', monthDuration: 4},
 {title: 'FullStack', monthDuration: 7},
 {title: 'Frontend', monthDuration: 4}
 ];
 Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
 Завдання робити через цикли.
 */

let coursesAndDurationArray = [
    {title: "JavaScript Complex", monthDuration: 5},
    {title: "Java Complex", monthDuration: 6},
    {title: "Python Complex", monthDuration: 6},
    {title: "QA Complex", monthDuration: 4},
    {title: "FullStack", monthDuration: 7},
    {title: "Frontend", monthDuration: 4},
];

const ulTask3 = document.createElement("ul");
ulTask3.style.listStyle = "none";
ulTask3.style.display = "flex";
ulTask3.style.flexDirection = "column";
ulTask3.style.gap = "10px";

for(const el of coursesAndDurationArray) {
    const {title, monthDuration} = el;

    const li = document.createElement("li");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");

    h2.textContent = `Курс: ${title}`;
    p.innerText = `Тривалість: ${monthDuration}`;
    li.style.padding = "20px";
    li.style.border = "1px solid black";
    li.style.backgroundColor = getRandomHexColor();

    li.append(h2, p);
    ulTask3.appendChild(li);
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)
        .padStart(6, 0)}`;
}

document.body.append(ulTask3);

// ---

/*
 - Є масив
 let coursesAndDurationArray = [
 {title: 'JavaScript Complex', monthDuration: 5},
 {title: 'Java Complex', monthDuration: 6},
 {title: 'Python Complex', monthDuration: 6},
 {title: 'QA Complex', monthDuration: 4},
 {title: 'FullStack', monthDuration: 7},
 {title: 'Frontend', monthDuration: 4}
 ];


 За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
 в якому буде <h1 class='heading'>  з title  елементу, та
 <p class='description'> з monthDuration елементу.
 Завдання робити через цикли.
 */

const containerTask4 = document.createElement("div");
div.classList.add("container-task-4");

for(const el of coursesAndDurationArray) {
    const {title, monthDuration} = el;

    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");

    div.classList.add("item");
    h2.classList.add("heading");
    p.classList.add("description");

    h2.textContent = title;
    p.innerText = monthDuration;

    div.append(h2, p);
    containerTask4.appendChild(div);
}

document.body.appendChild(containerTask4);

// ---
/*

 - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де
 він знаходиться) Проітерувати його, створиши для кожного об'єкту  масиву
 <div class='member'> та наповнити його данними з об'єкту. Якщо людською
 мовою: під кожного члена родини зробити блок та наповнити його інформацією
 з цього об'єкту
 */
let simpsons = [
    {
        name: "Bart",
        surname: "Simpson",
        age: 10,
        info: "Бартолом'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.",
        photo: "https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png",
    },
    {
        name: "Homer",
        surname: "Simpson",
        age: 40,
        info: "Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.",
        photo: "http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
    },
    {
        name: "Marge",
        surname: "Simpson",
        age: 38,
        info: "Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.",
        photo: "https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png",
    },
    {
        name: "Lisa",
        surname: "Simpson",
        age: 9,
        info: "Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.",
        photo: "https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png",
    },
    {
        name: "Maggie",
        surname: "Simpson",
        age: 1,
        info: "Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.",
        photo: "https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png",
    },
];

const containerTask5 = document.createElement("div");
containerTask5.classList.add("containerTask5");

for(const simpson of simpsons) {
    const {name, age, surname, info, photo} = simpson;

    const div = document.createElement("div");
    const title = document.createElement("h2");
    const infoText = document.createElement("p");
    const img = document.createElement("img");

    div.classList.add("simpsons-container");

    title.innerText = `${name} ${surname}, ${age}`;
    infoText.innerText = info;
    img.src = photo;
    img.width = 200;

    div.append(title, img, infoText);
    containerTask5.appendChild(div);
}

document.body.appendChild(containerTask5);

// ---

/*
 Цикл в циклі
 - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте
 де він знаходиться)
 Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких
 будуть зберігатись значення окремих властивостей, для властивості modules
 зробити список з елементами Приклад структири знаходиться у файлі example.png
 який лежить в папці з поточним фйлом
 */

let coursesArray = [
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

const containerTask6 = document.createElement("div");

containerTask6.style.border = "1px solid black";

for(const el of coursesArray) {
    const {title, monthDuration, hourDuration, modules} = el;

    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const pMonthDuration = document.createElement("p");
    const pHourDuration = document.createElement("p");
    const listTitle = document.createElement("p");
    const ul = document.createElement("ul");

    h2.innerText = `Курс: ${title}`;
    pMonthDuration.innerText = `Тривалість: ${monthDuration}`;
    pHourDuration.innerText = `Години: ${hourDuration}`;
    listTitle.innerText = "Модулі:";

    for(const module of modules) {
        const li = document.createElement("li");

        li.innerText = module;
        li.style.border = `1px solid ${getRandomHexColor()}`;
        li.style.padding = "10px";

        ul.append(li);
    }

    div.append(h2, pMonthDuration, pHourDuration, listTitle, ul);
    containerTask6.appendChild(div);
}

document.body.appendChild(containerTask6);