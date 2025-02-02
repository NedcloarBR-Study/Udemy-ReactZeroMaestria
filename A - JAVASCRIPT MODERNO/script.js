// 1 - var, let e const

var x = 10;
var y = 15;

if(y > 10) {
  var x = 5;
  console.log(x);
}
console.log(x);

let a = 10;
let b = 15;

if(b > 10) {
  let b = 5;
  console.log(b);
}
console.log(b);

let i = 100;

for(let i = 0; i< 5; i++) {
  console.log(i);
}

console.log(i);

function logName() {
  let name = "Matheus";
  console.log(name);
}

const name = "Pedro";

logName();

console.log(name)

// 2 - arrow function

const sum = function sum(a, b) {
  return a + b;
}

const arrowSum = (a, b) => a + b;


console.log(sum(5, 5));
console.log(arrowSum(5, 5));

const greeting = (name)=> {
  if(name) {
    return `Olá, ${name}!`;
  }
  return `Olá!`;
}

console.log(greeting("Matheus"));
console.log(greeting());

const testeArrow = () => console.log("testou!");

const user = {
  name: "Matheus",
  sayUserName() {
    var self = this
    setTimeout(function() {
      console.log(self);
      console.log(self.name);
    }, 500)
  },
  sayUserNameArrow() {
    setTimeout(() => {
      console.log(this);
      console.log(this.name);
    }, 500)
  }
}

// user.sayUserName();
// user.sayUserNameArrow();

// 3 - filter

const arr = [1, 2, 3, 4, 5];

console.log(arr);

const highNumbers = arr.filter((number) => {
  if(n >= 3) {
    return number;
  }
});

console.log(highNumbers);

const users = [
  { name: "Matheus", available: true },
  { name: "Pedro", available: false },
  { name: "João", available: false },
  { name: "Marcos", available: true },
]

const availableUsers = users.filter((user) => user.available);
const notAvailableUsers = users.filter((user) => !user.available);

console.log(availableUsers);
console.log(notAvailableUsers);

// 4 - map

const products = [
  { name: "Camisa", price: 10.99, category: "Roupas" },
  { name: "Chaleira Elétrica", price: 49.99, category: "Eletro" },
  { name: "Fogão", price: 400, category: "Eletro" },
  { name: "Calça jeans", price: 50.99, category: "Roupas" },
]

products.map((product) => {
  if(product.category === "Roupas") {
    product.onSale = true;
  }
});

console.log(products);


// 5 - template literals

const userName = "Matheus";
const age = 30;

console.log(`O nome do usuário é ${userName} e ele tem ${age} anos.`);
console.log("O nome do usuário é " + userName + " e ele tem " + age + " anos.");


// 6 - destructuring
const fruits = ["Maça", "Laranja", "Mamão"];
const [f1, f2, f3] = fruits;
console.log(f1)
console.log(f2)
console.log(f3)

const productDetails = {
  name: "Mouse",
  price: 39.99,
  category: "Periféricos",
  color: "Cinza"
}
const { name: productName, price, category: productCategory, color } = productDetails;
console.log(`O nome do produto é ${productName}, ele custa R$${price}, é da categoria ${productCategory} e é da cor ${color}.`);