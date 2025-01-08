// 총 n개의 배열이 있음. 배열안에는 숫자 0이 10개 들어있음. 
// 배열.length = 10
// n개의 배열에서 공통적인 index가 1일 때 숫자 1이 있던 인덱스의 값이 모두 사라지고 lenght = 9가 됨. 
// 모든 배열의 값이 없어졌을 때, length = 0 일 때 '승리!'문구를 출력
// 배열의 값은 0과 1만 가능 -> 그럼 true, false로 처리 하면 되나?
// 배열 1은 뭘 해야 생길까. 조건이 필요 


const zeroArray= (len:number):number[] => {
  return new Array(len).fill(0)
}
// 0이 10개 있는 배열 만드는 함수


const num1 = zeroArray(10);
// console.log(num1);
const num2 = zeroArray(10);
const num3 = zeroArray(10);
const num4 = zeroArray(10);
const num5 = zeroArray(10);

const Num = [num1, num2, num3, num4, num5]
// console.log(Num);


const sol = (string:string) => {
  let answer;
  let index = 0;
  const stack = [];
  for(let i = 0; i < string.length; i++){
    stack.push(string[i]);
    // console.log(stack.push(string[i]));
    // console.log(stack);
    if(stack[stack.length-1] === stack[stack.length-2]){
      // console.log(stack);
      stack.pop()
      console.log(stack.pop());
      stack.pop();
      console.log(stack.pop());
    }
  }
  answer = (stack.length ? 0 :1)
  return answer;
}

// sol("0100") 
//여기 들어갈 문자를 랜덤으로 넣어야 함, 몇 글자인지도 랜덤?
// 어짜피 0 1  넣을거면 2진수로 바꿔서 넣으면 될 듯

let randomNum = Math.floor((Math.random()*100));
console.log(randomNum)
let bin = randomNum.toString(2)
console.log(bin);
console.log(sol(bin));

// 스택의 최상단 값과 그 아래 값이 같으면 스택 사라짐 
// 반복문 다 돌고 스택이 비어있으면 문자열 모두 제거된 것이므로 1을 출력
// 스택에 뭔가 남아있으면 문자열이 모두 제거되지 않은 것이기 때문에 0을 출력
// 이게 배열 a = [? ? ? ? ...] 10 의 인덱스중 하나로 들어가면 되나?
// 아니면 원래 10개 인덱스가 각각 0인데 랜덤으로 하나의 인덱스 골라서 저 식을 써주면 값이 출력되게해서 1개 인덱스의 값만 바뀌게 하면 되나?

if(sol(bin) === 1){
  
    
    let randomIndex1 = Math.floor(Math.random()*10)
    let randomIndex2 = Math.floor(Math.random()*10)
    let randomIndex3 = Math.floor(Math.random()*10)
    let randomIndex4 = Math.floor(Math.random()*10)
    let randomIndex5 = Math.floor(Math.random()*10)
    
    num1.splice(randomIndex1, randomIndex1, sol(bin))
    num2.splice(randomIndex2, 1, sol(bin))
    num3.splice(randomIndex3, 1, sol(bin))  
    num4.splice(randomIndex4, 1, sol(bin))  
    num5.splice(randomIndex5, 1, sol(bin))  
    // 얘네는 반복문을 써야할 것 같은데
    // 근데 1이 여러 인덱스에 들어가도 되는거 아닌가? 그건 어떻게 처리하지 
}
console.log(num1, num2, num3, num4, num5);

// console.log(Math.floor(Math.random()*10))




