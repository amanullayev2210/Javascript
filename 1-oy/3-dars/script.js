let num = 5;
if (num == 5) {
  console.log("num teng");
} else console.log("num teng emas");

let score = 85;
let res = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
console.log(res);

let ter = score ? "score" : "N/A";

// Null and Undefined

console.log(); // true/false

let user = null;
console.log("A" ?? user);

let firstName = null;
let lastName = null;
let nickName = "nimadur";

console.log(firstName ?? lastName ?? nickName ?? "Anonymous");

console.log(null || 0 || undefined); // true/false
console.log(null ?? 0 ?? undefined);

let height = 0;

console.log(height || 50); // 50
console.log(height ?? 50); // 0

let height2 = null;
let width = null;

let area = (height2 ?? 100) * (width ?? 50);

console.log(area); // 5000

console.log("a" === "A".toLowerCase());

console.log(0 ?? 2 ?? null); // 0
console.log(0 || 2 || null); // 2

// || -> birinchi true bo'lgan qiymatni qaytardi va oirgi false qaytaradi
// && -> birinchi false bo'lgan qiymatni qaytardi va oirgi true qaytaradi
// ?? -> null va undefined bo'lmagan har qanday qiymatni, belgini qaytaradi.
// ! -> hammasining teskarisi


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


