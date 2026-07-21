//spread operator
// let arr1=[1,2];
// let arr2 =[2,4];
// let arr3=[...arr1,...arr2];
// console.log(arr3);

// let arr1=[1,3];
// let arr2=[...arr1];
// console.log(arr2);

//rest operator
// function Sum(...numbers){
//     console.log(numbers);
// }
// Sum(10,20,30);

// let arr=[10,20,30,40];
// let[a,b,c,d,...rest]=arr;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// let arr1=[1,2,3];
// console.log(...arr1);

//destructing
// const arr=[10,20,30]
// const a=arr[0];//normal way
// const b=arr[1];
// const c=arr[2];
// const d=arr[3];

// const arr=[10,20,30,40]
// const[a,b,c,d]=arr; //destructing way
//print values

//swapp number in array
// let a=5;
// let b=10;
// let temp;

//without destructing
// temp=a;
// a=b;
// b=temp;
// console.log(a);
// console.log(b);

//with destructing
// let a=5;
// let b=9;
// [a,b]=[b,a];
// console.log(a);
// console.log(b);

//default values
// const arr = [10];
// const [a,b=50] = arr;
// console.log(a); //10
// console.log(b); //50

//object destructing
// const user ={
//     name:"neha",
//     age:19,
// };
// const name = user.name;
// const age=user.age;
// console.log(name);
// console.log(age);

// //remaining variable
// const user={
//     name:"neha",
//     age:19,
// };
// const{name:userName,age:userAge}
// console.log(user.Name);
// console.log(UserAge);


// //Nested Destructuring
// //Object inside object:
// const user = {
//     name:"Sourav",
//     address:{
//         city:"Delhi",
//         pincode:110096
//     }
// };
// //Destructuring:
// const {address:{city}} = user;
// console.log(city); // Delhi


//ASSIGNMENT 
// const arry =
// [
//     {bookName: "Java Basics" , dayslate: 2, finePerDay: 10},
//     {bookNmae:"Python Guide",daysLate: 3,finePerDay: 15},
//     {bookName:"Web Design",daysLate: 3,finePerDay: 15},
// ]
// function fine(book){
//     let totalfine=0;
//     for(let i=0;i<book.length;i++){
//         totalfine=totalfine+book[i].finePerDay;
//     }
//     return totalfine;
// }
// console.log(fine(arry));

// //energy pulse decorder
// const arry={
// }
// function calculatePulseDifference(code){
    
// }


//2.
// function calculatePulseDifferece{
//     let digit = code.tostring;
//     let oddsum=0;
//     let evensum=0;
//     for(let i=0;i<n;i++){
//             let digit  =  Number(digit[i]);

//             if(i+1) 
//                 if((i+1)%2==1){
//                     oddsum += digit;
//                 }
//                 else{
//                     evensum += digit;
//                 }
//     }
//         return oddsum - evensum;
// }

//3.

// const box= document.querySelector('.box');
// box.style,backgroundColor = 'blue';
// box.style.marginTop= '20px';
// console.log(box.style.backlgorundColor);

// //classlist
// //decalre a class in css file to toggle it

// document.querySelector("p");
// text.classList.add('highlight');
// text.classList.remove('highlight');

// //creating new nodes
// const a=document.getElementById(tagName);
// newDiv.textContent="Hello World";
// nexDiv


//         const el =document.getElementById("demo");

//         console.log(el.textContent);
//         console.log(el.innerText);

// const fragment = document.createDocumentFragment();

// for (let i = 1; i <= 3; i++) {
//    const li = document.createElement("li");
//    li.textContent = "Item " + i;
//    fragment.appendChild(li);
// }

// document.getElementById("list").appendChild(fragment);


// const button= document.getElementById('button');
// button.onclick = function() {
//     console.log("clicked");
// };

// //add event lisener
// const button = document.querySelector('button');
// button.addEventListener("click", function(){
//         console.log("clicked");
// });

//event handler event strts from root and travel down 
// document.getElementById("parent").addEventListener(
//     "click", () =>{
//         console.log("parent capturing");
//     },true);

// document.getElementById("child").addEventListener(
//     "click",() =>{
//         console.log("child capturing");
//     },true);

// document.getElementById("root"),addEventListener(
//     "click" ,() =>{
//         console.log("root");

//     },true);

//event bubbling
//event starts form root element and go to target element

// document.getElementById("parent").addEventListener(
//     "click" , () => {
//             console.log("parent bubbling");
//     });
// document.getElementById("child").addEventListener(
//     "click" , () => {
//             console.log("child bubbling");
//     });


// Select the parent element
// const menu = document.getElementById('menu');

// // Attach event listener to parent
// menu.addEventListener('click', function() {
//     // event.target is the actual element clicked
//     if(event.target.tagName === 'LI') {
//         alert('You clicked on: ' + event.target.dataset.action);
//     }
// });

// const menu = document.getElementById('menu');

// menu.addEventListener('click', function () {
//         if(event.target.tagName =='LI'){
//             alert('you clicked on:' + event.target.dataset.action);
//         }
// })


// document.addEventListener('DOMContentLoaded',function(){
//     console.log("hello world");
// })

// document.getElementById("btn").addEventListener (
//     "clck" ,function(event){
//         console.log(event);
//     }
// );

// document.getElementById("btn"),addEventListener('click',
//     function(event){
//         console.log(event);
//     }
// );
//event object = create by browser = passed automaticaly to habdeler function 

//stopprogartion functiom
// button.addEventListener("click", function(event){
//     event.stopPropagation();
//     console.log("button clicked");
//     console.log("hello world");

// });

//by default => event bubbleing 
// to chnage this we use event capturing and use true after console
//if i want event not goes to parent evertime so we use stopprogation

// const btn=document.getElementById("btn");

// btn.addEventListener("click",function(){
//     console.log("first linerner");
//     console.log("hellow rold");
   
// });

// btn.addEventListener("click",function(){
//     console.log("second lisnere");


// });

// btn.addEventListener("click",function(){
//     console.log("third lisnere");
//      event.stopImmediatePropagation();
// });

// document.getElementById("parent").addEventListener("click", () => {
//    console.log("Parent Clicked");
// });

// document.getElementById("child").addEventListener("click", (event) => {

//    event.stopPropagation();

//    console.log("Child Clicked");

// });

// console.log("Start");

// setTimeout(() => {

//    console.log("Async Task");

// }, 2000);

// console.log("End");


//assignment 

//1.
// const array =
// [
// { bookName: "Java Basics", daysLate: 2, finePerDay: 10 },
// { bookName: "Python Guide", daysLate: 3, finePerDay: 15 },
// { bookName: "Web Design", daysLate: 1, finePerDay: 20 }
// ]


// function fine (books){
//   let sum = 0
//   for (let i = 0;i<books.length;i++){
//   sum = sum+   books[i].daysLate*books[i].finePerDay
//   }
//   return sum
// }
// console.log(fine(array))

//2.
// function calculatePulseDifference(code) {
//    let str = code.toString();
//    let oddSum = 0;
//    let evenSum = 0;
//    for (let i = 0; i < str.length; i++) {
//       let digit = Number(str[i]);
//       if ((i + 1) % 2 === 1) {
//          oddSum += digit;
//       } else {
//          evenSum += digit;
//       }
//    }
//    return oddSum - evenSum;
// }

//3.
// function countTrendChanges(temperatures) {
//    let changes = 0;
//    let prevTrend = null;
//    for (let i = 1; i < temperatures.length; i++) {
//       let currentTrend = null;
//       if (temperatures[i] > temperatures[i - 1]) {
//          currentTrend = "up";
//       }
//       else if (temperatures[i] < temperatures[i - 1]) {
//          currentTrend = "down";
//       }
//       else {
//          continue;
//       }
//       if (prevTrend && currentTrend !== prevTrend) {
//          changes++;
//       }
//       prevTrend = currentTrend;
//    }
//    return changes;
// } 

//4.
// function countStringValues(jsonStr) {
//    const obj = JSON.parse(jsonStr);
//    let count = 0;
//    for (let key in obj) {
//       if (typeof obj[key] === "string") {
//          count++;
//       }
//    }
//    return count;
// }

//5.
// function sumNumericValues(jsonStr) {
//    const obj = JSON.parse(jsonStr);
//    let sum = 0;
//    for (let key in obj) {

//       if (typeof obj[key] === "number") {
//          sum += obj[key];
//       }
//    }
//    return sum;
// }

// let n=5;
// function factorial(n){
//     if(n==0)
//         return 1;
//     else
//         return n*factorial(n-1);
// }
// console.log(factorial(n));


// //prime number
// let num=5;
// function isPrime(num, a = 2) {
//    if (num < 2) {
//       return false;
//    }
//    if (a === num) {
//       return true;
//    }
//    if (num % a === 0) {
//       return false;
//    }
//    return isPrime(num, a + 1);
// }
// console.log(isPrime(n));


// let n=345;
// function reverse(n){
//     let rev=0;
//     let a;
//     while(n>0){
//           a=n%10;
//          rev= rev*10 +a;
//          n  = Math.floor(n/10);
//     }
//     return rev;
// }
// console.log(reverse(n));

//pallindrone number
// let n=121;
// function reverse(n){
//     let original=n;
//     let rev=0;
//     let a;
//     while(n>0){
//           a=n%10;
//          rev= rev*10 +a;
//          n  = Math.floor(n/10);
//     }
//       if(original===rev){
//         console.log("yes pallindrone");
//       }
//       else{
//         console.log("No pallindrone");
//       }
//       return rev;
// }
// reverse(n);

//reverse string 
// const str = neha;
// function reverseString(str){
//     if(str === ""){
//         return "";
//     }
//     return reverseString(str.slice(1)) + str[0];
// }

//
// { <input type ="text" pattern ="[0-9]{10}" placeholder="Enter 10 digit number" required>
// </input>}
let arr = [10,20,30,40];
arr.map(x => x*2);
arr.filter(x => x>5);

function reverse(str){
         let rev= str.split("").reverse().join("");
         return str===rev;
}

console.log(reverse("kanak"));


