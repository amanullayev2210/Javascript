// if

let a = 6;
if (a == 5) console.log("if"); 
// switch

switch (a) {
    case 6:
        console.log("teng emas");
        break;
    case 7:
        console.log("7 ga ham teng emas");
    case 5:
        console.log("teng");
        break;
    default:
        console.log("hech qaysiga teng eams");
}

// loop
 
for (i = 1; i <= 10; i++) {
   console.log(`Bu I ${i}`);
}

let k = 1;
while (k <= 3) {
   console.log(k);
   k++;
}

 let b = 1;
 do {
   console.log(b);
   b++;
 } while (b <= 5);

 function IsSave() {
     console.log("Function De");
    }
IsSave();
    
const isAdd = function () {
    console.log("Function EX");
 };
isAdd();

const IsArrow = () => {
   console.log("Function Arrow");
 };
IsArrow();

// Home work start
console.log("Home work start");

// ikki va uchlik karra jadval chiqarish for loop dan foydalanib

for (c = 2; c <= 20; c += 2) {
    console.log(`Bu i${c} ga teng`);
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
