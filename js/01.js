//The keyword this allows you to reuse functions with different context i.e. in differents objects

//This with implicit binding

const user={
    userName:'jaime',
    age:30,
    presentation(){
        console.log(`Hello my name is ${this.userName} and i'm ${this.age} years old `)
    },
    //Here with "this" we access to values on the variables inside the object 
    pet:{
        petName:"fluffy",
        age:2,
        presentation(){
            console.log(`The name of the pet is ${this.petName} and it has ${this.age} years`)
        }
        //Here due to the "this" operator the "age" variable 'knows' that we are refferering to the
        //age of the pet and no to the age of the user, even when both variables has the same name
    }
}

user.presentation()

user.pet.presentation()