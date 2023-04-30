/*
stucture of function return object

const function's name  = ():object =>{

    return object
}
*/


const Person_1  = {
    name: "Baramee",
    age: 20,
}

const Person_2 :{name:string,age:number} = {
    name: "Tanakorn",
    age: 20,
}

const ShowDetail=(data:{name:string,age:number}):object =>{
    return{
        name: (data.name).toUpperCase(),
        age: data.age,
    }
}


console.log(ShowDetail(Person_1))
console.log(ShowDetail(Person_2))
