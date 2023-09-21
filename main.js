const now = new Date();
const hours = now.getHours();
const min = now.getMinutes();
const sec = now.getSeconds();

// 오후 / 오전 시간 나누기
// 현재 시간값에서 한 자리 시간값이면 앞에 0을 붙여서 출력

console.log(setNumbers(hours));

function setNumbers(num) {
	/*
	if (num < 10) result = '0' + num;
	else result = num; */

	//조건식 ? true일때 실행할 구문 : false일때 실행할 구문
	// 삼항연산자 구문안에는 대입연산자가 들어올수 없기 떄문에
	// 특정값이 else일때 굳이 실행할 코드가 없다면 && 연산자 활용
	//num < 10 ? (result = '0' + num) : (result = num);
	num < 10 && (num = '0' + num);

	return num;
}

/*
let newHr = 0;

let hr = 0;
if (hours > 12) {
  newHr = hours - 12;
  if (newHr < 10) {
    hr = '0' + newHr + 'PM';
  } else {
    hr = newHr + 'PM';
  }
} else {
  newHr = hours;
  if (newHr < 10) {
    hr = '0' + newHr + 'AM';
  } else {
    hr = newHr + 'AM';
  }
}
*/
