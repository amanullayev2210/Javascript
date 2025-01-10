// darsda utilganlar

// Number type Convertion
console.log("number type o'zgartirish");
console.log("123");
console.log(Number("123")); // Number
console.log("123"); // + type number qilish
console.log(parseInt("123")); // parseInt
console.log(parseFloat("123")); // Float

// ================
console.log("string type o'zgartirish");
// String type Convertion
console.log("123"); // "", '', `` string
console.log(String(123)); // String()
console.log((123).toString()); // toString()

// ================
console.log("string type o'zgartirish");
// Boolean type Convertion
// false char (0, "", NaN, undefined, null)
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean(1 - 1)); // false
console.log(Boolean("")); // false

// ================
console.log("Null vs Undefined");
// null vs undefined
let a;
console.log(a);
let b = null;
console.log(b);
console.log(a + 1);
console.log(b + 1);

// ================
console.log("Math operators");
// Math operators
console.log(1 + 1); // 2
console.log(1 + "1"); // 11
console.log(1 - 1); // 0
console.log(1 - "1"); // 0
console.log(2 * 2); // 4
console.log(1 / 1); // 1
console.log(111 % 10); // 1

// ================
console.log("Qavs ()");
// Qavs ()
console.log(1 + (1 * 1) / 1); // 2
console.log(((1 + 1) * 1) / 1); // 2
console.log(parseInt(20 + (47 * 77) / 98.8)); // 56
console.log(parseInt(((20 + 47) * 77) / 98.8)); // 52

// ================
console.log("Tenglik ");
// Tenglik
let d = 2;
let res = d;
let f = "salom",
  h = "alik";
console.log(d); // 2
console.log(h); // "alik"
console.log(res); // 2
console.log(2 == 2); // true
console.log(2 == "2"); // true
console.log(2 === 2); // true
console.log(2 === "2"); // false

let num = 5;

console.log(num++); // 5, 5, 5, 5,
console.log(num++); // 6, 5, 5, 5,
console.log(++num); // 8, 6, 5, 5,
console.log(num--); // 8, 8, 8, 8,
console.log(--num); // 6, 6, 6, 7,

console.log(5 != 5); // false
console.log(5 !== 5); // false
console.log(5 > 6); // false
console.log(5 < 6); // true
console.log(5 >= 5); // true
console.log(5 <= 5); // true

let num1 = true;
let num2 = false;
console.log(num1 == true || num2 == true); // true 1.true and 2.false
console.log(num1 == true && num2 == true); // false 1.false and 2.true
console.log(num1 == true && num2 == true); // false 1.false and 2.true

console.log("A" == "a"); // False

// Home work start
console.log("Home work start");

// 2-Prefix and Postfix

let c = 1, k = 1;

let i = ++c; // 2
let e = k++; // 1

// 3-Assitment result

let y =2;

let x = 1 + (y *= 2); // 5

// 4-Type conversion

"" + 1 + 0 // 10
"" -1 + 0 // 0              //Answer is -1
true + false // null        //Answer is 1
6 / "2" // 3
"2" * "3" // 6
4 + 5 + "px" // 45px        //Answer is 9px
"$" + 4 + 5 // $9           //Answer is $45
"4" - 2 // 2    
"4px" - 2 // 2px            //Answer is NaN
" - 9 " + 5 // -95          //Answe is - 9 5
" - 9 " - 5 // -5           //Answer is NaN
null + 1 // null            //Answer is 1
undefined + 1 // NaN
" \t \n" - 2 //Nan          //Answer is -2

// 5-Comparisons

5 > 4 // true
"apple" > "pinapple" //false
"2" > "12" // false         //Answer is true
undefined == null // false  //Answer is true
undefined === null // false
null == "\n0\n" // false
null === +"\n0\n" // true   //Answer is false
