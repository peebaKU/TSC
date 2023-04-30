"use strict";
/*

โครงสร้างของ Arrow function

const ชื่อฟังก์ชัน = (พารามิเตอร์: ประเภทของพารามิเตอร์) : ประเภทของค่าที่ส่งกลับ => {
    คำสั่งต่างๆ
    return ค่าที่ต้องการส่งกลับ
}

*/
const myfunction = (value) => {
    if (typeof value === "string") {
        return `This is ${value}`;
    }
    else {
        return `This is ${value}`;
    }
};
const showEmployee = (name, age, adress = "BANKOK") => {
    console.log(`Name: ${name} Age: ${age} Adress: ${adress} `);
};
console.log(myfunction("BARAMEE"));
showEmployee("Baramee", 20, "LAMPHUN");
showEmployee("Jojo", 18);
