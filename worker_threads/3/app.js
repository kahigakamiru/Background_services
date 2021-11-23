const { StaticPool } = require('node-worker-threads-pool');

let num = [5,10,35,22]

// Create a static worker pool with 8 workers
const pool = new StaticPool({
    size: 5,
    task: './worker.js'
})


const newArr = num.map(myFunction)
function myFunction(num) {
    pool.exec({ num: num }).then( result => [
        console.log(`${result.num}th Fibonacci Number: ${result.fib}`)
    ]);
}
// pool.exec({ num: num }).then( result => [
//     console.log(`${result.num}th Fibonacci Number: ${result.fib}`)
// ]);

console.log("Execution in the parent thread complete");



// nums.map((num) => {
//     pool.exec({ num: num }).then( result => [
//         console.log(`${result.num}th Fibonacci Number: ${result.fib}`)
//     ]);
// })





