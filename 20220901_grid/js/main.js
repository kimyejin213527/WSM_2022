function test() {

}
//오늘을 구하기
let today = new Date();
//오늘 연 구하자
let year = today.getFullYear();
//오늘 월 구하자
let month = today.getMonth();
month++;
//오늘 일 구하자
let date = today.getDate();
//오늘 요일 구하자
let day = today.getDay();
let days = ['일', '월', '화', '수', '목', '금', '토'];
console.log(` ${year}년 ${month}월 ${date}일 ${days[day]}요일 `);

//1일 : 오늘 연, 오늘 월, 1 객체 구하자
let firstDate = new Date(year, month - 1, 1);
//그 객체의 요일 구하자
let firstDay = firstDate.getDay();
console.log(day[firstDay]);
//1일을 HTML -> js
let firstDiv = document.getElementsByClassName("first")[0]
//grid-column-start : 요일+1;
firstDiv.style.gridColumnStart = firstDay + 1;