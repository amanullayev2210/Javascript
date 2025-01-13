// !== > < >= <= tenglik belgilar

let d = 5;
if (d === 5) console.log("teng"); // teng

switch (d) {
  case 5:
    console.log("teng");
    break;
  case 4:
    console.log("4 kichik");
    break;
  case 3:
    console.log("3 kichik");
    break;
  default:
    console.log("Default ");
    break;
}

// Loops

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

let c = 0

++c // pre-incroment
c++ // post-incroment

let k = 1;
console.log(k++);
console.log(k); //

let l = 1;
for (let l = 1; l <= 10; l++) {
  //   if (i % 2 === 0) {
  //     break
  //   }

//   console.log(i);
}

outer: for (let t = 1; t <= 10; t++) {
  inner: for (let s = 1; s <= t; s++) {
    if (s === 5) {
      console.log(s);
      break outer;
    }
  }
}



// Home work start
console.log("Home work start")

// ikki va uchlik karra jadval chiqarish for loop dan foydalanib

for (i = 2; i <= 20; i += 2) {
    console.log(`Bu i${i} ga teng`);
}

for (j = 3; j <= 30; j += 3) {
    console.log(`Bu j${j} ga teng`);
}

// Toq va shuft sonlar chiqarish

let num = 5

if (num % 2 == 1) {
    console.log("Bu toq son")
}
else {
    console.log("Bu juft son");
}

// prime number topish, 1ga va uziga bo'linadigan sonlar

let number = 7, pre = 19;

if (number / 1) {
    console.log("7 soni 1ga bo'linadi");
}

if (number / 7) {
    console.log("7 soni 7 ga bo'linadi");
}

if (pre / 1) {
    console.log("19 soni 1ga bo'linadi");
}

if (pre /7) {
    console.log("19 soni 7ga bo'linadi");
    
}
