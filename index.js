// console.log("hello word")
console.log(name);
var _name = "Musharraf panwar"

let $lastName = "panwar"
console.log($lastName)


// const village;
// console.log(village)

const pi = 3.14;
console.log(pi)


// string is immutable         subString,   split
// concate
// slice
// trim() start and end
// length
// substring
// replace

let _string = "     i am the master of my faith and i'm caption of my soul"

console.log(_string[_string.length-2])
console.log(_string.slice(2, 6))

let str =_string.trim();
console.log(str)
var strr = _string.replace("the", "and");
console.log(strr);

var concateStr =strr.concat(str)
console.log(concateStr.substring(1, 20))