let array = ["string", 1, true, 90, 80, "alguem"];
console.log(array);

// forEach
array.forEach(function(item, index){console.log(item, index)});

// push
array.push("nome");
console.log(array);

// pop
array.pop();
console.log(array);

// shift
array.shift();
console.log(array);

// unshift
array.unshift(9);
console.log(array);

// indexOf
console.log(array.indexOf(true));

// splice
array.splice(0, 2);
console.log(array);

// slice
let novoArray = array.slice(2, 4);
console.log(novoArray);

// objetos
let object = {string: "string", number: 9, boolean: false, array: ["alguem", 2, true], objectInterno: {objectInterno: "objeto Interno"}};
console.log(object.boolean);

var string = object.string;
console.log(string);

var {string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);

// estruturas condi