//현재 년 월 일 알아내자
let today = new Date();

year = today.getFullYear();
month = today.getMonth();
date = today.getDate(); //0:일, 1:월, 2:화, 3:수, 4:목, 5:금, 6:토

//현재 월 마지막 날?
let lastDate = new Date(year, month + 1, 0).getDate(); //현재 월의 마지막 날 : 다음달의 0일

//현재 월 1일은 무슨 요일?
let firstDay = new Date(year, month, 1).getDay();
console.log(`${year}년 ${month + 1}월 ${date}일 ${firstDay}, ${lastDate} `);