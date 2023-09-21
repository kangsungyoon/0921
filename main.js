/*
특정시간을 주기로 코드 반복
setInterval(반복 실행할 함수, 반복 간격시간(ms))

*/
const [hr, m, s] = document.querySelectorAll('h1 span');

setInterval(setTime, 100);

function setTime() {
	const now = new Date();
	const hours = now.getHours();
	const min = now.getMinutes();
	const sec = now.getSeconds();
	hr.innerText = setNumbers(setHours(hours));
	m.innerText = setNumbers(min);
	s.innerText = setNumbers(sec);
}

function setNumbers(num) {
	num < 10 && (num = '0' + num);
	return num;
}

function setHours(num) {
	num > 12 && (num = num - 12);
	return num;
}
