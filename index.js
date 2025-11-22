let CurrentDate = new Date()
// console.log(CurrentDate);
let Years = document.getElementById("years")
let Months = document.getElementById("months")

let Days = document.getElementById("days")








// let EnterValue=EnterData.ariaValueMax;

// console.log(EnterValue);     


function ShowDate(){

    let dob = document.getElementById("birthdate").value;

    if (!dob) {
        document.getElementById("result").innerText = "Please select your date of birth!";
        return;
    }

    let birth = new Date(dob);
    let today = new Date();

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    // Adjust days
    if (days < 0) {
        months--;
        let prevMonthDays = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        days += prevMonthDays;
    }

    // Adjust months
    if (months < 0) {
        years--;
        months += 12;
    }

    Years.innerText = years
    Months.innerText = months

    Days.innerText = days



}




