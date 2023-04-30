"use strict";
//function
//ฟังชั้นที่ไม่มีการรับค่าและส่งค่า(void)
function sayHello1() {
    console.log("Hello from sayHello1");
}
//ฟังชั้นที่มีการรับค่า
function sayHello2(name) {
    console.log(`Hello ${name} from sayHello2`);
}
//ฟังชั้นที่มีการรคืนค่า
function sayHello3() {
    return `Hello  from sayHello3`;
}
//ฟังชั้นที่มีการรับค่าและส่งค่า
function sayHello4(name) {
    return `Hello ${name} from sayHello4`;
}
//ฟังชั้นที่ไม่รมีการรับค่าและส่งค่า
sayHello1();
sayHello2("Baramee");
console.log(sayHello3());
console.log(sayHello4("Baramee"));
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
