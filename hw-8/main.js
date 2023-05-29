// - Створити функцію конструктор для об'єктів User з полями id, name, surname
// , email, phone створити пустий масив, наповнити його 10 об'єктами new
// User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

const users = [
    new User(3, "Vasyl", "surname", "Vasyl@email.com", "380-93-000-00-00"),
    new User(5, "Andriy", "surname", "Andriy@email.com", "380-93-000-00-00"),
    new User(1, "Stepan", "surname", "Stepan@email.com", "380-93-000-00-00"),
    new User(4, "Margaryta", "surname", "Margaryta@email.com",
        "380-93-000-00-00"),
    new User(2, "Igor", "surname", "Igor@email.com", "380-93-000-00-00"),
    new User(10, "Dima", "surname", "Dima@email.com", "380-93-000-00-00"),
    new User(9, "Borys", "surname", "Borys@email.com", "380-93-000-00-00"),
    new User(7, "Ganna", "surname", "Ganna@email.com", "380-93-000-00-00"),
    new User(8, "Iryna", "surname", "Iryna@email.com", "380-93-000-00-00"),
    new User(6, "Anastasia", "surname", "Anastasia@email.com",
        "380-93-000-00-00"),
];
console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
// залишивши тільки об'єкти з парними id (filter)

const filterUsers = users.filter(({id}) => id % 2 === 0);
console.log(filterUsers);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id.
// по зростанню (sort)

const sortUsers = users.sort((a, b) => a.id - b.id);
console.log(sortUsers);

// - створити класс для об'єктів Client з полями id, name, surname , email,
// phone, order (поле є масивом зі списком товарів) створити пустий масив,
// наповнити його 10 об'єктами Client

class Client {
    constructor({id, name, surname, email, phone, order = []} = {}) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

const clients = [
    new Client({
        id: 1,
        name: "Stepan",
        surname: "surname",
        email: "Stepan@email.com",
        phone: "380-93-000-00-00",
        order: ["order-1", "order-2"],
    }),
    new Client({
        id: 2,
        name: "Igor",
        surname: "surname",
        email: "Igor@email.com",
        phone: "380-93-000-00-00",
        order: ["order-1", "order-2", "order-3", "order-4"],
    }),
    new Client({
        id: 3,
        name: "Vasyl",
        surname: "surname",
        email: "Vasyl@email.com",
        phone: "380-93-000-00-00",
        order: ["order-1", "order-2", "order-3"],
    }),
    new Client({
        id: 4,
        name: "Margaryta",
        surname: "surname",
        email: "Margaryta@email.com",
        phone: "380-93-000-00-00",
        order: ["order-1", "order-2", "order-3", "order-4", "order-5"],
    }),
    new Client({
        id: 5,
        name: "Andriy",
        surname: "surname",
        email: "Andriy@email.com",
        phone: "380-93-000-00-00",
        order: ["order-1"],
    }),
    new Client({
        id: 6,
        name: "Anastasia",
        surname: "surname",
        email: "Anastasia@email.com",
        phone: "380-93-000-00-00",
        order: ["order-1", "order-2", "order-3"],
    }),
    new Client({
        id: 7,
        name: "Ganna",
        surname: "surname",
        email: "Ganna@email.com",
        phone: "380-93-000-00-00",
        order: ["order-1",
                "order-2",
                "order-3",
                "order-4",
                "order-5",
                "order-6"],
    }),
    new Client({
        id: 8,
        name: "Iryna",
        surname: "surname",
        email: "Iryna@email.com",
        phone: "380-93-000-00-00",
        order: ["order-1", "order-2"],
    }),
    new Client({
        id: 9,
        name: "Borys",
        surname: "surname",
        email: "Borys@email.com",
        phone: "380-93-000-00-00",
        order: ["order-1", "order-2", "order-3", "order-4"],
    }),
    new Client({
        id: 10,
        name: "Dima",
        surname: "surname",
        email: "Dima@email.com",
        phone: "380-93-000-00-00",
        order: ["order-1"],
    }),
];
console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по
// кількості товарів в полі order по зростанню. (sort)

const sortClients = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sortClients);

/*
 - Створити функцію конструктор яка дозволяє створювати об'єкти car,
 з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
 додати в об'єкт функції:
 -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
 -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
 -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
 -- changeYear (newValue) - змінює рік випуску на значення newValue
 -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
 */

function Car(model, brand, graduationYear, maxSpeed, engineCapacity) {
    this.model = model;
    this.brand = brand;
    this.graduationYear = graduationYear;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;

    this.drive = function() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };

    this.info = function() {
        console.log(
            `model - ${this.model}, brand - ${this.brand}, graduation year - ${this.graduationYear}, max speed - ${this.maxSpeed}, engine capacity - ${this.engineCapacity}`);
    };

    this.increaseMaxSpeed = function(newSpeed) {
        this.maxSpeed = newSpeed;
    };

    this.changeYear = function(newValue) {
        this.graduationYear = newValue;
    };

    this.addDriver = function(driver = {}) {
        this.driver = driver;
    };
}

const car = new Car("A6", "AUDI", 2020, 200, 2.9);

car.addDriver({name: ""});
console.log(car);

// - (Те саме, тільки через клас)

const Car1 = {

    constructor(model, brand, graduationYear, maxSpeed, engineCapacity) {
        this.model = model;
        this.brand = brand;
        this.graduationYear = graduationYear;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    },

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    },

    info() {
        console.log(
            `model - ${this.model}, brand - ${this.brand}, graduation year - ${this.graduationYear}, max speed - ${this.maxSpeed}, engine capacity - ${this.engineCapacity}`);
    },

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = newSpeed;
    },

    changeYear(newValue) {
        this.graduationYear = newValue;
    },

    addDriver(driver = {}) {
        this.driver = driver;
    },

};

const car1 = new Car("A6", "AUDI", 2020, 200, 2.9);
car1.addDriver({name: "Driver"});
console.log(car1);

/*
 -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги.
 Створити масив з 10 попелюшок.
 Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік,
 туфелька яку він знайшов.
 За допомоги циклу знайти яка попелюшка повинна бути з принцом.
 Додатково, знайти необхідну попелюшку за допомоги функції масиву find та
 відповідного колбеку
 */

class Princess {
    constructor(name, age, legSize) {
        this.name = name;
        this.age = age;
        this.legSize = legSize;
    }
}

class Prince {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

const princessArray = [
    new Princess("Olivia", 23, 36),
    new Princess("Emma", 26, 37),
    new Princess("Charlotte", 25, 38),
    new Princess("Amelia", 22, 35),
    new Princess("Ava", 27, 39),
    new Princess("Sophia", 26, 40),
    new Princess("Isabella", 24, 41),
    new Princess("Mia", 28, 42),
    new Princess("Evelyn", 25, 43),
    new Princess("Gianna", 27, 43.5),
];

const prince = new Prince("Ajax", 30, 37);

const findPrincess = princessArray.find(
    princess => princess.legSize === prince.shoeSize);

console.log(findPrincess);


/*
 class A {
 constructor() {
 this.a = 1;
 }
 }

 class B extends A {
 constructor() {
 super();
 this.b = 2;
 }
 }

 const b = new B();
 console.log(b);

 class C extends B {
 constructor() {
 super();
 this.c = 3;
 }
 }

 const a = new C();
 console.log(a);
 */


class A {
    constructor(a) {
        this.a = a;
    }

    get foo() {
        console.log(this.a);
    }
}

class B extends A {
    constructor(a, b) {
        super(a);
        this.b = b;
    }
}

class C extends B {
    constructor(a, b, c) {
        super(a, b);
        this.c = c;
    }
}

const a = new C(1, 2, 3);
console.log(a);
a.foo;