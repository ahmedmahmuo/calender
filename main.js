// varibals
let year = document.getElementById("year");
let Week = document.getElementById('week')
let day = document.getElementById("day");
let month = document.getElementById('month')
let star = document.getElementById("star");
// code //
// data [month, crunt day of any month] //
const date = {
  m: [
    { n: "January", d: 31 },
    { n: "February", d: 28 },
    { n: "March ", d: 31 },
    { n: "April", d: 30 },
    { n: "may", d: 31 },
    { n: "june", d: 30 },
    { n: "july", d: 31 },
    { n: "august", d: 31 },
    { n: "septembed", d: 30 },
    { n: "october", d: 31 },
    { n: "november", d: 30 },
    { n: "december", d: 31 },
  ],
};
// array month
let monthStrings = [
  "January",
  "February",
  "March",
  "April",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december"
]
// array week
let weekStrings = [
  'su', 'mo', 'tu', 'we', 'th', 'fr', 'st'
]
const timeAndDate = new Date();
// year_: //
year.innerText = timeAndDate.getFullYear();
if (year.innerText !== timeAndDate.getFullYear()) {
  year.classList.add("active");
  star.classList.add("active");
} else {
  year.classList.remove("active");
  star.classList.remove("active");
}
// month_: //
// crunt month
let cruntMonth = timeAndDate.getMonth() + 1;
for (let i = 0; i < monthStrings.length; i++) {
  let h3Month = document.createElement('h3');
  h3Month.innerText = monthStrings[i];
  h3Month.setAttribute('id', "month-name");
  h3Month.setAttribute('index-month', i + 1)
  month.append(h3Month);
}
// add class active of month
let arrBox = Array.from(month.children)
arrBox[cruntMonth - 1].classList.add('active');
// week_: //

let cruntWeek = timeAndDate.getDay(); // 3
for (let i = 0; i < weekStrings.length; i++) {
  let h4 = document.createElement('h4');
  h4.innerText = weekStrings[i]
  h4.setAttribute('data-week', i + 1);
  Week.appendChild(h4)
}
let arrWeek = Array.from(Week.children);
arrWeek[cruntWeek].classList.add('active')
// day_: //
for (let i = 0; i < date.m[cruntMonth - 1].d; i++) {
  let p = document.createElement('p');
  p.innerText = [i + 1]
  p.setAttribute('index-day', i + 1)
  day.appendChild(p)
}
// add class active of day
let arrDay = Array.from(day.children)
let cruntDay = timeAndDate.getDate();
arrDay[cruntDay - 1].classList.add('active');
