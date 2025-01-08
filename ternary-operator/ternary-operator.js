let operandOne = "test";
let operandTwo = 4;
let result = (operandOne.length === operandTwo) ? "hello" :"bye";
// 삼항연산자(ternary operator), if와 else가 지원하는 기능을 그대로 사용
// 가독성은 떨어지지만 깔끔한 코드 만들 수 있음. 알고리즘 복잡할 땐 if문 쓰다가 필요에 따라 바꿔주기도 함. 복잡한 중첩처리도 가능. 생산성이 높음. 

console.log(result); 

// function example(){
//   if (operandOne.length === operandTwo){
//     return console.log("hello");
//   } else{
//     return console.log ("bye");
//   }
// }

// 얘랑 둘이 같은 뜻. 