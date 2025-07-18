// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;
// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2); // 모듈러 연산

let inf = Infinity;
let minf = -Infinity;
let nan = NaN; // 수치 연산이 실패했을 때의 결과 값으로 보통 사용한다. (Not a Number)

// ------
// 2. String Type
let myName = "김유겸"; // 문자열은 무조건 작은 따옴표나 쌍 따옴표로 감싸야 함.
let myLocation = "인천";
let introduce = myName + myLocation; // js는 문자열 간 연산 가능
console.log(introduce);

// 2-1. 템플릿 리터럴 문법
let introduceText = `${myName}은 ${myLocation}에 거주합니다.` // 백틱 안에서는 변수의 값을 동적으로 넣을 수 있다.
console.log(introduceText);

// ------
// 3. Boolean Type -> 현재 상태를 나타내는데 주로 사용함.
let isSwitchOn = true;
let isEmpty = false;

// ------
// 4. Null Type (아무것도 없다.)
let empty = null;

// ------
// 5. Undefined Type
let none;
console.log(none);
// null vs undefined 
// undefined는 변수를 선언하고 아무런 값을 할당하지 않았을 때 자동으로 들어가는 값
// null은 명시적으로 할당해줘야하는 값이다.
