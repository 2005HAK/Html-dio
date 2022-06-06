let obj = {};

console.log(typeof(obj));

obj.name = "Pedrinho";

console.log(obj);

obj.age = 20;

console.log(obj);

console.log(Object.values(obj));

console.log(Object.keys(obj));

let person = {
    name: "Juninho",
    age: 20,
    adress: "Rua 3"    
}

console.log(person);

console.log(person.name);

console.log(person["name"]);

person["numberOfSiblings"] = 3;

console.log(person);

let mom = "nameOfMom";

person[mom] = "Maria";

console.log(person);