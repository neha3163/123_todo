//1.
// function frequencyCount(arr){
//     let obj = {}

//     for(const num of arr){
//         obj[num] =(obj[num] || 0)+1
//     }
//     return obj;
// }
// const result = frequencyCount([1,2,2,3,1,4,2]);
// console.log(result);

//2.
// const students = [
//   { name: "Riya", department: "CSE" },
//   { name: "Amit", department: "IT" },
//   { name: "Rahul", department: "CSE" },
//   { name: "Neha", department: "ECE" },
//   { name: "karan", department: "IT" }
// ];
// const result = {};
// for (let student of students) {
//   let depart = student.department;
//   if (!result[depart]) {
//     result[depart] = [];
//   }
//   result[depart].push(student.name);
// }
// console.log(result);

//3.

// const employees = [
//   { name: "Rahul", department: "50000" },
//   { name: "Amit", department: "80000" },
//   { name: "Riya", department: "65000" },
//   { name: "Neha", department: "90000" },
// ];
// let highest = employees[0];

// for (let emp of employees) {
//   if (emp.salary > highest.salary) {
//       highest = emp;
//   }
// }

// console.log(highest);

//4.

const arr = [2,4,5,2,7,5,8,9,2];
const seen = {};
const duplicate = [];

for (let num of arr) {
  if (seen[num]) {
    duplicate.push(num);
  }
  else{
    seen[num]=true;
  }
  console.log(seen)
}