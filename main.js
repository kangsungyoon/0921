/*
특정시간을 주기로 코드 반복
setInterval(반복 실행할 함수, 반복 간격시간(ms))

*/
const [hr, m, s] = document.querySelectorAll('h1 span');

setInterval(setTime, 100);

//함수추가
// 원하는 시간마다 body에 moring, afternoon, evening, night 클래스 추가
//if(hour>=6 && hours< 11) document.body.classList.add('morging')
//주의점 밤은 특정이상 혹은 일정시간 이하 (&&가 아닌 ::으로 표현가능)

function changeClass(hr) {
	if (hr >= 6 && hr < 12) document.body.classList.add('morning');
	if (hr >= 12 && hr < 16) document.body.classList.add('afternoon');
	if (hr >= 16 && hr < 20) document.body.classList.add('evening');
	if (hr >= 20 || hr < 6) document.body.classList.add('nigth');
}

function setTime() {
	const now = new Date();
	const hours = now.getHours();
	const min = now.getMinutes();
	const sec = now.getSeconds();
	hr.innerText = setNumbers(setHours(hours));
	m.innerText = setNumbers(min);
	s.innerText = setNumbers(sec);
	changeClass(hours);
}

function setNumbers(num) {
	num < 10 && (num = '0' + num);
	return num;
}

function setHours(num) {
	num > 12 && (num = num - 12);
	return num;
}
