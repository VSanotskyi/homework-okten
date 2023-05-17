//task 1
for(let i = 0; i < 10; i += 1) {
    document.write(
        `<div class="box" style="background-color: #${Math.floor(
            Math.random() * 16777215)
            .toString(16)
            .padStart(6, 0)};"> 
            Lorem ipsum dolor sit amet.
        </div>`);
}

// task 2
for(let i = 0; i < 10; i += 1) {
    document.write(
        `<div class="box" > 
           index: ${i}. Lorem ipsum dolor sit amet.

        </div>`);
}

// task 3
let a = 0;
while(a < 20) {
    a += 1;
    document.write(`<h1 class="title">Title</h1>`);
}

// task 4
let b = 0;
while(b < 20) {
    b += 1;
    document.write(`<h1 class="title">Title. Index - ${b}</h1>`);
}

//task 5
const listOfItems = [
    "html", "css", "javascript", "mysql", "mongodb", "react", "angular",
    "node.js",
];

document.write(`<h2 class="list-title">list of items</h2>
                <ul class="list">`);
for(const listOfItem of listOfItems) {
    document.write(`<li>${listOfItem}</li>`);
}

document.write("</ul>");

// task 6
let products = [
    {
        title: "milk",
        price: 22,
        image: "https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg",
    },
    {
        title: "juice",
        price: 27,
        image: "https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg",
    },
    {
        title: "tomato",
        price: 47,
        image: "https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74",
    },
    {
        title: "tea",
        price: 15,
        image: "https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png",
    },
];

for(const product of products) {
    const {
        title,
        price,
        image,
    } = product;

    document.write(`<div class="product-card">
        <h3 class="product-title">${title}. Price - ${price}</h3>
        <img src="${image}" alt="product image" class="product-image">
</div>`);
}

// task 7

let users = [
    {
        name: "vasya",
        age: 31,
        status: false,
    },
    {
        name: "petya",
        age: 30,
        status: true,
    },
    {
        name: "kolya",
        age: 29,
        status: true,
    },
    {
        name: "olya",
        age: 28,
        status: false,
    },
    {
        name: "max",
        age: 30,
        status: true,
    },
    {
        name: "anya",
        age: 31,
        status: false,
    },
    {
        name: "oleg",
        age: 28,
        status: false,
    },
    {
        name: "andrey",
        age: 29,
        status: true,
    },
    {
        name: "masha",
        age: 30,
        status: true,
    },
    {
        name: "olya",
        age: 31,
        status: false,
    },
    {
        name: "max",
        age: 31,
        status: true,
    },
];

for(const user of users) {
    const {
        name,
        status,
    } = user;


    if(status) {
        console.log(`${name} with status: ${status}`);
    }
}

for(const user of users) {
    const {
        name,
        status,
    } = user;


    if(!status) {
        console.log(`${name} with status: ${status}`);
    }
}

for(const user of users) {
    const {
        name,
        age,
    } = user;


    if(age > 30) {
        console.log(`${name}: age > 30 `);
    }
}