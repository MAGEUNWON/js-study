// class Stack {
//   constructor(){
//     this.arr = [];
//     this.index = 0;
//   }
//   push(item){
//     this.arr[this.index++] = item;
//   }
//   pop(){
//     if(this.index<=0) return null;
//     const result = this.arr[--this.index]
//     return result;
//   }
// }

// let stack = new Stack()
// stack.push(1);
// stack.push(2);
// stack.push(3);
// console.log(stack.pop());
// console.log(stack);
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());

class stack{
  constructor(){
    this.storage = {};
    this.top = 0;

  }

  size(){
    return this.top
  }

  push(element){
    this.storage[this.top] = element;
    this.top +=1;
  
  };
  
  pop(){
    if(this.size()<=0){
      return;
    }
    const result = this.storage[this.top-1];
    delete this.storage[this.top-1];
    this.top-=1;
    return result
  
  }
}


// let stack2 = new stack()
// stack2.push(1);
// stack2.push(2);
// stack2.push(3);
// console.log(stack2);
// console.log(stack2.pop());
// console.log(stack2);
// console.log(stack2.pop());
// console.log(stack2);

// console.log(stack.pop());
// console.log(stack.pop());

a = [1,0,0]
b = [1,0,0]
// console.log(a ===b); //배열의 주소값을 비교하므로 이렇게 비교하면 false

// console.log(a.toString() === b.toString()) // 배열을 toString()으로 형 변환 한 다음 비교 ,배열과 인덱스까지 일치할 때 true 반환

// 만일 인덱스일치는 빼고 배열의 값만 같은지 비교하고 싶다면 every(), includes() 써야함.

zeroArray = function(len){
  return new Array(len).fill(0)
}

nums = zeroArray(10);
console.log(nums[5]);

function sol(string){
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
      // console.log(stack.pop());
      stack.pop();
      // console.log(stack.pop());
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



// let random = (Math.random() < 0.5) ? 0 : 1 


// let numRandom = Math.random()

// 스택의 최상단 값과 그 아래 값이 같으면 스택 사라짐 
// 반복문 다 돌고 스택이 비어있으면 문자열 모두 제거된 것이므로 1을 출력
// 스택에 뭔가 남아있으면 문자열이 모두 제거되지 않은 것이기 때문에 0을 출력
// 이게 배열 a = [? ? ? ? ...] 10 의 인덱스중 하나로 들어가면 되나?
// 아니면 원래 10개 인덱스가 각각 0인데 랜덤으로 하나의 인덱스 골라서 저 식을 써주면 값이 출력되게해서 1개 인덱스의 값만 바뀌게 하면 되나?
// console.log(nums)

if(sol(bin) === 1){

  nums.splice(5, 1, sol(bin))
}
console.log(nums);