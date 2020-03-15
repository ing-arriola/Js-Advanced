//console.log is added to the Stack

console.log('first')
//But setTimeout is added to the Queue
setTimeout(() => {
    console.log('second')    
}, 2000);

console.log('third')

setTimeout(() => {
    console.log('fourth')    
}, 1000);

console.log('fifth')

//and finally promises are added to job Queue, by the way the job Queue has more priority tha Queue

new Promise((ans)=>{
    ans('i am a promise')
}).then(console.log)

//The order of execution of these code is:
/*
1. console.log: Due to Stack is execute always at first
2. promise: Due to job Queue has more priority than Queue
3. SetTime: Due to the priority of Queue
*/