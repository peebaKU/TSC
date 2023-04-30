"use strict";
/*
stucture of funget object

const function's name  =(object):void {

   other command
}
*/
const Person1 = {
    name: "Baramee",
    age: 20,
};
const Person2 = {
    name: "Tanakorn",
    age: 20,
};
const showDetail = (data) => {
    console.log(`Name = ${(data.name).toUpperCase()} Age = ${data.age}`);
};
showDetail(Person1);
showDetail(Person2);
