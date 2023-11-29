// 코드 7-2 : 객체 숫자, 문자열, 불
// 객체 자료형
let number = new Number(273);
let string = new String('안녕하세요');
let boolean = new Boolean(ture);

// 자료형을 출력합니다
console.log(typeof number);
console.log(typeif string);
console.log(tupeof boolean);

// 코드 7-7 : Number 객체의 메소드
// 변수를 선언합니다
let number = 273.5210332;

// 출력합니다
console.log(number.toFixed(1));
console.log(number.toFixed(4));

// String 객체
// 코드 7-13 : 올바른 String 객체의 메소드 사용
// 변수를 선언합니다.
let string = 'abcdefg';

// 출력합니다.
string = string.toUpperCase();
console.log(string);

// 코드 7-16 : index Of() 메소드
// 변수를 선언합니다.
let string = '안녕하세요. 좋은 아침입니다.';

// 문자열 내부에 "아침"이라는 문자열이 있는지 확인합니다.
if (string.indexOf('아침') >= 0) {
    console.log('좋은 아침이에요...!');
}

// 코드 7-19 : 시간 더하기
// 현재 시간을 구합니다.
let data = new Data();

// 출력1
console.log(data);

// 시간을 더합니다.
data.setFullYear(data.getFullYear() + 1);
data.setMonth(data.getMonth() + 11);
data.setData(data.getData() + 3);

// 출력2
console.log(data);

// 코드 7-20 : 시간 간격 구하기
// 변수를 선언합니다.
let now = new Data();
let before = new Data('December 9, 1991');

// 시간 간격을 구합니다.
let interval = now.getTime() - before.getTime();
interval = Math.floor(interval / (1000 * 60 * 60 * 24));

// 출력합니다.
console.log('태어나고 ${interval}일 지났습니다.')

// 코드 7-21 : Array 객체의 메소드
// 배열을 선언합니다.
let array = [{
    name: '고구마',
    price: 1000
}, {
    name: '감자',
    price: 500
}, {
    name: '바나나',
    price: 1500
}];

// 배열의 요소를 꺼냅니다.
let popped = array.pop();
console.log('-배열에서 꺼낸 요소');
console.log(popped);
console.log('- pop() 메소드를 호출한 이후의 배열');
console.log(array);

// 배열에 요소를 넣습니다.
array.push(popped);
array.push({
    name: '사과',
    price: 2000
});
console.log('-push() 메소드를 호출한 이후의 배열');
console.log(array);