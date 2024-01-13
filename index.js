/* Your Code Here */

// ======================================== //
let array = ["Gray", "Worm", "Security", 1];

function createEmployeeRecord(array){

    let timeInEvents = [];
    let timeOutEvents = [];

    let cRecord = {
        'firstName': array[0],
        'familyName': array[1],
        'title': array[2],
        'payPerHour': array[3],
        'timeInEvents': timeInEvents,
        'timeOutEvents': timeOutEvents
    }

    return cRecord;

}
// let testEmployee = createEmployeeRecord(["Gray", "Worm", "Security", 1])
// console.log(testEmployee.firstName)
// ======================================== //


// ======================================== //
let twoRows = [
    ["moe", "sizlak", "barkeep", 2],
    ["bartholomew", "simpson", "scamp", 3]
  ]

function createEmployeeRecords(twoRows){

    let employeeRecords = twoRows.map(createEmployeeRecord)
    return employeeRecords; // returns objects in an array
}
// console.log(createEmployeeRecords(twoRows));
// ======================================== //


// =========================================== //
// let bpRecord = createEmployeeRecord(["Byron", "Poodle", "Mascot", 3]);
// let dateStamp = "2014-02-28 1400";

function createTimeInEvent(dateStamp){

    let TimeIn = {
        type: "TimeIn",
        hour: Number(dateStamp.split(' ')[1]),
        date: dateStamp.split(' ')[0]
    }

    // Add to timeInEvents of eRecord
    this.timeInEvents.push(TimeIn);
    return this
}
// let updatedBpRecord = createTimeInEvent.call(bpRecord, dateStamp);
// console.log(updatedBpRecord);
// console.log(updatedBpRecord.timeInEvents[0]);
// =========================================== //



// =========================================== //
function createTimeOutEvent(dateStamp){

    let TimeOut = {
        type: "TimeOut",
        hour: Number(dateStamp.split(' ')[1]),
        date: dateStamp.split(' ')[0]
    }

    // Add to timeInEvents of eRecord
    this.timeOutEvents.push(TimeOut);
    return this
}
// =========================================== //


// =========================================== //
function hoursWorkedOnDate(dateStampDay){

    // locate Date in record. TimeIn and TimeOut hours
    const objWithdateStampDayTOut = this.timeOutEvents.find(obj => obj.date === dateStampDay);
    const objWithdateStampDayTIn = this.timeInEvents.find(obj => obj.date === dateStampDay);
    let hoursWorked = objWithdateStampDayTOut.hour - objWithdateStampDayTIn.hour
    return parseInt((hoursWorked/100).toFixed(2));    

}
// =========================================== //


// =========================================== //
function wagesEarnedOnDate(dateStampDay){

    let wagesEarned;
    wagesEarned = hoursWorkedOnDate.call(this,dateStampDay) * this.payPerHour;
    return wagesEarned;

}
// =========================================== //


// =========================================== //
// let src = [
//     ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
//     ["Natalia", "Romanov", "CEO", 150]
//   ]
// let emps = createEmployeeRecords(src)
// let empName = "Loki";

function findEmployeeByFirstName(emps, empName){
    
    let empRecord = emps.find(obj => obj.firstName === empName)
    return empRecord
}
// let loki = findEmployeeByFirstName(emps, empName);
// console.log(loki.familyName);
// =========================================== //


// =========================================== //
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
// =========================================== //


// // =========================================== //
// let rRecord = createEmployeeRecord(["Rafiki", "", "Aide", 10])
// let sRecord = createEmployeeRecord(["Simba", "", "King", 100])

// let sTimeData = [
//   ["2019-01-01 0900", "2019-01-01 1300"], // 4 * 100 = 400
//   ["2019-01-02 1000", "2019-01-02 1300"]  // 3 * 100 = 300 ===> 700 total
// ]

// let rTimeData = [
//   ["2019-01-11 0900", "2019-01-11 1300"], // 4 * 10 = 40
//   ["2019-01-12 1000", "2019-01-12 1300"]  // 3 * 10 = 40 ===> 70 total ||=> 770
// ]

// sTimeData.forEach(function (d) {
//     let [dIn, dOut] = d
//     sRecord = createTimeInEvent.call(sRecord, dIn)
//     sRecord = createTimeOutEvent.call(sRecord, dOut)
//   })


// rTimeData.forEach(function (d, i) {
//     let [dIn, dOut] = d
//     rRecord = createTimeInEvent.call(rRecord, dIn)
//     rRecord = createTimeOutEvent.call(rRecord, dOut)
//   })

// let employees = [sRecord, rRecord]


function calculatePayroll(employees){
    
    let grandTotalOwed = employees.reduce((accum, currValue) => accum + allWagesFor.call(currValue), 0);
    return grandTotalOwed;
}
// console.log(calculatePayroll(employees))
// =========================================== //
