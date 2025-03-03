
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





// 7A 
let totEmpWage = 0;
function sum(dailyWage){
    totEmpWage += dailyWage;
}

empDailyWageArr.forEach(sum);
console.log("UC7A - Total Days: "+ totalWorkingDays+" Total Hrs: "+totalEmpHrs +" Emp Wage: "+totEmpWage)

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("UC7A - Emp Wage with reduce: "+ empDailyWageArr.reduce(totalWages, 0));


// 7B 
let dailyCntr = 0;
function mapDailyWithDaily(dailyWage){
    dailyCntr++;
    return dailyCntr + " " + dailyWage;
}

let mapDayWithWageArr = empDailyWageArr.map(mapDailyWithDaily);
console.log("UC7B - Daily Wage Map");
console.log(mapDayWithWageArr);



// 7C 
function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}

let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("UC7C - Daily Wage Filter When FullTime Wage Earned");
console.log(fullDayWageArr);



// 7D
function findFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC7D - First time FullTime wage was earned on day: "+mapDayWithWageArr.find(findFullTimeWage))


// 7E

function isAllFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}

console.log("UC 7E - Check All time element have full time wage: "+fullDayWageArr.every(isAllFullTimeWage));


// UC 7F
function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80");
}

console.log("UC 7F - Check if any part time Wage: "+mapDayWithWageArr.some(isAnyPartTimeWage));



// UC 7G 0 find the number of days the employee worked
function totalDaysWorked(numOfDays, dailyWage){
    if(dailyWage > 0)
        return numOfDays + 1;
     
    return numOfDays;
}

console.log("UC 7G - Number of days emp worked: "+empDailyWageArr.reduce(totalDaysWorked, 0));