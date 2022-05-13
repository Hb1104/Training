// Exercícios sobre objetos: 

// let fruits = {name:"banana",color:"yellow", size:"medium"}


// console.log(fruits);
// console.log(fruits["name"]);
// console.log(fruits.color);
// console.log(fruits.size);

let car = new Object(); 

car.name = ("BMW");

car["color"] = ("Blue");

car.year = "2017";


console.log(car.name, car.color, car.year);

console.log("---------------------------------")

function newCar (a1, a2, a3 ,a4 ,a5) {    
    return {
        name: a1,
        color: a2,
        year: a3,
        price: a4,
        tax: a5,
        total: function () {
            return (a4 + a5);
        },
        showInfo: function () {
            console.log("Info Car: " + a1, a2, a3);
        }
    } 
}   
car = newCar("Porche", "Red", "2018", 53000, 4600);

car.showInfo();

console.log("Total Price: " + car.total());



console.log("---------------------------------");

let people = [
    {
        name: "Otavio",
        age: 25
    },

    {
        name: "Lucas",
        age: 33
    },

    {
        name: "Natan",
        age: 56
    }
];

let newPerson = (a,b) => {
    return {
        name: a,
        age: b
    }
};

people[3] = newPerson("João", 78);

let people2 = [
    newPerson("Maria", 24),
    newPerson("Gustavo", 32),
    newPerson("Kaila", 44)
];

for (let j in people2) {
    people.push(people2[j]);
};

console.log(people);

let infoPeople = function () {
    for (let i of people) {
        console.log(i.name + " - " + i.age);
    }
};

infoPeople();

function totalAge () {
    let totAge = 0;
    for (let k of people) {
        totAge += k.age;
    }
    return totAge;
};

console.log("Total Age: " + totalAge());

console.log("---------------------------------");