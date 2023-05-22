// // // console.log("hello word")
// // console.log(name);
// // var _name = "Musharraf panwar"

// // let $lastName = "panwar"
// // console.log($lastName)


// // // const village;
// // // console.log(village)

// // const pi = 3.14;
// // console.log(pi)


// // // string is immutable         subString,   split, substr
// // // concate                     padStart
// // // slice
// // // trim() start and end
// // // length
// // // substring
// // // replace

// // let _string = "     i am the master of my faith and i'm caption of my soul"

// // console.log(_string[_string.length-2])
// // console.log(_string.slice(2, 16))
// // console.log(_string.substr(12, 16))

// // let str =_string.trim();
// // console.log(str)
// // var strr = _string.replace("the", "and");
// // console.log(strr);

// // var concateStr =strr.concat(str)
// // console.log(concateStr.substring(1, 20))

// // var name1 = null;
// // var name2;
// // var num =12n
// // var num1 = BigInt(14);

// // var i =0;
// //     while(i<=10){
// //         if(i==5){
// //             // continue;
// //         }
// //         console.log(i)
// //         // document.getElementById("demo4").map((a)=>{a.innerHTML(i)})
// //         i++
// //     }

// //     var a = 11
// //     do{
// //         console.log(a)
// //         a++
// //     }
// //     while(a<15) ;

// // document.getElementById("demo").innerHTML = `My name is ${_name}`
// // document.getElementById("demo2").innerHTML = `It's ${typeof name1} ${typeof name2} ${num+num1}`

// // document.getElementById("demo3").innerHTML = `Falsi value false, 0, " ", null and undefined`
// // document.getElementById("demo4").innerHTML = `${_name.length < 20 ? true :false}`


// // // Array starting here

// // const names = ["Mohd", "Musharraf", "panwar", "Shahab"];

// // const newNames = [...names]

// // for(let name in newNames){
// //     console.log(names[name])
// // }

// // const [val1, val2, ...val3] = names;
// // console.log(val1 +" and "+ val2, val3)


// // const obj = {
// //     name:"Mohd",
// //     age: 33,
// //     gender: "Male"
// // }

// // obj.name = "Musharraf"
// // console.log(obj.name, obj.age);


// // for(let ob in obj){
// //     console.log(ob)
// // }

// // key1 = "name", value1= "Mohd"
// // key2 = "age", value2 = "Musharraf"

// // const obj2 = {
// //     [key1]: value1,
// //     [key2]: value2,
// //     ["favrate hobby"]: ["Read", "and", "business"]
// // }

// // console.log(obj2)

// // const newObj = {..."abcd"};

// // console.log(newObj)

// // const arrObj = [
// //     {userId: 1, productName:"Mobile", price: 2000},
// //     {userId: 2, productName:"Laptop", price: 22000},
// //     {userId: 3, productName:"iPad", price: 45000},
// // ]

// // const [{price:Rs}, , {productName}]= arrObj
// // console.log(Rs, productName)

// // // arrObj.forEach((a, b)=>{
// // //     console.log(a.productName, b)
// // // })

// // arrObj.map((a, b)=>{console.log(a.price, b) })

// // const newFilter =arrObj.filter((a)=>{
// //     return a.price>2000
// // });

// // const namel = function(a, b, ...c){
// //     console.log(a, b, c)
// // }
// // namel(1,2,3,4,5,6)

// // console.log(newFilter)

// //  const ans= arrObj.reduce((accumlater, currunt)=>{
// //     return accumlater + currunt.price
// // },0)

// // console.log(ans)
// // arrObj.sort((a,b)=>b.price- a.price)

// // console.log(arrObj)

// // const findArr =arrObj.find(a=>a.price==2000)

// // console.log(findArr)

// // const demoArr = [2,45, 23, 66,70]

// // demoArr.splice(1, 2, 21,44, 24)
// // console.log(demoArr)
// // demoArr.fill(1, 3, 5)
// // console.log(demoArr);

// // function mul(a){
// //     return a*3
// // }
// // const addTwoNo= (num1, num2=0)=>{
// //     console.log(num1+num2) 
// //     function Inside(num3){
// //         return num1+num2+ num3
// //     }
// //     console.log(Inside(17))
// // }
// // addTwoNo(50, mul(20))


// // const arrDemoForSet = [12, 34, 23, 6];
// // const uniqueNo = new Set(arrDemoForSet)
// // uniqueNo.add(15)

// // console.log(uniqueNo.has(121))
// // console.log(uniqueNo)

// // let length=0;
// // for(let no of uniqueNo){
// //     console.log(no)
// //     length++
// // }
// // console.log(length);


// // const newMap = new Map([["name", "Musharraf"], ["age", 29], [3, "hobbies"]])
// // newMap.set("Other","nothing")

// // console.log(newMap.get("name"))
// // console.log(newMap)

// // console.log(newMap.values())

// // // Object 
// // const newObj1 = {
// //     firstName: "Mohd",
// //     lastname: "Musharraf",
// //     age:21,
// //     about: function(){
// //         console.log(`My name is ${this.firstName, this.lastname} and age ${this.age} `)
// //     }
// // }


// // const newObj3 = {
// //     firstName: "Mohd",
// //     lastname: "panwar",
// //     age:244,
    
// // }


// // const newObj4 = {
// //     firstName: "Mohd",
// //     lastname: "Musharraf shahab",
// //     age:29,
// //     about(){
// //         console.log(`My name is ${this.firstName} ${this.lastname} and age ${this.age} `)
// //     }
// // }



// // const newObj5 = Object.assign({}, newObj3)

// // const newObj2 ={...newObj1}
// // console.log(newObj5.lastname)


// // newObj4.about.call(newObj3)
// // const newAns =newObj4.about.bind(newObj3);

// // // newAns()
// // const objMethods = {
// //     about:function(){
// //         (`My name is ${firstName} and also known as ${lastname}`)
// //     }
// // }

// // function CreateObj(firstName, lastname, age){
// //     const user={}
// //     user.firstName= firstName,
// //     user.lastname = lastname,
// //     user.age= age
// //     // user.about = objMethods.about;
// //     return user;
// // }

// // const user1 = CreateObj("Mohd", "Musharraf", 22)
// // // user1.about()
// // console.log(user1.firstName)


// // function personInfo(h, w){
// //     return `My name is ${this.name} and age ${this.age} ${h} and ${w}`
// // }
// // const obje ={
// //     name: "Akram",
// //     age: 45,
// //     hobbies: ["Cricket", "reading", "cooking"],
// //     // about: personInfo
// // }

// // const ans1 = personInfo.bind(obje)
// // console.log(ans1("close", "open"))
// // console.log(personInfo.apply(obje, ["reading", "engineer"]))
// // // console.log(newObj4.personInfo.call(obje))
// // // console.log(personInfo.call(obje, "reading", "engineer"))
// // // console.log("first")


// // const obj3 = Object.create(obje);
// // obj3.newName = "Musharraf"
// // console.log(obj3)
// // // class in javaScript

// // class Animal{
// //     constructor(name, age, eat){
// //         this.name = name,
// //         this.age= age,
// //         this.eat = eat
// //     }
// //     isCute(){
// //         return this.age<=3 ?true: false
// //     }
// // }

// // const animal1 = new Animal('bufflo', 4, "grass")
// // console.log(animal1.isCute())


// // class Goat extends Animal{
// //     constructor(name, lastName, age, eat, climb, milkForFever){
// //         super(name, age, eat)
// //         this.lastName =lastName
// //         this.climb= climb,
// //         this.milkForFever = milkForFever
// //     }

// //    get isSpeak(){
// //         console.log("mai, mai")
// //     }
// //     static get otherEat(){
// //         console.log("grass")
// //      }

// // //    set otherName(a){
// // //         const [name, lastName] =a.split(" ")
// // //         this.name = name,
// // //         this.lastName= lastName
// // //      }
// // }

// // const goat1 = new Goat("goat maina", 2, "leaf", "roof", "benificial")

// // goat1.isSpeak;
// // Goat.otherEat

// // // console.log(goat1.otherName("new goat"))

// // // function sadaghgf(){
// // //     return
// // // }

// // console.log(window)
// // console.log(this)

// // console.log(firstName)
// // var firstName = "Musharraf"

// // console.log(firstName)

// const list = document.querySelector("#list")
// // const list = document.getElementById("list")
// list.childNodes[1].style.color = "Red"
// // console.log(list.childNodes[1].innerText)
// list.childNodes[1].setAttribute("a", "this is a");

// console.log(list.childNodes[1].getAttribute("href"))

// let newLists =list.childNodes

// newLists = Array.from(newLists);

// // newLists.forEach(a=a=> console.log(a))


// // for(let newList of newLists){
// //     console.log(newList.innerText)
// // }

// let root = document.getRootNode()

// // console.log(root.childNodes[0].nextSibling);
// // console.log(root.childNodes[1].childNodes[2].childNodes[1].parentNode);

// console.log(list.parentNode.classList.toggle('nav-containor'))

// const nav_item = document.createElement("li");
// // const nav_itemText = document.createTextNode("this is node");
// // nav_item.append(nav_itemText);
// nav_item.textContent = "this is text";

// console.log(nav_item)
// // list.prepend(nav_item)

// const navItem = nav_item.cloneNode(true)
// console.log(navItem);

// // navItem.insertBefore("li", navItem)
// console.log(list.firstElementChild.textContent)
// const multiEvents = list.children;
// for(let multiEvent of multiEvents){
//     multiEvent.addEventListener("click", (e)=>{
//         e.target.style.color = "Pink"
//     })}



//     const head1 = document.querySelector(".heading1");
//     const head2 = document.querySelector(".heading2");
//     const head3 = document.querySelector(".heading3");
//     const head4 = document.querySelector(".heading4");
//     const head5 = document.querySelector(".heading5");
//     const head6 = document.querySelector(".heading6");
//     const head7 = document.querySelector(".heading7");
//     // const head1 = document.querySelector("#heading1");

//     function textChange(ele, text, color, time, onSuccess, onFailare){
//         setTimeout(()=>{
//             ele.textContent = text;
//             ele.style.color = color;

//             if(onSuccess){
//                 onSuccess()
//             }else{
//                 if(onFailare){
//                     onFailare()
//                 }
//             }
//         }, time)
//     }

//     console.log(head1.textContent)

//     // textChange(head1, "heading1", "red", 1000, ()=>{        
//     //     textChange(head2, "heading2", "green", 1000, ()=>{        
//     //         textChange(head3, "heading3", "violet", 1000, ()=>{        
//     //             textChange(head4, "heading4", "yellow", 1000, ()=>{        
//     //                 textChange(head5, "heading5", "orange", 1000, ()=>{        
//     //                     textChange(head6, "heading6", "pink", 1000, ()=>{        
//     //                         textChange(head7, "heading7", "blue", 1000, ()=>{                                   
//     //                         }, ()=>{console.log("something wrong")})
//     //                     }, ()=>{console.log("something wrong")})
//     //                 }, ()=>{console.log("something wrong")})
//     //             }, ()=>{console.log("something wrong")})
//     //         }, ()=>{console.log("something wrong")})
//     //     }, ()=>{console.log("something wrong")})
//     // }, ()=>{console.log("something wrong")})


// // const newPromise = new Promise((resolve, reject) => {
// //     const value = 0;
// //     if(value){
// //         resolve("this is resolve");
// //     }else{
// //         reject("this is reject")
// //     }
// // })

// // newPromise.then((res)=>{console.log(res)})
// // .catch(a=> console.log(a))

// function textchange1(ele, heading, color, time){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(ele){
//                 ele.textContent = heading;
//                 ele.style.color = color;

//                 resolve()
//             }else{
//                 reject()
//             }
//         }, time);

//     })
// }

// textchange1(head1, "heading1", "red", 1000)
//     .then(()=>textchange1(head2, "heading2", "Green", 1000))
//         .then(()=>textchange1(head3, "heading3", "meroon", 1000))
//             .then(()=>textchange1(head4, "heading4", "blue", 1000))
//                 .then(()=>textchange1(head5, "heading5", "grey", 1000))
//                     .then(()=>textchange1(head6, "heading6", "orange", 1000))
//                         .then(()=>textchange1(head7, "heading7", "violet", 1000))

//                         .catch(()=>{console.log("something went wrong")})
// //                     .catch(()=>{console.log("something went wrong")})
// //                 .catch(()=>{console.log("something went wrong")})
// //             .catch(()=>{console.log("something went wrong")})
// //         .catch(()=>{console.log("something went wrong")})
// //     .catch(()=>{console.log("something went wrong")})
// // .catch(()=>{console.log("something went wrong")})

// const URL ='https://jsonplaceholder.typicode.com/posts';
// // const xhr = new XMLHttpRequest()

// // console.log(xhr)
// // xhr.open("GET", URL)

// // // xhr.onreadystatechange = function newFun(){
// // xhr.onload = function newFun(){
// //     // if(xhr.readyState===4){
// //     if(xhr.status>=200 && xhr.status<=300){
// //         console.log("success")
// //         console.log(xhr.readyState)
// //         const data = JSON.parse(xhr.response);
// //         console.log(data[1].body)
// //     }
// //     else{
// //         console.log("some thing went wrong")
// //     }
// // }

// // xhr.onerror = ()=>{console.log("some err occured")}
// // xhr.send()

// fetch("URL1").then((res)=>{
//     if(res.ok)
//     return res.json()
//     else{
//         throw new Error("Error from fetch")
//     }
// }).then(data=>{
//     // console.log(data)
// }).catch(err=>{
//     console.log("some err occured", err)
// })

// async function dataPrint(){
//     const res = await fetch(URL);
//     let data =[]
//     if(res.ok){
//          data = await res.json();
//     }else{
//         throw new Error("this is a err in api url")
//     }
//     return data;
// }

// dataPrint().then((data)=>{
//     // console.log(data)
// }).catch((err)=>{
//     console.log("err from async", err)
// })


// let xhr1 = new XMLHttpRequest()

// xhr1.open("Get", URL)

// xhr1.onreadystatechange = ()=>{
//     console.log(xhr1.readyState)
//     if(xhr1.readyState ==4){
//         console.log(xhr1)
//         console.log(xhr1.response[1])
//     }
// }

// xhr1.send()

// function flatCode(ele, text, color, time){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if(ele){
//                 ele.textContent = text,
//                 ele.style.color = color
//                 resolve()
//             }else{
//                 reject()
//             }
//         }, time)
//     })
// }

// flatCode(head1, "Luqman", "red", 2000)
//  .then(()=>{})

//  let passKey = setInterval(()=>{
//     let pass = Math.floor(Math.random()*6 +(5));
//     console.log(pass)
//  }, 1000)

//  clearInterval(passKey)

// const demo = document.querySelector('.heading-demo')
// const parent = document.querySelector('.parent')
// const child = document.querySelector('.child')
// console.log(child.classList)

// demo.insertAdjacentHTML("beforeend", "<div> Parent of Grand</div>")
// demo.addEventListener('click', (e)=>{
//     console.log( e.target.getBoundingClientRect().height)
// })
// // parent.addEventListener('click', ()=>{
// //     console.log("father")
// // })
// // child.addEventListener('click', ()=>{
// //     console.log("Child")
// // })
// // demo.addEventListener('click', ()=>{
// //     console.log("grand father !!!")
// // },true)
// // parent.addEventListener('click', ()=>{
// //     console.log("father !!!")
// // },true)
// // child.addEventListener('click', ()=>{
// //     console.log("Child !!!")
// // },true)

// class Birds{
//     constructor(leg, wings, name, age){
//         this.leg = leg,
//         this.wings= wings,
//         this.name = name,
//         this.age = age
//     }
//     about(a){
//         console.log(`Bird name is ${this.name} and age is ${this.age} and eat is ${a}`)
//     }
// }

// const hen = new Birds(2, "Yes", "Hen", 5)
// hen.about("wheat")

// console.log(hen.age)

// class PeoCock extends Birds{
//     constructor( leg, wings, name, age, lives){
//         super(leg, wings, name, age)
//         this.lives = lives
//     }
//    static get isSpeak(){
//         console.log("Speak is mew mew")
//     }
//     set fullHouse(a){
//         const [lives1, lives2] = a.split(" ")
//         this.lives = lives2
//         return this.lives

//     }
//     isfly(){
//         console.log("max 1 mile")
//     }
// }

// const PeoCock1 = new PeoCock(2, "fly", "Poehen", 5, "Forest home Zoo")

// // PeoCock1.fullHouse("joe bar")
// PeoCock1.isfly()
// PeoCock1.fullHouse = "Musharraf panwar"
// console.log(PeoCock1.lives)

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     get name() {
//         return this._name;
//     }
//     set name(newName) {
//         newName = newName.trim();
//         if (newName === '') {
//             throw 'The name cannot be empty';
//         }
//         this._name = newName;
//     }
// }

// const p1 =new Person("Musharraf")
// p1.name= "panwar"
// // console.log(p1._name)
// // console.log(p1.name())


// const objj = {
//     name: "Musharraf",
//     fname:"panwar",
//     age: 21,
//     about: function(){}
// }
// function about(){
//     return `My name is ${this.name} ${this.fname} and age ${this.age}`
// }
// const objj1 = {
//     name1: "Nawazish",
//     Sname: "Chouhan",
//     age: 23,
    
// }
// const objj2 = Object.create(objj)

// console.log(objj2.name)
// // const newObjj = about.bind(objj)

// console.log(objj2.__proto__)
// about.prototype.name = "musharraf"
// console.log(about.prototype.name)


// const set = new Set(arr)
// set.add(4)
// console.log(set)

// for(let a of set){
//     console.log(a)
// }

// const obj = {
//     name: 'musharraf',
//     age:21
// }

// const map = new Map()
// map.set(obj,obj)

// map.set({name1:"panwar"})
// console.log(map.get(obj))

// arr.forEach(a=>{
    //     console.log(a)
    // })
    
    const arr = [
        {productName:"mobile", price: 20000},
        {productName:"Laptop", price: 12000},
        {productName:"Tablet", price: 18000},
    ]
    arr.map(a=>{
    const b = a.price*10;
    console.log(b)
})

const arr1 =arr.filter(a=>{
 if( a.price>=13000){
    return a
 }
})

console.log(arr1)

const arrReduce = arr.reduce((acc, curr)=>{
    // let sum =0;
    // sum = acc.price + curr
    return acc+ curr.price
},0)

console.log(arrReduce)