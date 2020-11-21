/* EcmaScrpit 6 Exercies */

//Arrow Functions
const text = "Hello i am kubilay";
let splitTexts = text => {
    return text.split(" ");
}
console.log(splitTexts(text));

const names = ["kubilay", "melike", "idris", "dönüş"];

let writeNames = (names) => {
    names.map(name => console.log(name));
}
writeNames(names);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Example 1
let getEvenNumbers = numbers.filter(number => number % 2 == 0);
console.log(getEvenNumbers);

// Example 2
let getOddNumber = numbers.filter(number => number % 2 == 1);
console.log(getOddNumber);


//This Keyword
let list = {
    category: "phone",
    names: ['iphone 8', 'iphone 7', 'iphone X'],
    call: function () {
        this.names.map((name) => {
            console.log(`${this.category} ${name} `)

        });
    }
}
list.call();

// Spread Operator
// Example 1
function getTotal(a, b, c) {
    return a + b + c;
}
let arr1 = [10, 20, 30];
console.log(getTotal(...arr1))

//Example 2
let cars_1 = ["Bmw", "Mercedes", "Opel"];
let cars_2 = ["Fiat", "Ford"];
cars_1.push(...cars_2);
console.log(cars_1);

//Rest Parameters

//Example 1
function sumES6(...arr) {
    let result = 0;
    arr.forEach(item => result += item);
    return result;
}
console.log(sumES6(10, 20, 30));

//Example 2
function isDriver(...years) {
    years.forEach(year => console.log(2018 - year >= 18));
}
isDriver(1999, 2001, 2005, 1993, 1988);

//Desctructuring;

[a, b, ...rest] = [10, 20, 5, 6, 7, 8, 9];
console.log(a);
console.log(b);
console.log(...rest);

//Array Desctructuring
const appConfig = ['localhost', '8080', '3000'];
const [server, port, timeout] = appConfig;
console.log(server, port, timeout);

//Object Descturing
const objConfig = {
    server: 'localhost',
    port: '8080',
    timeour: 900
}
const { server1, port1, timeout1 } = objConfig;
console.log(server, port, timeout);

const days =['Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday'];
const [,,wed,,fri]=days;
console.log(wed, fri);

// Arrays

const products =[
    {name :"Phone",price:4000},
    {name :"Laptop",price:7000},
    {name :"Keyboard",price:200}
];
console.log(products.find(p => p.name ==="Phone"));

//Maps

let val;

const numbers_1 = new Map();
numbers_1.set(1,'one');
numbers_1.set(2,'two');
numbers_1.set(3,'three');
numbers_1.set(4,'four');
numbers_1.set(5,'five');
numbers_1.set(6,'six');

val = numbers_1;
val=numbers_1.get(1);
val=numbers_1.has(2);
val=numbers_1.delete(2);
val=numbers_1.has(2);
console.log(val);

numbers_1.forEach(function(key,value){
    console.log(key+' - '+value);
});

var first = new Map([
    [1,'one'],
    [2,'two'],
    [3,'three'],
]);

var second = new Map([
    [4,'four'],
    [5,'five'],
    [6,'six'],
    [7,'seven']
])

var merged = new Map([...first,...second]);
console.log(merged);


//Class
class Person {
    constructor(name,surname,age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    getFullName(){
        console.log(`${this.name}  ${this.surname}`);
    }

    static sayHello(){
        console.log("Helloooo");
    }
}

let person = new Person("kubilay","ÇİÇEK",27);
person.getFullName();
Person.sayHello();