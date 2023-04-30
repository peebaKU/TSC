"use strict";
/*
//Type Assertion

//1.as
let username:unknown;
username = "Baramee";
// username.toUpperCase();  error because username is unknown
(username as string).toUpperCase(); // ถ้าใช้ as จะไม่ error เพราะเราบอกว่า username จะเป็น string แน่นอน

//2. <type>
console.log((<string>username).toUpperCase());


/*
// any & unknow
//unknow มีการตรวจสอบชนิดข้อมูล
function formatNumber(num: number) {
  return num.toFixed(2);
}
let amount: unknown = 50.12345;
    amount = "50.12345";
if (typeof amount === "number") {
  console.log(formatNumber(amount));
}



//any ไม่มีการตรวจสอบชนิดข้อมูล
function formatNumber(num: number) {
  return num.toFixed(2);
}
let amount: any = "50.12345";
amount = 50.12345;
console.log(formatNumber(amount));
*/
/*
let fname:string = "Baramee";
let age:number = 20;
let isWorking:boolean = false;

console.log(`My name is ${fname.toUpperCase()}
            and my age is ${age} and
            I'm working is ${(isWorking)?'Yes':'No'}`);
*/
