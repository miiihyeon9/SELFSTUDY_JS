// 더하기 +
console.log( 1 + 2 ); // 결과 : 3
// 곱하기 연산자 *
console.log( 1 * 2 ); // 결과 : 2
// 나누기 연산자 /
console.log( 10 / 2 ); // 결과 : 5
// 나머지 연산자 %
console.log( 10 % 3 ); // 결과 : 1

//1. js 통한 숫자연산
//! Math 이용
// Math => 수학과 관련된 카테고리 
// Math안에 pow라는 명령을 사용
//* pow() : 제곱 
Math.pow(3,2); // 3의 2승 result : 9 

//* round() : 반올림
Math.round(10.6);   // result : 11

//* ceil() : 올림
Math.ceil(10.2);    // result : 11

//* floor() : 내림
Math.floor(10.3);   // result : 10

//* sqrt() : 제곱근
Math.sqrt(9);       // result : 3

//* random() : 0부터 1.0 사이의 랜덤 숫자
console.log(Math.ceil(Math.random()*10));

// 2. 문자
console.log('문자 입니다.');
console.log("문자 입니다.");
// console.log("문자 입니다.'); // SyntaxError
console.log("Mihyeon's house."); // Mihyeon's house.
console.log('Mihyeon"s house.');
// console.log('Mihyeon's house.'); // 첫 번째 ' 와 두 번째 ' 사이에 있는 문자만 문자로 인식이 되기 때문에 뒤에 있는 것은 문자로 인식이 되지 않아서 에러가 뜸
// => 해결 방법
console.log('Mihyeon\'s house.'); // '앞에 \해주면 뒤에 있는 ' 를 문자로 인식해줌.
// \ 뒤에 있는 기호는 문자로 인식됨!    => escape 문자

//! 1 !== "1"
//=> 1은 숫자이고 "1"은 문자열이다. 
//* typeof(1);
console.log(typeof "1");

// alert('안녕하세요.\n반갑습니다.');  // \n => 개행 역할
// alert("안녕하세요. " + '반갑습니다.'); // 문자를 이어줄 때 + 사용
console.log( 1 + 1 );   // result : 2
console.log( 1 + "1" ); // result : 11
console.log( "1" + "1" );   // result : 11
console.log( "안녕하세요.".length ); // result : 6 
                                    // length => 문자의 길이를 알려 줌.

console.log("code".indexOf("c")); // 0
console.log("code".indexOf("o")); // 1
console.log("code".indexOf("d")); // 2
console.log("code".indexOf("e")); // 3
// indexOf()는 괄호 안에 있는게 몇 번째에 위치하고 있는지 알려줌

console.log("Hi, My name is Mihyeon.".indexOf("Mihyeon"));   // result : 15



