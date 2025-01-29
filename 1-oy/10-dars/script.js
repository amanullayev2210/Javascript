let res = "salom";
let str = "alik"
console.log(res.indexOf("l"));
console.log(res.lastIndexOf("l"));
console.log(res.at(1));
console.log(res[res.length - 1]);
console.log(res.charAt(1));
console.log(res + str);

let res2 = "Sardorbek";

console.log(res.substring(2, 5));
console.log(res.substr(2, 5));
let res3 = "Sadorbek";
console.log(res.startsWith("dor"));

let ar2 = new Array(1, 2);
let arr = new Array(9, "olma"); // JS build in obj
console.log(arr.length);
console.log([] == 0);
console.log(Array.isArray([]));
console.log();
let ar = ["olma", "banan", "kivi", "anjir", "nok"];

for (i = 0; i < ar.length; i++) {
    console.log(ar[i]);
}

for (value of ar) {
  console.log(value);
}

for (index in ar) {
  console.log(index);
}

ar.forEach((item) => {
  console.log(item);
});

console.log(ar.length);
console.log(ar.at(-1));

let array = [1, 2, 3, 4, 5];
array.shift();
console.log(array);

// home work  ===========
console.log("home work start");
// Home work - Arrayni metodlarini o'rganib kelish va savol javob

arr = ["Olma", "nok", "shoptoli", "kivy"]

console.log(arr.length);
console.log(arr.push(5));
console.log(arr.shift());
console.log(arr.unshift());
console.log(arr.concat(3));




