let startYr = 2021;

// The 11 year cycle of schedules
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

// check the current year and update the startYr variable. This will create an accurate schedule until 2042, but will break the page starting on 1/1/2043.
if (year < 2032) {
  let startYr = 2021;
} else if (year >= 2032 && year <= 2042) {
  let startYr = 2032;
}

// For the current year, find the day of the week for the 1st of Nov then return the date for the first Monday in November 
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


/* CALCULATING AND FORMATTING THE MONDAY DATES FOR THE 6 WEEKS */
let week1 = new Date(), week2 = new Date(), week3 = new Date(), week4 = new Date(), week5 = new Date(), week6 = new Date();

const format = { year: "numeric", month: "short", day: "numeric" };

week1.setTime(weekOne.getTime());
week1Format = week1.toLocaleDateString('en-us', format);

week2.setTime(week1.getTime() + 8 * 86400000);
week2Format = week2.toLocaleDateString('en-us', format);

/* SHOULD BE ABLE TO DO A forEach LOOP HERE */
week3.setTime(week2.getTime() + 7 * 86400000);
week3Format = week3.toLocaleDateString('en-us', format);

week4.setTime(week3.getTime() + 7 * 86400000);
week4Format = week4.toLocaleDateString('en-us', format);

week5.setTime(week4.getTime() + 7 * 86400000);
week5Format = week5.toLocaleDateString('en-us', format);

week6.setTime(week5.getTime() + 7 * 86400000);
week6Format = week6.toLocaleDateString('en-us', format);

/* Calculate 'schedules' index for the current year */
let yearDiff = year - startYr;
let currentYearSchedule = schedules[yearDiff];
let cys = currentYearSchedule;
const ol = document.getElementById("weekly_schedule");

/* Output the schedule and dates into the DOM */
for (let i = 0; i < cys.length; i++) {

  // span.dots is to add the dots that are used on the 2 PDF files I found online. I'm sure that can be removed.
  let outputBegin = `<li><span class="precinct">${cys[i]}</span><span class="dots">.........</span><span class="text">Collected the week of: </span><span class="date"><strong><em>`;

  const weekIndices1 = [0, 1, 2, 3];
  const weekIndices2 = [4, 5, 6];
  const weekIndices3 = [7, 8, 9, 10];
  const weekIndices4 = [11, 12, 13];
  const weekIndices5 = [14, 15, 16, 17];
  // let weekIndices6 = [18, 19, 20, 21];

  if (weekIndices1.includes(i)) {
    let outputEnd = `${week1Format}</em></strong></span></li>`;
    ol.insertAdjacentHTML("beforeend", outputBegin + outputEnd);
  } else if (weekIndices2.includes(i)) {
    let outputEnd = `${week2Format}</em></strong></span></li>`;
    ol.insertAdjacentHTML("beforeend", outputBegin + outputEnd);
  } else if (weekIndices3.includes(i)) {
    let outputEnd = `${week3Format}</em></strong></span></li>`;
    ol.insertAdjacentHTML("beforeend", outputBegin + outputEnd);
  } else if (weekIndices4.includes(i)) {
    let outputEnd = `${week4Format}</em></strong></span></li>`;
    ol.insertAdjacentHTML("beforeend", outputBegin + outputEnd);
  } else if (weekIndices5.includes(i)) {
    let outputEnd = `${week5Format}</em></strong></span></li>`;
    ol.insertAdjacentHTML("beforeend", outputBegin + outputEnd);
  } else {
    let outputEnd = `${week6Format}</em></strong></span></li>`;
    ol.insertAdjacentHTML("beforeend", outputBegin + outputEnd);
  }

};

/*
VARIABLES THAT WILL BREAK THE OUTPUT IF THEY CHANGE:
  1. An increase or decrease in the number of precincts
  2. A change in the order of precincts in the schedules array
  3. Week 1 leaf pickup date other than the first Monday in November
  4. An increase or decrease in the number of weeks for pickup

  VARIABLES THAT WILL BREAK THE OUTPUT IF THEY ARE NOT UPDATED:
  1. startYr - needs to be changed in year 11 for:
  2. yearDiff - this variable will be greater than 10 starting in 2032, therefore startYr has to change or use a loop to subtract 11 from yearDiff and recalculate it to get the correct schedules index
  3. updateDate - depends on the above 2 vars unless a loop is created for yearDiff. If that is done then the warning output below can be deleted.
*/

/* WARNING MESSAGE FOR DATE CHANGES IN LATE 2031 - change 12/01/31 to 12/01/21 to see it */
const updateDate = new Date(`12/01/31`);
const currentDate = new Date();
const updateWarning = document.getElementById("update_warning");

if (currentDate > updateDate) {
  updateWarning.innerHTML = '<span>If you see this message and it is 2032, then the schedule below is WRONG! You have to update the <em class="black">date</em> variable in <em class="black">leafpickup.js</em>. On line 1 of that file you will see: <em class="black">const startYr = 2021</em>. Change the year <em class="black">2021</em> to <em class="black">2032</em> for the schedule to be accurate for the next 11 years. In late <em class="black">2042</em> change it to <em class="black">2043</em> for the next 11 years, and so on... To make this warning message disappear, change the date in the variable at the bottom of the page (<em class="black">const updateDate = new Date(`12/01/21`)</em>) from <em class="black">12/01/31</em> to <em class="black">12/01/42</em>.</span>';
};
