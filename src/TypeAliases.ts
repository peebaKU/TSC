/*

tpye Name_TypeAlias = {
    property1: type1,
    ....
}

*/

type Employee = {
    id: number,
    name: string,
    salary: number,
    phone?: string //? i can not input this value ,because ? .
}
//using type alias

let emp1: Employee = {id: 1, name: "John", salary: 10000, phone: "1234567890"};
let emp2: Employee = {id: 2, name: "Smith", salary: 20000, phone: "1234567890"};
let emp3: Employee = {id: 3, name: "Mary", salary: 30000};

for(let emp of [emp1, emp2, emp3]){
    console.log(`Id: ${emp.id} Name: ${emp.name}  Salary: ${emp.salary}  Phone:${emp.phone}`);
}