//Example of explicit binding

function person(skill1,skill2){
    console.log(`Hello i am ${this.personName} and some of my development skills are ${skill1} and ${skill2}`)
}

const information={
    personName:"Jaime",
    job:"Web Developer"
}

skills=['Vanilla JS','React JS']

//call, apply and bind are methods included in any object

//Explicit binding with call needs that when you pass an array, you have to specify one by one the elements
//of the array
person.call(information,skills[0],skills[1])

//using apply you dont need to specify how many elements has the array
person.apply(information,skills)

//Finally you can use bind, it creates a new function.. let's see
const newFunction=person.bind(information,skills[0],skills[1])

newFunction()