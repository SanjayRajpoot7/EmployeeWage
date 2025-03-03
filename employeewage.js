
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

function calcDailyWage(empHrs){
    return empHrs * WAGE_PER_HOUR;
}

const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS = 20;
let empHrs = 0;
let totalEmpHrs = 0;
let totalWorkingDays = 0;

let empDailyWageArr = new Array();

while(totalEmpHrs < MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}


let empWage = calcDailyWage(totalEmpHrs);
console.log("UC6 - Total Days: "+ totalWorkingDays+" Total Hrs: "+totalEmpHrs +" Emp Wage: "+empWage)