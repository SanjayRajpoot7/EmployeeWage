
const randomValue = Math.random();
let check;

if (randomValue >= 0 && randomValue <= 0.5) {
    check = "Employee is Absent";
    console.log("Employee is Absent")
    return;
} else {
    check = "Employee is Present"; 
}

console.log(check)



const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter working time: ', (time) => {

switch(time){
    case '8':
        console.log("Employee type full time and wage in dollor: "+(8*20))
        break;
    case '4':
        console.log("Employee type part time and wage in dollor: "+(4*20));
        break;
    default:
        console.log('Invalid employee type');
        break;
}
});


