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
    {userId: 3, productName:"iPad", price: 45000},
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

const namel = function(a, b, ...c){
    console.log(a, b, c)
}
namel(1,2,3,4,5,6)

console.log(newFilter)

 const ans= arrObj.reduce((accumlater, currunt)=>{
    return accumlater + currunt.price
},0)

console.log(ans)
arrObj.sort((a,b)=>b.price- a.price)

console.log(arrObj)

const findArr =arrObj.find(a=>a.price==2000)

console.log(findArr)

const demoArr = [2,45, 23, 66,70]

demoArr.splice(1, 2, 21,44, 24)
console.log(demoArr)
demoArr.fill(1, 3, 5)
console.log(demoArr);

function mul(a){
    return a*3
}
const addTwoNo= (num1, num2=0)=>{
    console.log(num1+num2) 
    function Inside(num3){
        return num1+num2+ num3
    }
    console.log(Inside(17))
}
addTwoNo(50, mul(20))


const arrDemoForSet = [12, 34, 23, 6];
const uniqueNo = new Set(arrDemoForSet)
uniqueNo.add(15)

console.log(uniqueNo.has(121))
console.log(uniqueNo)

let length=0;
for(let no of uniqueNo){
    console.log(no)
    length++
}
console.log(length);


const newMap = new Map([["name", "Musharraf"], ["age", 29], [3, "hobbies"]])
newMap.set("Other","nothing")

console.log(newMap.get("name"))
console.log(newMap)

console.log(newMap.values())

// Object 
const newObj1 = {
    firstName: "Mohd",
    lastname: "Musharraf",
    age:21,
    about: function(){
        console.log(`My name is ${this.firstName, this.lastname} and age ${this.age} `)
    }
}


const newObj3 = {
    firstName: "Mohd",
    lastname: "Musharraf panwar",
    age:21,
    
}


const newObj4 = {
    firstName: "Mohd",
    lastname: "Musharraf shahab",
    age:21,
    about: function(){
        console.log(`My name is ${this.firstName, this.lastname} and age ${this.age} `)
    }
}



const newObj5 = Object.assign({}, newObj3)

const newObj2 ={...newObj1}
console.log(newObj5.lastname)
// newObj2.assign(newObj1)
// console.log(newObj2.firstName)


console.log(newObj1.call(newObj3))
