function sayHi() {
  console.log("salom");
}

let user2 = {
  name: "Sardorbek",
};

let obj = user2;

user2 = null;

console.log(user2);
console.log(obj);

let User3 = {
  ism: "Toshmat",
  age: 30,
  sayHi: function sayHi() {
    console.log(this.ism);
    // return ism;
    console.log(this.ism);
  },
};

let obj2 = User3;

User3 = null;

obj2.sayHi();

// // ===========================

let lname = "Gulmat";

function Gpa(params) {
  return params;
}

let students = {
  lname,
  age: 50,
  Gpa,
};
console.log(students.Gpa("Alik"));

// // ==============

function isEmpty(prop) {
  return prop;
}

let schedulle = {};

console.log(isEmpty(schedulle));

schedulle["8:30"] = "get up";

console.log(isEmpty(schedulle));

// // =============

let user3= {
  name: "John",
  age: 30,
};

user3.sayHi = function () {
  console.log("Hello!");
};

user3.sayHi();

// // ================

let user4 = {
  name: "John",
  age: 30,
  sayHi() {
    return this.name;
  },
};

console.log(user4.sayHi());

let user5 = {
  name: "John",
  age: 30,

  sayHi() {
    console.log(this.name);
  },
};

let admin = user5;
user5 = null;

admin.sayHi();

let user6 = {
  name: "Sardorbek",
  Fn: () => {
    console.log(this);
  },
};
user6.Fn();

let obj3 = {
  name: "Sardorbek",
  Fns: function () {
    console.log(this);
  },
};

obj3.Fns();

function user(prop) {
  this.name = prop;
}

console.log(user());
console.log(new user("Sardorbek").name);

let user7 = {
    name: "Kamron",
    age: 16,
    work: "AyTi",
    sayHi() {
      name: "ali";
    },
  };
  
  let { name: newName, age, work} = user7;
  
  console.log(newName);
  
  for (value in user7) {
    console.log(user7[value]);
  }
  
  function isEmpty(prop) {
    return prop;
  }
  
  let schedule = {};
  
  console.log(isEmpty(schedule)); // true
  
  schedule.name = "get";
  
  console.log(isEmpty(schedule)); // false
  

console.log("home work start");
// Home work - darsda utilganlarni takrorlash, savol va javob.