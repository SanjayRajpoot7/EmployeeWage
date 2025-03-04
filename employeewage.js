
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
let empDailyHrsAndWageArr = new Array();
let empDailyHrsMap = new Map();

// while(totalEmpHrs < MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
//     totalWorkingDays++;
//     let empCheck = Math.floor(Math.random() * 10) % 3;
//     let empHrs = getWorkingHours(empCheck);
//     totalEmpHrs += empHrs;
//     empDailyWageArr.push(calcDailyWage(empHrs));
// }


// let empWage = calcDailyWage(totalEmpHrs);
// console.log("UC6 - Total Days: "+ totalWorkingDays+" Total Hrs: "+totalEmpHrs +" Emp Wage: "+empWage)





// // 7A 
// let totEmpWage = 0;
// function sum(dailyWage){
//     totEmpWage += dailyWage;
// }

// empDailyWageArr.forEach(sum);
// console.log("UC7A - Total Days: "+ totalWorkingDays+" Total Hrs: "+totalEmpHrs +" Emp Wage: "+totEmpWage)

// function totalWages(totalWage, dailyWage) {
//     return totalWage + dailyWage;
// }
// console.log("UC7A - Emp Wage with reduce: "+ empDailyWageArr.reduce(totalWages, 0));


// // 7B 
// let dailyCntr = 0;
// function mapDailyWithDaily(dailyWage){
//     dailyCntr++;
//     return dailyCntr + " " + dailyWage;
// }

// let mapDayWithWageArr = empDailyWageArr.map(mapDailyWithDaily);
// console.log("UC7B - Daily Wage Map");
// console.log(mapDayWithWageArr);



// // 7C 
// function fullTimeWage(dailyWage) {
//     return dailyWage.includes("160");
// }

// let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
// console.log("UC7C - Daily Wage Filter When FullTime Wage Earned");
// console.log(fullDayWageArr);



// // 7D
// function findFullTimeWage(dailyWage) {
//     return dailyWage.includes("160");
// }
// console.log("UC7D - First time FullTime wage was earned on day: "+mapDayWithWageArr.find(findFullTimeWage))


// // 7E

// function isAllFullTimeWage(dailyWage){
//     return dailyWage.includes("160");
// }

// console.log("UC 7E - Check All time element have full time wage: "+fullDayWageArr.every(isAllFullTimeWage));


// // UC 7F
// function isAnyPartTimeWage(dailyWage){
//     return dailyWage.includes("80");
// }

// console.log("UC 7F - Check if any part time Wage: "+mapDayWithWageArr.some(isAnyPartTimeWage));



// // UC 7G 0 find the number of days the employee worked
// function totalDaysWorked(numOfDays, dailyWage){
//     if(dailyWage > 0)
//         return numOfDays + 1;
     
//     return numOfDays;
// }

// console.log("UC 7G - Number of days emp worked: "+empDailyWageArr.reduce(totalDaysWorked, 0));

// let empDailyWageMap = new Map();

// function calcDailyWage(empHrs){
//     return empHrs * WAGE_PER_HOUR;
// }

// while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
//     totalWorkingDays++;
//     let empCheck = Math.floor(Math.random() * 10) % 3;
//     let empHrs = getWorkingHours(empCheck);
//     totalEmpHrs += empHrs;
//     empDailyWageArr.push(calcDailyWage(empHrs));
//     empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
// }

// console.log(empDailyWageMap);

// function totalWages(totalWage, dailyWage){
//     return totalWage + dailyWage;
// }

// console.log("UC 8 - Emp wage map totalHrs: "+ Array.from(empDailyWageMap.values()).reduce(totalWages,0));





// let empDailyHrsMap = new Map(); // Create 
// empDailyHrsMap.set(1, 8);  
// empDailyHrsMap.set(2, 4);
// empDailyHrsMap.set(3, 0); 
// empDailyHrsMap.set(4, 8);
// empDailyHrsMap.set(5, 4); 

// // Define your daily wage array
// const findTotal = (totalVal, dailyVal) => {
//     return totalVal + dailyVal;
// }

// let count = 0;
// let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0);
// let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage > 0).reduce(findTotal, 0);
// console.log("UC 9A - Emp Wage with arrow: "+findTotal()+ " Total Hours: "+totalHours+" Total Wages: "+totalSalary);


let nonWorkingDays = new Array();
let partWokringDays = new Array();
let fullWokringDays = new Array();

empDailyHrsMap.forEach( (value, key, map) => {
   if(value == 8) fullWokringDays.push(key);
   else if(value == 4) partWokringDays.push(key);
   else nonWorkingDays.push(key);
})

console.log("Full Working Days: "+fullWokringDays);

console.log("Part Working Days: "+partWokringDays);

console.log("Non Working Days: "+nonWorkingDays);




while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyHrsAndWageArr.push({
        dayNum:totalWorkingDays,
        dailyHours:empHrs,
        dailyWage: calcDailyWage(empHrs),
        toString(){
            return '\nDay ' + this.dayNum + ' => Working Hours is ' + this.dailyHours + ' And Wage Earned = ' + this.dailyWage;
        },
    });
}
console.log("UC 10 showing daily hours worked and wage earned: "+empDailyHrsAndWageArr)
empDailyHrsAndWageArr.forEach(empDay => console.log(empDay.toString()));



let totalWagesCalculated = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
    .reduce((accumulatedWages, dailyHrsAndWage) => accumulatedWages += dailyHrsAndWage.dailyWage, 0);

let totalHoursCalculated = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
    .reduce((accumulatedHours, dailyHrsAndWage) => accumulatedHours += dailyHrsAndWage.dailyHours, 0);

console.log("UC 11A - Total Hours: "+totalHoursCalculated+" Total Wages: "+totalWagesCalculated);

process.stdout.write("UC 11B Logging Full Work Days")
empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8).forEach(dailyHrsAndWage => process.stdout.write(dailyHrsAndWage.toString()))

let partWorkingDayStrArr = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4).map(dailyHrsAndWage => dailyHrsAndWage.toString())
console.log("\nUC 11C PartWorking Day: "+partWorkingDayStrArr)

let nonWorkingDayNums = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0).map(dailyHrsAndWage => dailyHrsAndWage.dayNum);
console.log("\nUC 11D Non Working Day: "+nonWorkingDayNums);


class EmployeeWageData{
    id;
    name;
    salary;
    

    constructor(id, name, salary) {
        this.id = id;
        this.name = name; 
        this.salary = salary; 
    }

    get name(){
        return this.name;
    }

    
    set name(name){
        this.name = name;
    }

    get salary(){
        return this.salary;
    }
    set salary(salary){
        this.salary = salary;
    }

    get id(){
        return this.id;
    }
    set id(id){
        this.id = id;
    }


    toString(){
        return "id = " + this.id + ", name = " + this.name + ", salary = " + this.salary;
    }

}

let employeeWageData = new EmployeeWageData(1,"Raj",45000)
console.log(employeeWageData.toString());
employeeWageData.name = "Sanjay";
console.log(employeeWageData.toString());