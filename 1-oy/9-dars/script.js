let string = "Sardorbek";
let str2 = new String("Sardorbek");
console.log(string);
console.log(str2.valueOf());

// ""
// ''
// ``
console.log("mehanizimlashtirayot \n ganligingizdandurda");
console.log('o\'rdak');
console.log("mehanizimlashtirayot \"ganligingizdandurda");
console.log("mehanizimlashtirayot \t ganligingizdandurda");

let str3 = "Mbappe";
console.log(str3[1]); un
console.log(str3.at(1)); val
console.log(str3.charAt(2)); bs

console.log(str3[-1]); un
console.log(str3.at(-1)); val
console.log(str3.charAt(-2)); bs

let str = "Khusanov";
let str6 = "";

console.log(str.localeCompare("Kh")); // 0 1 -1

console.log(str.length); // 9
console.log(str.at(2)); // r
console.log(str.charAt(4)); // o
console.log(str.toLowerCase()); // kichik
console.log(str.toUpperCase()); // kottada
console.log(str.indexOf('r')); // 2
console.log(str.lastIndexOf('r')); // 5
console.log(str.indexOf("r", 6)); // -1
console.log(str.lastIndexOf("r", 3)); // 3
// boolean
console.log(str.includes("bek"));
console.log(str.endsWith("e"));
console.log(str.startsWith("S"));
console.log(str.startsWith("d", 3));
console.log(str.padStart(12, "."));
console.log(str.padEnd(12, "*"));
console.log(str.slice(2, 4));
console.log(str.substring(2, 4));
console.log(str.substr(2, 4));
console.log(eval("2+2"));
console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());
console.log(str.split(" "));
console.log((str.concat("bek")));
console.log(str.search("g"));
console.log(new String("Sardorbek").valueOf());
let str5 = "Sardorbek bek bek";
console.log(str5.replace(/Bek/gi, "BEK"));
let str4 = "Sardorbek";


for (st of str4) {
  console.log(st);
}


// home work  ===========
console.log("home work start");
// Home work - darsda utilganlarni takrorlash, savol va javob.
