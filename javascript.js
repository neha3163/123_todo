// //arithmatic operator
// let a=3;
// let b=2;
// let c=3;
// console.log("a + b=",a+b);
// console.log("a - b=",a-b);
// console.log("a / b=",a/b);
// console.log("a*b=",a*b);
// console.log("a**b=",a**b);
// console.log("a%b=",a%b);

// //unary operator 
// let a = 5;
// let b = 2;
// console.log("a = ",a," &b=",b);
// a= a+1;
// console.log(a);
// console.log("++a = ",++a);
// c
// 
//ODD or even
// let num=7;
// if (num%2 ===0){
//     console.log(num,"is even");
// }else{
//         console.log(num,"is odd");
// }

// //check if else statement 
// if (age < 18){
//     console.log("junor");
// }else if(age > 60)
// {
//         console.log("senoir");

// }
// else{
//     console.log("middle");
// }

//conditional staement
// 

//number is multiple of 5 or not

//grade system
// let score= 90;
// let grade;
// if (score >=90 && score <=100)
// {
//     grade = "A";

// }else if (score >=70 && score <=89){
//     grade= "B";

// }
// else if (score >=60 && score <=69){
//     grade= "C";
    
// }
// else if (score >=50 && score <=59){
//     grade= "D";
    
// }
// else if (score >=0 && score <=49){
//     grade= "F";
    
// }
// console.log("according to your scores ,your grade was : ",grade);


// var age=21;
// if(age>18){
//     console.log("vote");
// }
// else{
//     console.log("not vote");
   
// }
//switch case
// var choice=4;
// switch(choice){
//     case 1:
//         console.log("monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("invalid data");

// }

//else if statement
// var age=23;
// if (age>18)
//     {
//         console.log("voting");
// }
// else if(age>=18){
//     console.log("vote");
// }
// else{
//     console.log("not vote");
// }

//area of circle
// var side=3;
// console.log("area of circle:",side*side);

//volume of cylinder
// var r=2;
// var h=3;
// console.log("volime of cylinder:",3.14*r*r/h);

//greatest if 3 number
// var a=6;
// var b=4;
// var c=2;
// if(a>b)
//     if(a>c)
//     {
//         console.log("maximum is a");

//     }
// else if(b>c){
//     console.log("maximum is b");

// }
// else{
//     cosole.log("maximum is c");
// }

// let student = {
//   name: "neha",
//   age: 18,
//   uni: "chitkara",
//   sub: "FEE"
// };
// console.log(student);


// arr=["neha",63,"chitkara","fee"]
// //access value
// arr.pop()
// //console.log()
// arr.push(arr[2])
// console.log("hello world");
// //modify value
// console.log("my name is student.name")


//Assignment 1

// numbers = [10,20,30,40] //1

// console.log(numbers);//2

// console.log(numbers[0]);//3

// numbers.push(50); //4
// console.log(numbers);

// numbers.pop(); //5
// console.log(numbers);

// console.log(numbers);//6

//Assignment 2
// let fruits = ["orange","apple","grapes","banana"];
// console.log(fruits);//1
// console.log(fruits.length); //2

// for(let key in fruits){  //3
//    console.log(key,fruits[key]);
// }


// console.log(fruits[1]); //4
// console.log(fruits[2]); 
// fruits[0] = "Mango"; //5
// console.log(fruits); //6


//Assignment 3
// student = {    //1
//     name: "neha",
//     age: 17,
//     course: "Btech",

// }
// console.log(student); //2
// console.log(student.name); //3
// student.age = 18;
// console.log(student); //4
// student.city = "bathinda";//5
// console.log(student); //6


//Assignment 4
// mobile = {    //1
//     brand : "I20",
//     price: "1600000",
//     color: "White",

// }
// console.log(mobile.brand); //2
// console.log(mobile.price); //3
// mobile.color = "black";  //4
// mobile.isAvailable = "yes"; //5
// console.log(mobile); //6


//Assignment 5
// console.log("javaScript is easy"); //1
// console.info("hii"); //2
// console.warn("warning"); //3
// console.error("error"); //4
// var num="neha"; //5
// console.log(num);
// console.log(typeof(num)); //6

//Assignment 6
// color = ["red","yellow","orange"];
// console.log(color);
// color.pop="blue";
// color.push = "green";


//assignment 1
//1.
// let marks =90;
// let attendance = 30; 
// let math=87;
// let c=90;
// let python=80;
// let web =86;
// let java=85;
// var total=math+c+python+web+java;
// per=total*100/500;
// console.log(total);
// console.log(per);

// //2.
// if(marks>=90)
// {
//     console.log("A+");
//     console.log("Pass");
// }
// else if(marks >=80 && marks<=89){
//     console.log("A");
// console.log("Pass");
// }
// else if(marks>=70 && marks<=79){
//     console.log("B");
//     console.log("Pass");
// }
// else if(marks>=60 && marks<=69){
//     console.log("C");
//     console.log("Pass");
// }
// else 
//     console.log("Fail");
// //3.
//  if(per>=85 && attendance>=90)
//     console.log("Full Scholarship");
//  else if(per>=75 && attendance>=80)
//     console.log("Half Scholarship");
//  else
//     console.log("No Scholarship");


//Assignment 2
// let units=1800;
// let surcharge;
// if(units<=100){
//     bill=units*2;
//     console.log(bill);
// }
// else if(units>100 && units<=200){
//     bill=units*3;
//  console.log(bill);
// }
// else{
//     bill=units*5;
//  console.log(bill);
// }{
// if(bill>1000){
//     surcharge=bill*10;
//     console.log(surcharge);
// }
// else if(bill>2000)
// {
//     surcharge=bill*15;
//     console.log(surcharge)
// }
// if(units<0)
//     console.log("Invalid Input");
// }

// //Assignment 4
// age = 32;
// license = yes / no;


//print all even number less than 100
// let even=0,odd=0;
// for(let i=0;i<=100;i++)
//     if(i%2==0){
//         even=i;
//         //sum=even+i;
//         console.log(even);
//     }


//create a game
//let gamenum=25;
//let usernumber= prompt("e=guess the game number:");
// if(gamenum==usernumber)
//     console.log("valid password");
// else
//     console.log("invalid password");



// while(usernumber != gamenum){
//     username=prompt("ypu entered wrong number,guess again:");
// }
// console.log("congratulations , you entered the right number");

//strings in javsciptlet 
//let str1="hello";
//let str2 ="world";


//strings
// let str="hello world";
// console.log(str[7]);
// //template literals
// let sentence='this is template literal';

//assignment 6
// colors=["red","yellow","green"];
// console.log(colors);
// colors.push("orange")
// color.pop("blue")
// console.log(colors);

//assognment 8
// let sum=0;
// let marks=[98,97,95,96,95];
// for(let i=0;i<n;i++)
//     i++;
//     sum+=i;
//     let total=sum+i;
//     console.log(sum);






//functions
// function functionName(msg)// parameter -> input
// {
//     console.log(msg);
// }
// functionName("hello world"); //argument


//call sum function again and again so make sum function
// function sum(a,b) {
//   console.log(a+b);

// }
//  sum(1,2);

// function sum(x,y){
//     s=x+y;
//     //local variable block scope
//     console.log("before return");
//     console.log(x);
//     return s;
//     console.log("after return"); //never print statement write after return
// }
// let val=sum(3,4);
// console.log(val);
//console.log(x);

//multiplication
// function mul(a,b)
// { 
//     return a*b;
// }

// let arrowMul = (a,b)=> {
//     console.log(a*b);
//     return a*b;
// }
// arrowMul=5;

//array function
// const printhello = () =>
// {
//     console.log("hello");
// };


//functions 
// function myFunction()
// {
//     console.log("hello wrold");
// }
// myFunction();

// function myFunction(msg) //pass parameter
// {
//     console.log(msg);
// }
// myFunction("i love js"); //argument

//calculate sum again and agin so use function 
// function sum(x,y)
// {
//     s=x+y;
//     console.log("before return");
//     return s; //console.log(x+y);
//     console.log("after return"); //never execute statemnt after return
// }
// let val=sum(3,4);
// console.log(val);

//parameters are local variables of function => vlock scope

//arrow function (param,param2) =>{ //work } //store arrow function in variabe
//sum of number using arrow function
//Modern JS

// const arrowsum = (a,b) => {
//     console.log(a+b);
// };
// arrowsum(3,4);

// const arrowmul = (a,b) => {
//     console.log(a*b);
// };
// arrowmul(3,4);

// let arrowsub = (a,b) => {
//     console.log(a-b);
// }
// arrowsub(3,4);

//count vowels in string 
// function countvowels(str) {
//     let count=0;
//    for(const char of str){
//     if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u")
//     {
//         count++;
// }
// }
// console.log(count);
// }
// countvowels("apna college");

//same question with arrow function


////callback function in array
////let arr = [1,2,3,4,5];
// let arr = ["mumbai","pune","delhi"];
// arr.forEach((val,idx,arr) => {
//     console.log(val.toUpperCase(),idx,arr);//print index also
// });
 ////arr.forEach not use for strings

 //higher order function fix parameter and fix return (when use see paramter in function this function are called higher order funcion)


 //print square of numbers using forEach loop
//  let arr =[2,3,4,5,6];
//  arr.forEach((val) => {
    
//     console.log(val**2); //val*val
//  });

//method-2 solve
// let val =[2,3,4,5,6];
// let calSquare = (val) => {
    
//     console.log(val**2);
//  };
//  val.forEach(calSquare);


//methods of array
// map function in array => new array return
// let nums =[67,46,34];
// let newArr = nums.map((val) => {
//     return val*2;
// });
// console.log(newArr);
// let CalSquare = (num) => {
//     console.log(num*num);
// };

//map is used to create a new array using some returned value based on each value which is stored in the indivusual index of array


//filter method
//create a new array of element that give true for a condition/filter eg all even number

// let arr =[1,2,3,4]
// let evenArr = arr.filter( (val) => {
//     return val%2 == 0;
//    // return val > 3;
// })
// console.log(evenArr);
 
//not change current array filter out things from old array and create a new array

 //reduce method
 //perform operation and reduce the array to a single value.it returns that single value.

 //sum of elements in array
//  let arr = [1,2,3,4,5,6,7];
//  const output = arr.reduce((res,val) => {    //accumalator = res and currentvalue =val
//     return res + val;;
//  });
// console.log(output);

//find largest element in array
//  let arr = [1,2,3,4,5,6,7];
//  const output = arr.reduce((pre,curr) => {    
//     return pre > curr ? pre : curr;
// });
// console.log(output);


//find student scored marks above 90
// let marks = [98,76,96,56,87];
// let passStudent = marks.filter ((val) =>{
//     return val > 90;
// });
// console.log(passStudent);

//input n as input and calculate sum and product of all number of array using reduve function
// let n = prompt("enter a number: ");
// let arr = [];
// //arr[0]=1; //not good way
// for(let i=1;i<=n;i++)
// {
//     arr[i-1]=i; //1(0),2(1),3(2),4(3)

// }
// console.log(arr);

// let sum = arr.reduce((res ,curr) => {
//     return res+curr;
// });
// console.log("sum=",sum);

// let factorial = arr.reduce((res,curr) => {
//     return res*curr;
// });
// console.log("factorial=",factorial);

//practice questions on functions
//console.log(typeof function(){});
//arow function inherit thus from their surrowding scope
//hoisting => function are deleted after execution

// function sum(x,y){
//     return x+y;
// }
// console.log(show(5))

// function test() {
//   return;
// }
// console.log(test());

// function outer() {
//   let x = 10;
//   function inner() {
//     console.log(x);
//   }
//   inner();
// }
// outer();

// function counter() {
//   let count = 0;
//   return function() {
//     count++;
//     return count;
//   };
// }

// const c1 = counter();
// console.log(c1());
// console.log(c1());

// function sum(...numbers){
//     return numbers.reduce((a,b) => a+b);

// }
//clousure function jiase hm koi function global scope me declare krte hai vase hota hai 

// let grade="A";
// let student;
// let num =prompt("enter student",student);
// switch (student){
//     case 'A':
//         console.log("grade A");
//     case 'B':
//         console.log("grade B");
//     case 'C':
//         console.log("grade C");
//     case 'D':
//         console.log("grade D");
//     default:
//         console.log("fail");
// }

//let num=5; //global scope accessible all over function
// function multiplier(a,b)
// {
//     let num=5; //function scope only accessible in function
//     console.log(a**b);
//     console.log(num);
    
// }
// multiplier(2,3);
// console.log(num);

//sorting of function
//ascending order
// let numbers = [10, 5, 20, 1];
// numbers.sort((a, b) => a - b);
// console.log(numbers.sort);



//assignment javascript
//program 1
//city sensor normalisation system
// let temperature = "34.7";
// let humidity = "65";
// let rainDetected = "false";
// let windSpeed = "12.5";
// let whetherAlert=(temperature > 35 && humidity>60 )
// console.log(whetherAlert);
// if(rainDetected= true || windSpeed>15){
//     console.log("Storm Warning");
// }
// else{
//     console.log("Whether Normal");
// }

//program 2
//elecrticity billing engine
// let unitsConsumed = "275";
// let pricePerunit = "6.5";
// let subsidyAvailable = "true";
// let totalbill=(unitsConsumed * pricePerunit);
// if(subsidyAvailable == true)
//     {
//     let bill=totalbill-(10/100);
//     if(totalbill > 1500)
//         {
//         let tax = totalbill+18/100;
//     }
// }
// console.log(totalbill);

//program 3
// let callCount = "7";
// let fireAlert = "true";
// let medicalAlert = "false";
// let policeAlert = "false";
// let trueAlerts = 0;
// if (fireAlert) 
//     trueAlerts++;
// if (medicalAlert) 
//     trueAlerts++;
// if (policeAlert) 
//     trueAlerts++;
// if (trueAlerts >= 2)
// {
//     console.log("HIGH PRIORITY");
// } 
// else if (callCount >= 8)
// {
//     console.log("MEDIUM PRIORITY");
// }
//  else
// {
//     console.log("LOW PRIORITY");
// }


//data types
// let name="neha"
// let age = 18;
// let message= ('my name is ${name} and I am ${age} years old');
// console.log(message);


//sum of two number
// let a= 5;
// let b=10;
// sum= '(sum of this two number is ${a} + ${b} is ${a + b}');



//loops
//for in loop
//for(variable in object)
// let student = {
//     name : "neha",
//     age : 18,
//     uni : "chitkara",
// }
// for(let key in student)
// {
//     console.log(key + ":"+student[key]);
// }

//for of loop

//for(variable of literals)

// let numbers = [10,20,30,40]
// for(let value of numbers)
// {
//     console.log(value);
// }

//assognment 1
// arr = [10,20,30,40]
// console.log(arr);
// console.log(arr[0]);
// arr.push(50);
// arr.pop();
// console.log(arr);

//assignment 2
// fruits = ["apple","litchi","banana","grapes"];
// console.log(fruits.length);
// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }

// console.log(fruits[1]);
// console.log(fruits[2]);
// fruits[0] = "Mango";
// console.log(fruits);

//assignment 3
// let student = {
//     name: "neha",
//     age: 18,
//     course: "CSE",
// }
// console.log(student);
// console.log(student.name);
// student.age = 19;
// student.city = "bathinda";
// console.log(student);

//assignent 4
// mobile = {
//     brand: "BMW",
//     price: "1000k",
//     color: "white",

// }
// console.log(mobile.brand);
// console.log(mobile.price);
// mobile.color= "black";
// mobile.isAvailable = "yes";
// console.log(mobile);

//assignment 5
// console.log("javascript is easy");
// console.info("good language");
// console.warn("hello")
// console.error("good");
// var sub = "js";
// console.log(sub);
// console.log(typeof(name));


//asignment 6
// arr = ["blue","red","yellow"];
// console.log(arr);
// arr.push("pink");
// arr.unshift("brown");
// arr.pop();
// console.log(arr);


//assignment 7
// arr = ["bombay","mumbai","kolkata","delhi","dubai"];
// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr[arr.length-1]);
// arr[2]= "ropar";
// console.log(arr);

//assignment 8
// let total;
// let i;
// let marks=[98,97,95,96,95];

//     for(i in marks)
//     {
//         console.log(marks[i]);
//         i++;
    
//     let total +=i;
//     }
       

    
//     let avg = total/4;
//     console.log(avg);

//     if(avg>=40)
//         console.log("Pass");
//     else
//         console.log("Fail");

    //assignment 9
    // sub = ["math","os","c","python","deca"];
    // sub.push();
    // sub.pop();
    // sub.shift();
    // sub.unshift();
    // console.log(sub);

    // //assignment 10
    // let number = [1,2,3,4,5,6,7,8,9,10];
    // console.log(number);
    // let number1 = number.slice(2,6);
    // console.log(number1);

    //assignment 11
    // student = {
    //     name: "neha",
    //     rollNo: 163,
    //     marks: 90,
    // }
    // console.log(student);
    // student.marks = 92;
    // student.grade = 'A';
    // console.log(student);
  
//assignment 12
// person = {
//     firstName : "neha",
//     lastName : "garg",
// }
// console.log(person.firstName);
// person.homecity = "bathinda";
// console.log(person);

//assignment 13
// car = {
//     brand :"bmw",
//     model : "ald",
//     year: 3,
// }
// for(let key in car){
//     console.log(key);
// }
// for(let key in car)
// {
//     console.log(car[key]);
// }
// for(let key in car)
// {
//     console.log(key +":"+ car[key])
// }
// let count=0;
// for(let key in car)
// {
//     count++;
// }
// console.log("\n Total properties:",count);

//assignment 14
// let employee ={
//     name: "neha",
//     id : 163,
//     adress:{
//         city: "bathinda",
//         pincode: 151001,
//  }
// }
// console.log(employee.adress.city);
// employee.adress.pincode = 151009;
// console.log(employee);


//assignment 15




//assignment 17 
// var num = 3;
// var str = "neha";
// var bolean = "true";
// for(let key in )




//assignment 18
// product = {
//     name : "neha",
//     roll : 163,
//     uni : "chitkara",
// }
// console.table(product);
// product1 =["neha","163","chitkara"];
// console.table(product1);

//assignment 19
// school = {
//     name : "neha",
//     city: "bathinda",
// }
//     school.classes = ["neha","uni","age"],
//     console.log(school.classes);
//     school.classes.push("hii");
//     console.log(school.classes);

//assognment 20
// num=[1,2,3,4,5];
// for(let key in num);
// obj = {
//     resylt
// }

// const number=[1,2,3];
// number.forEach(function(num)
// {
//     console.log(num);
// });

//functions expression
// let greet = function()
// {
//     console.log("hello");
// };

// //callback function
// function greet(name,callback){
//     console.log("hello" + name);
//     callback();
// }
// function sayGoodbye()
// {
//     console.log("Goodbye");
// }
// //passing saygoodbye as a callback function

//single line return in arroe function
//using arrow function
// const add= (a,b) => {
//     return a+b;
// };
// console.log(add(3,4));

// console.log(add(4,6));


//arrow functio
// function outer()
// {
//     let message = "hello from outer";
//     function inner()
//     {
//         console.log(message);
//     }

// inner(); // show lexical scope because inner()
// //can see message because it is written inside outer
// }
// outer();

//example 

// const n = [1, 2, 3];

// n.forEach((num) => console.log(num * 2));

// //FIND
// const n = [1, 2, 3, 4, 5];

// const fEven = n.find((num) => num % 2 === 0);

// console.log(fEven);

// function greet(...value){
//     console.log(value);
// }
// greet(10,20,30,40,50,60);
    
//all passses argument are packet into an arrau

//sum of any number



// function sum(...value)
// {
//     let total=0;
//     for(let n of value){
//         total+=n;
//     }
//     return total;
// }
//     sum(3,4);
//     sum(4,6,5,6);

//
// let m1=prompt("enter the marks of 1st subject: ");
// let m2=prompt("enter the marks of 2nd subject: ");
// let m3=prompt("enter the marks of 3rd subject: ");
// let m4=prompt("enter the marks of 4th subject: ");
// let m5=prompt("enter the marks of 5th subject: ");
// let a=prompt("enter attendence: ");
// let m1=98;
// let m2 = 97;
// let m3 = 96;
// let m4 = 97;
// let m5 = 96;
// let a = 90;
// let t=m1+m2+m3+m4+m5;
// console.log(t);
// let p=t/5;
// console.log(p);

// if (p>=90){
//     console.log("grade A");
// }
// else if(p>=80 && p<=89)
// {
//     console.log("grade B");
// }
// else if(p>=70 && p<=79)
// {
//     console.log("grade C");
// }
// else if(p>=60 && p<=69)
// {
//     console.log("grade C");
// }
// else{
//     console.log("fail");
// }
//  if(p>=60){
//     console.log("Pass");
//  }
//  else{
//     console.log("Fail");
//  }
//  if (p>=85 && a>=90){
//     console.log("Full Scholarship");
//  }
//  else if(p>=75 && a>=80){
//     console.log("Half Schlorship");
//  }
//  else {
//     console.log("No schlorship");
//  }


//assignment 2
// let units = prompt("enter units:");

// if(units<=100){
//     let rate = units*2;
//     console.log(rate);
// }
// else if(units>100 && units<=200){
//     let rate = units*3;
//     console.log(rate);
// }
// else{
//     let rate = units*5;
//     console.log(rate);
// }
// if(rate>1000){
//     tax=rate*10/100;
//     console.log(tax);
// }
// else if(rate>2000){
//     tax=rate*15/100;
// }
// else
//     console.log("invalid input");

//assignment 3
// username = prompt("enter the username:");
// password = prompt("enter password");
// attempts = prompt("enter attempts");
// if (username=="hello"){
//     console.log(username);
// }
// else{
//     console.log("User not found");
// }
// if(attempts<3)
// {
//     console.log("Incorrect password");
// }
// else{
//     console.log("Account locked");
// }
// if(username=="hello" && password==1234){
//     if(attempts>=3){
//         console.log("Contact admin");

//     }
//     else{
//         console.log("Login successfully");
//     }
// }

//assignment 4
// age = prompt("enter age:");
// license = prompt("license available:");
// rule=prompt("number of rule violations:");
// if(age<16){
//     console.log("Not egligible");
// }
// else if(age>=16 && age<18){
//     console.log(license);
//     console.log(rule);
// }
// else{
//     if (rule==0 && license=="yes")
//     {
//         console.log("Eligible ");
//     }
//     else if(rule == 1)
//     {
//         console.log("Warning issued")
//     }
//     else if (rule == 2){
//         console.log("License rejected");
//     }
// }

//assignment 5
// salary = prompt("enter employee salary:");
// experience = prompt("no of experience year:");
// rating=prompt("performance:");
// let salary = 200000;
// let experience = 6;
// rating = 6; 
// let finalsalary = salary;
// if(experience >=10 && rating>=4)
// {
//     finalsalary += salary*20/100;
// }
// else if(experience >=5 && rating>=3){
//     finalsalary +=salary*10/100;
  
// }
// else{
//     console.log("No bonus");
// }
// if(salary > 100000){
//     finalsalary -= salary *5/100;
  
// }
// else if(salary<25000 && rating>=4){
//     finalsalary+= 5000;
  
// }
//console.log(finalsalary);

//assignment 6
// amount = prompt("enter amount:");
// method = prompt("enter method");
// premiumMember = prompt("enter member:");

/*let amount = 6000;
let paymethod = "UPI";
let premium = 'yes';
let discount=0;
let orgamt=amount;
if (premium == "yes"){
    if(amount>=5000 ) 
    {
        discount += amount*0.2;
   
    }
    else if(amount>=3000){
        discount += amount*0.1;
    }
}
else{
    if(amount>=5000){
        discount+=amount*0.1;
    }
}
let finalAmount=amount-discount;
if (paymethod=="UPI"){
    let upiDiscount=amount*0.05;
    if (upiDiscount>500){
        upiDiscount=500;
    }
    discount+=upiDiscount;
    finalAmount-=upiDiscount;
}
else if(paymethod=="card"){
    let cardDiscount=finalAmount*0.02;
    discount+=cardDiscount;
    finalAmount-=cardDiscount;
}
if (finalAmount>=1000){
    finalAmount+=50;
}
console.log(orgamt)
console.log(discount)
console.log(finalAmount)*/


//sum
//table 
//prime number or not prime
//fibonacci
//factorial
//rev
/*let n=Number(prompt("enter:"));
let a=0;
let b=1;
let i=1;
console.log(a);
console.log(b);
while(i<=n){
    let c=a+b;
    a=b;
    b=c;
    console.log(a);
    i++;
}*/

//REVERSE OF NUMBER
// n=prompt("enter number:");
// let r=0;
// let a;
// let rev=0;
// let n1=n;
// while(n>0){
//     a=n%10;
//     rev=rev*10+a;
//     n=Math.floor(n/10);
// }

// if(rev==n1){
//     console.log("pallindrone");
// }
// else{
//     console.log("not a pallindrine");
// }

// let n=12;
// let a=0;
// let b=1;
// for(let i=0;i<n;i++){
//     console.log(a);
//     let c= a+b;
//     a=b;
//     b=c;
// }

//with while loop
// let n=12;
// let a=0,b=1;
// let i=0;
// while(i<n){
//     console.log(a);
//     let c= a+b;
//     a=b;
//     b=c;
//     i++;
//}
//with recurison functiomn

//average 

// function avg(arr){
//     let avg;
//     let sum=0;
//     for(let i=0;i<arr.length;i++)
//     {
//         sum+=arr[i];
//         avg=sum/arr.length;
//     }
//     console.log(avg);
// }
// avg([1,2,3,4,5]);


// function sum(arr){
//     let sum=0;
//     for(let i=0;i<arr.length;i++)
//     {
//         sum+=arr[i];
//     }
//     console.log(sum);
// }
// sum([1,2,3,4,5]);
//console.log([1,2].forEach(x=>x*2))


//spread operator
// let arr = [10,20,30,40];
// let [a,b,...rest] = arr;

// console.log(a);
// console.log(b);
// console.log(rest);

//destructuring in javascript
//normal way 
// const arr = [10,20,30];
// const a=arr[0];
// const b=arr[1];
// const c=arr[2];
//console.l.og(a);
//console.log(b);
//console.log(c);
//console.log(d);
//destructing way
// const arr=[10,20,30,40];
// const[a,b,c,d]=arr;
// console.log(a); //10
// console.log(b);//20
// console.log(c);//30
// console.log(d);//40

//array destructing
const numbers=[10,20,30,40,50];
const[x,y,z]= numbers;
console.log(x);//10
console.log(y);//20
console.log(z);//30
console.log(...numbers); //spread operator
console.log([...numbers]); //print in form of array


//dom





