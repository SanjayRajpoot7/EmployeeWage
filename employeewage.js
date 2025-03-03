
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


const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

function getWorkingHours(empcheck){
    switch(empcheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;    
    }
}

// let empHrs = 0;
// let empcheck = Math.floor(Math.random() * 10 ) % 3;
// empHrs = getWorkingHours(empcheck);
// let empWage = empHrs * WAGE_PER_HOUR;
// console.log("Emp wage: "+empWage)


let empHrs = 0;
const NUM_OF_WORKING_DAYS = 2;
for(let day = 0; day < NUM_OF_WORKING_DAYS; day++){
    let empcheck = Math.floor(Math.random() * 10 ) % 3;
    empHrs += getWorkingHours(empcheck);
    
}

let empWage = empHrs * WAGE_PER_HOUR;
console.log("Total Hrs: "+empHrs+" Emp Wage: "+empWage)
