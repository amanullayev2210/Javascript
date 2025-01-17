// fn decloration

function gpa() {
    console.log("salom");
}
gpa();

// Fn ex
const war = function () {};

// Fn Arrow

const a = 5;

let test = (a, b = "") => {
  console.log(a, b);
};
test(5);

// Object
let obj2 = {
  name: "Sardorbek",
  job: "IT",
  work: {
    age: 20,
  },
};

console.log(obj2.work);
console.log(obj2.work.age);

let obj3 = new Object();
console.log(obj2, obj3);

// Obj added
let user = {
  name: "Toshpo'lat",
  age: 30,
};
console.log(user);
user.job = "AI"
console.log(user);

// Obj update
let user2 = {
  name: "Toshpo'lat",
  age: 30,
};
user.name2 = "Gulmat";
console.log(user2);

// Obj delete
let user3 = {
  name: "Toshpo'lat",
  age: 30,
};
delete user3.age;
console.log(user3);

let user4 = {
  name: "Toshpo'lat",
  age: 30,
};

Object.seal(user4);
Object.freeze(user4);

user.name4 = "Gulmat";
console.log(user4);

let user5 = {
  name: "Toshpo'lat",
  age: 30,
  "full name": "Toshpo'lat Po'lativich Po'lat o'g'li",
};

let name = "age";
let age = "name";

console.log(user[name]); // tp
console.log(user[age]); // 30
console.log(user.name); // tp
console.log(user[age]); // 30
console.log(user["full name"]); // tppo'

let obj4 = {
  name: "sardorbek",
};
let obj5 = obj4;

obj5.age = "30";

let obj6 = {
  name: "sardorbek",
};

let user6 = {};

user.age = "40";

Object.assign(user, obj5);

console.log(obj5, user);

let obj7 = {
  name: "sardorbek",
};

const obj8 = structuredClone(obj7);

obj8.age = 40;

console.log(obj8, obj7);

// Home work start
console.log("Home work start");

// 1-for (let in obj) {} valuesini console.log ga chiqarish

let obj = {
    name: "Sardorbek",
  };
  
for (let key in obj) {
    console.log(obj[key]);      
}

// 2-object yaratish added, update, delete

object = {
    name : "Anvar",
    age: "16"

}

// Added
object.hobby = "computer"

// update
object.age = "17"

// delete
delete object.age;

// 3- isEmpty fn ochiladi va obj ning ichida data bo'lsa false aks holda true

function isEmpty (){
    // ...
};

// 4- kimni raqami katta bo'lsa o'sha chiqishi kerak

let salaries = {
    john: 100,
    Ann: 160,
    Pete: 130,
}

for (let i in salaries) {
    if (salaries[i] === 160) {
        console.log(`Eng katta raqam ${i}ga teng`);
    }
}

// 5- raqamli valuelarni 2ga ko'paytirish

let salaries2 = {
    john: 100,
    Ann: 160,
    Pete: 130,
}

for (let c in salaries2) {
    console.log(salaries2[c] * 2);      
}