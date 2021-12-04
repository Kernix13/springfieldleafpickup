const startYr = 2021;

/* 
VARIABLES THAT WILL BREAK THE OUTPUT IF THEY CHANGE:
  1. an increase or decrease in the number of precincts
  2. a change in the order of precincts in the schedules array
  3. week 1 leaf pickup date other than the first Monday in November
  4. an increase or decrease in the number of weeks for pickup

  VARIABLES THAT WILL BREAK THE OUTPUT IF THEY ARE NOT UPDATED:
  1. startYr - needs to be changed in year 11 for:
  2. yearDiff - will be greater than 10 starting in 2032, therefore startYr has to change or a loop in the code needs to be created to subtract 11 from yearDiff and recalculate it to get the correct schedules index
  3. updateDate - is dependend on the above 2 variables unless a loop is created for yearDiff. If that is done then the warning code at the bottom can be deleted.
*/

// The schedules repeat in year 12. Here are the 11 unique schedules with schedules[0] = 2021. Someone has to change the variable startYr (line 1 above) by Dec 31st 2031 or I need to create a while loop to compare the current year to 2021 and do some math to return the correct index #
const schedules = [
  ['4-1', '3-1', '7-2', '5-1', '6-2', '2-1', '1-3', '4-2', '3-3', '7-7', '5-7', '6-4', '6-3', '2-3', '1-1', '4-3', '3-2', '7-1', '5-2', '6-1', '2-2', '1-2'],
  ['2-2', '1-2', '4-1', '3-1', '7-2', '5-1', '6-2', '2-1', '1-3', '4-2', '3-3', '7-7', '5-7', '6-4', '6-3', '2-3', '1-1', '4-3', '3-2', '7-1', '5-2', '6-1'],
  ['5-2', '6-1', '2-2', '1-2', '4-1', '3-1', '7-2', '5-1', '6-2', '2-1', '1-3', '4-2', '3-3', '7-7', '5-7', '6-4', '6-3', '2-3', '1-1', '4-3', '3-2', '7-1'],
  ['3-2', '7-1', '5-2', '6-1', '2-2', '1-2', '4-1', '3-1', '7-2', '5-1', '6-2', '2-1', '1-3', '4-2', '3-3', '7-7', '5-7', '6-4', '6-3', '2-3', '1-1', '4-3'],
  ['1-1', '4-3', '3-2', '7-1', '5-2', '6-1', '2-2', '1-2', '4-1', '3-1', '7-2', '5-1', '6-2', '2-1', '1-3', '4-2', '3-3', '7-7', '5-7', '6-4', '6-3', '2-3'],
  ['6-3', '2-3', '1-1', '4-3', '3-2', '7-1', '5-2', '6-1', '2-2', '1-2', '4-1', '3-1', '7-2', '5-1', '6-2', '2-1', '1-3', '4-2', '3-3', '7-7', '5-7', '6-4'],
  ['5-7', '6-4', '6-3', '2-3', '1-1', '4-3', '3-2', '7-1', '5-2', '6-1', '2-2', '1-2', '4-1', '3-1', '7-2', '5-1', '6-2', '2-1', '1-3', '4-2', '3-3', '7-7'],
  ['3-3', '7-7', '5-7', '6-4', '6-3', '2-3', '1-1', '4-3', '3-2', '7-1', '5-2', '6-1', '2-2', '1-2', '4-1', '3-1', '7-2', '5-1', '6-2', '2-1', '1-3', '4-2'],
  ['1-3', '4-2', '3-3', '7-7', '5-7', '6-4', '6-3', '2-3', '1-1', '4-3', '3-2', '7-1', '5-2', '6-1', '2-2', '1-2', '4-1', '3-1', '7-2', '5-1', '6-2', '2-1'],
  ['6-2', '2-1', '1-3', '4-2', '3-3', '7-7', '5-7', '6-4', '6-3', '2-3', '1-1', '4-3', '3-2', '7-1', '5-2', '6-1', '2-2', '1-2', '4-1', '3-1', '7-2', '5-1'],
  ['7-2', '5-1', '6-2', '2-1', '1-3', '4-2', '3-3', '7-7', '5-7', '6-4', '6-3', '2-3', '1-1', '4-3', '3-2', '7-1', '5-2', '6-1', '2-2', '1-2', '4-1', '3-1']

];

// Get day of week for November 1st for the current year
const d = new Date();
const year = d.getFullYear();
let currentNovFirst = '11/01/' + year;
let novFirstDay = new Date(currentNovFirst).getDay();

// Given the current year, find the day of the week for the 1st of Nov then return the date for the first Monday in November 
switch (novFirstDay) {
  case 0:
    weekOne = new Date(`11/1/${year}`)
    break;
  case 1:
    weekOne = new Date(`11/1/${year}`)
    break;
  case 2:
    weekOne = new Date(`11/1/${year}`)
    break;
  case 3:
    weekOne = new Date(`11/1/${year}`)
    break;
  case 4:
    weekOne = new Date(`11/1/${year}`)
    break;
  case 5:
    weekOne = new Date(`11/1/${year}`)
    break;
  case 6:
    weekOne = new Date(`11/1/${year}`)
}

// Do I need this variable?
const weeks = [1, 2, 3, 4, 5, 6];

/* CALCULATING AND FORMATTING THE MONDAY DATES FOR THE 6 WEEKS */
// https://www.geeksforgeeks.org/increment-a-given-date-in-javascript/
// D.R.Y: I would like to remove the duplicate code below but I can't use forEach because I have different multiplicative values for the ms/day for week1 (NONE), week2 (8) and 7 for the remaining 4 weeks. What is the solution or is the code tight enough?

let week1 = new Date(), week2 = new Date(), week3 = new Date(), week4 = new Date(), week5 = new Date(), week6 = new Date();

const format = { year: "numeric", month: "short", day: "numeric" };

week1.setTime(weekOne.getTime());
week1Format = week1.toLocaleDateString('en-us', format);

week2.setTime(weekOne.getTime() + 8 * 86400000);
week2Format = week2.toLocaleDateString('en-us', format);

week3.setTime(week2.getTime() + 7 * 86400000);
week3Format = week3.toLocaleDateString('en-us', format);

week4.setTime(week3.getTime() + 7 * 86400000);
week4Format = week4.toLocaleDateString('en-us', format);

week5.setTime(week4.getTime() + 7 * 86400000);
week5Format = week5.toLocaleDateString('en-us', format);

week6.setTime(week5.getTime() + 7 * 86400000);
week6Format = week6.toLocaleDateString('en-us', format);

// Calculate 'schedules' index for the current year and out put the schedule and dates into the DOM
let yearDiff = year - startYr;
let currentYearSchedule = schedules[yearDiff];
let cys = currentYearSchedule;
const ol = document.getElementById("weekly_schedule");

for (let i = 0; i < cys.length; i++) {

  let outputBegin = `<li><span class="precinct">${cys[i]}</span><span class="dots">.........</span><span class="text">Collected the week of: </span><span class="date">`;

  let weekIndices1 = [0, 1, 2, 3];
  let weekIndices2 = [4, 5, 6];
  let weekIndices3 = [7, 8, 9, 10];
  let weekIndices4 = [11, 12, 13];
  let weekIndices5 = [14, 15, 16, 17];
  // let weekIndices6 = [18, 19, 20, 21];

  if (weekIndices1.includes(i)) {

    let outputEnd = `<strong><em>${week1Format}</em></strong></span></li>`;
    ol.insertAdjacentHTML("beforeend", outputBegin + outputEnd);

  } else if (weekIndices2.includes(i)) {

    let outputEnd = `<strong><em>${week2Format}</em></strong></span></li>`;
    ol.insertAdjacentHTML("beforeend", outputBegin + outputEnd);

  } else if (weekIndices3.includes(i)) {

    let outputEnd = `<strong><em>${week3Format}</em></strong></span></li>`;
    ol.insertAdjacentHTML("beforeend", outputBegin + outputEnd);

  } else if (weekIndices4.includes(i)) {

    let outputEnd = `<strong><em>${week4Format}</em></strong></span></li>`;
    ol.insertAdjacentHTML("beforeend", outputBegin + outputEnd);

  } else if (weekIndices5.includes(i)) {

    let outputEnd = `<strong><em>${week5Format}</em></strong></span></li>`;
    ol.insertAdjacentHTML("beforeend", outputBegin + outputEnd);

  } else {

    let outputEnd = `<strong><em>${week6Format}</em></strong></span></li>`;
    ol.insertAdjacentHTML("beforeend", outputBegin + outputEnd);
  }

};

// https://www.freecodecamp.org/news/how-to-format-dates-in-javascript/ and https://www.tabnine.com/academy/javascript/how-to-format-date/ 
// let test = new Date(`11/1/${year}`).toLocaleDateString('en-us', { weekday: "short", year: "numeric", month: "short", day: "numeric" })
// console.log(test);

/* WARNING MESSAGE FOR DATE CHANGES IN LATE 2031 - change 12/01/31 to 12/01/21 to see it */
const updateDate = new Date(`12/01/31`);
const currentDate = new Date();
const updateWarning = document.getElementById("update_warning");
if (currentDate > updateDate) {
  updateWarning.innerHTML = '<span>If you see this message and it is 2032, then the schedule below is WRONG! You have until 12/31/31 to update the <em class="black">date</em> variable in <em class="black">leafpickup.js</em>. On line 1 of that file you will see: <em class="black">const startYr = 2021</em>. Change the year <em class="black">2021</em> to <em class="black">2032</em> for the schedule to be accurate for the next 11 years. Repeat the date change in <em class="black">2041</em> for the next 11 years, and so on... This assumes that the pickup schedule and number of precincts remain the same. To make this warning message disappear, change the date in the variable at the bottom of the page (<em class="black">const updateDate = new Date(`12/01/21`)</em>) from <em class="black">12/01/21</em> to <em class="black">12/01/31</em>.</span>';
};