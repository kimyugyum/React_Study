// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환 하는 것

let num = 10;
let str = "20";

const result = num + str; // 덧셈 과정에서 str 타입으로 묵시적 변환 됨
console.log(result); // 10 + 20 = "1020"

// 2. 명시적 형 변환
// -> 프로그래머 내장 함수 등을 이용해서 직접 형 변환을 명시
// 2-1. 문자열 => 숫자
let str1 = "10";
let strToNum1 = Number(str1); // Number 내장 함수 사용
console.log(10 + strToNum1);

let str2 = "10개"
let strToNum2 = parseInt(str2); // parseInt 내장 함수 사용 -> 숫자가 앞쪽에 나와있어야 함
console.log(strToNum2);

// 2-2. 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1); // String 내장 함수 사용
console.log(numToStr1 + "입니다");