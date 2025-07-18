// 1. 대입 연산자: 변수의 값을 저장할 때 사용하는 가장 기초적인 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;

let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = 1 + 2 * 10; // 곱셈, 나눗셈, 모듈러 연산이 우선순위가 높음, ()를 사용하면 우선순위 높아짐
console.log(num6);

// 3. 복합 대입 연산자: 산술 연산자 + 대입 연산자
let num7 = 10;
// num7 = num7 + 20;
num7 += 20; // or -= or *= or /= or %=
console.log(num7);

// 4. 증감 연산자: 값을 1씩 늘리거나, 1씩 줄일때 사용하는 연산자
let num8 = 10;

console.log(++num8); // 전위 연산
console.log(num8++); // 후위 연산

// 5. 논리 연산자: boolean 타입의 값을 다룰때 사용하는 연산자
let or = true || false; // 하나만 참이면 참

let and = true && false; // 두개의 값이 참이어야 참

let not = !true; // 반전

console.log(or, and, not);

// 6. 비교 연산자
let comp1 = 1 === 2; // 동등 비교 연산자 (==일때는 자료형까지의 비교는 안됨.)
let comp2 = 1 !== 2; // 비동등 비교 연산자
console.log(comp1, comp2);

let comp3 = 2 > 1; // 대소 비교 연산자
let comp4 = 2 < 1;
console.log(comp3, comp4);

let comp5 = 2 >= 2;
let comp6 = 2 <= 2;
console.log(comp5, comp6);