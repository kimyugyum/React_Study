// console.log("chapter 4");

// 1. 변수
let age; // age 변수 선언, 초기화(초기값)

age = 30;
// console.log(age); -> 변수 변경됨.

// let age;와 같이 초기값이 없이도 설정 가능
// let age = 40;과 같이 중복 선언 불가능

// ------
// 2. 상수
const birth = "2002.10.03";
// birth = "123";으로 값 바꾸기 불가능
// const birth;와 같이 초기화 무조건 필요함 

// ------
// 3. 변수 명명규칙(네이밍 규칙)
// 3-1. $, _를 제외한 기호는 사용할 수 없다.
let $_name

// 3-2. 숫자로 시작할 수 없다.
let name1;
// let 2name; (x)

// 3-3. 예약어를 사용할 수 없다.
// let let (x)
// let if (x)

// ------
// 4. 변수 명명 가이드
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;
