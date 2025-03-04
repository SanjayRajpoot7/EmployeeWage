
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


// Employee wage Data class

class EmployeeWageData {
    // Private variables
    _id;
    _name;
    _salary;
    _gender;
    _startDate;

    constructor(...params) {
        this.id = params[0];  // Using setter for validation
        this.name = params[1];  // Using setter for validation
        this.salary = params[2];  // Using setter for validation
        this.gender = params[3];  // Using setter for validation
        this.startDate = params[4];  // Using setter for validation
    }

    get name() {
        return this._name;
    }

    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (nameRegex.test(name)) {
            this._name = name;
        } else {
            throw "Name is Incorrect!";
        }
    }

    get salary() {
        return this._salary;
    }

    set salary(salary) {
        if (salary > 0) {
            this._salary = salary;
        } else {
            throw "Salary must be positive!";
        }
    }

    get id() {
        return this._id;
    }

    set id(id) {
        if (id > 0) {
            this._id = id;
        } else {
            throw "ID must be positive!";
        }
    }

    get gender() {
        return this._gender;
    }

    set gender(gender) {
        if (gender === "M" || gender === "F") {
            this._gender = gender;
        } else {
            throw "Gender must be 'M' or 'F'!";
        }
    }

    get startDate() {
        return this._startDate;
    }

    set startDate(startDate) {
        if (startDate instanceof Date) {
            this._startDate = startDate;
        } else {
            throw "Start date must be a valid date!";
        }
    }

    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = !this._startDate ? "undefined" : this._startDate.toLocaleDateString("en-US", options);
        return "id = " + this._id + ", name = " + this._name + ", salary = " + this._salary + ", gender = " + this._gender + ", startDate = " + empDate;
    }
}

try {
    let employeeWageData = new EmployeeWageData(1, "aaj", 45000, "M", new Date());  // Invalid name
    console.log(employeeWageData.toString());
} catch (e) {
    console.log(e);  // This should print "Name is Incorrect!"
}

try {
    let employeeWageData = new EmployeeWageData(2, "Sanjay", 45000, "S", new Date());  
    console.log(employeeWageData.toString()); 
} catch (e) {
    console.log(e);
}

try {
    let newEmployeeWageData = new EmployeeWageData(3, "Raju", 65000, "M", new Date());
    console.log(newEmployeeWageData.toString());
} catch (e) {
    console.log(e);
}
