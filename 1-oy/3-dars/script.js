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

let i = 1;
for (let i = 1; i <= 10; i++) {
  //   if (i % 2 === 0) {
  //     break
  //   }

//   console.log(i);
}

outer: for (let i = 1; i <= 10; i++) {
  inner: for (let j = 1; j <= i; j++) {
    if (j === 5) {
      console.log(j);
      break outer;
    }
  }
}


// Home work start 
if ("0") {
    alert( 'Hello' );
} // Hello



let result;
let a = 1;
let b = 2;

if (a + b < 4) {
    result = 'Berlow';
} else {
    result = 'Over';
} // Over


