// ! 변수란?
// 문자나 숫자 같은 값을 담는 컨테이너로 값을 유지할 필요가 있을 때 사용한다. 
// 값을 바꿀 수 있음
// 변수는 대명사와 비슷한 역할 
// 변수는 코드의 재사용성을 높여줌.



// let a = 1;
// a = 'Hello';
// console.log(a);
// // alert(a);

// a = 2;
// let b = 2;
// // alert( a + b ); // 4
// let hi = 'Hello!';
// let name = 'Mihyeon';

// alert( hi + name );

// ! 변수 선언
//* var
// 변수를 선언. 동시에 값을 초기화
// 지역 및 전역 변수를 선언하는 데 사용

// * let 
// 블록 스코프 지역 변수를 선언. 추가로 동시에 값을 초기화한다. 

// * const 
// 블록 스코프 읽기 전용 상수를 선언

//! 변수 스코프 
// 어떤 함수의 바깥에 변수를 선언하면, 현재 문서의 다른 코드에 해당 변수를 사용할 수 있기에 전역 변수라고 함
// 함수 내부에 변수를 선언하면, 오직 그 함수 내에서만 사용할 수 있기에 지역 변수라고 함. 

// ! 변수 호이스팅
// 예외를 받지 않고도, 나중에 선언된 변수를 참조할 수 있음
// "변수가 어떤 의미에서 함수나 문의 최상단으로 올려지는 것"
//      (끌어 올려진 변수는 undefined)
//      참조한 후, 선언 및 초기화를 하더라도 여전히 undefined 반환

// 호이스팅 대문에, 함수 내의 모든 var문은 상단에 두는 것이 좋음
//! let과 const 변수는 변수를 블록의 상단으로 끌어 올리지만, 초기화하지 않음. 
// 변수가 선언되기 전에 블록 안에서 변수를 참조하게 되면 ReferenceError 발생 
// console.log(x); // ReferenceError
// let x = 1; 

//! 함수 호이스팅
// 함수에서는 함수 선언으로는 호이스팅이 되지만, 함수 표현식으로는 호이스팅이 되지 않음
// ex)
// baz();  //ReferenceError

// let baz = function (){
//     console.log('barz');
// };

//! 상수
// const => 읽기 전용 상수 
// 상수는 스크립트가 실행 중인 동안 대입을 통해 값을 바꾸거나 재선언 X
// 상수는 같은 스코프에 있는 함수나 변수와 동일한 이름으로 선언 X
// 하지만, 상수에 할당된 객체의 속성은 보호되지 않음. 
    // ex)
    const MY_OBJECT = { key : 'value'};
    MY_OBJECT.key = 'Other Value';
    console.log(MY_OBJECT.key); // 'Other Value';

// let x = undefined;
// if(x){
//     alert('x true');
// }else{
//     alert('x false');   // undefined는 false를 반환하기 때문에 이게 출력됨
// }

// let val = "value";

// function valVal() {
//     val = undefined;
//     console.log(typeof(val));
//     if(val){
//         alert('valval');
//     }else{
//         alert('val');
//     }
// }
// valVal();