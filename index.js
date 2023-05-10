// console.log("hello word")
console.log(name);
var _name = "Musharraf panwar"

let $lastName = "panwar"
console.log($lastName)


// const village;
// console.log(village)

const pi = 3.14;
console.log(pi)


// string is immutable         subString,   split, substr
// concate                     padStart
// slice
// trim() start and end
// length
// substring
// replace

let _string = "     i am the master of my faith and i'm caption of my soul"

console.log(_string[_string.length-2])
console.log(_string.slice(2, 16))
console.log(_string.substr(12, 16))

let str =_string.trim();
console.log(str)
var strr = _string.replace("the", "and");
console.log(strr);

var concateStr =strr.concat(str)
console.log(concateStr.substring(1, 20))

var name1 = null;
var name2;
var num =12n
var num1 = BigInt(14);

var i =0;
    while(i<=10){
        if(i==5){
            // continue;
        }
        console.log(i)
        // document.getElementById("demo4").map((a)=>{a.innerHTML(i)})
        i++
    }

    var a = 11
    do{
        console.log(a)
        a++
    }
    while(a<15) ;

document.getElementById("demo").innerHTML = `My name is ${_name}`
document.getElementById("demo2").innerHTML = `It's ${typeof name1} ${typeof name2} ${num+num1}`

document.getElementById("demo3").innerHTML = `Falsi value false, 0, " ", null and undefined`
document.getElementById("demo4").innerHTML = `${_name.length < 20 ? true :false}`


// Array starting here

const names = ["Mohd", "Musharraf", "panwar", "Shahab"];

const newNames = [...names]

for(let name in newNames){
    console.log(names[name])
}

const [val1, val2, ...val3] = names;
console.log(val1 +" and "+ val2, val3)


const obj = {
    name:"Mohd",
    age: 33,
    gender: "Male"
}

obj.name = "Musharraf"
console.log(obj.name, obj.age);


for(let ob in obj){
    console.log(ob)
}

key1 = "name", value1= "Mohd"
key2 = "age", value2 = "Musharraf"

const obj2 = {
    [key1]: value1,
    [key2]: value2,
    ["favrate hobby"]: ["Read", "and", "business"]
}

console.log(obj2)

const newObj = {..."abcd"};

console.log(newObj)

const arrObj = [
    {userId: 1, productName:"Mobile", price: 2000},
    {userId: 2, productName:"Laptop", price: 22000},
    {userId: 1, productName:"iPad", price: 45000},
]

const [{price:Rs}, , {productName}]= arrObj
console.log(Rs, productName)

// arrObj.forEach((a, b)=>{
//     console.log(a.productName, b)
// })

arrObj.map((a, b)=>{console.log(a.price, b) })

const newFilter =arrObj.filter((a)=>{
    return a.price>2000
});

// console.log(newFilter)