// function startAsync(age){
//   return new Promise((resolve, reject)=>{
//     if(age > 20) resolve(`${age} success`);
//     else reject(new Error(`${age} is not over 20`));
//   });
// }

//기존 Promise에서 executor 부분만 바꿔주면 변환 쉽게 가능
//함수에 async 붙이기
//new Promise... 부분을 없애고 executor 본문 내용만 남김
//resolve(value); -> return value;
//reject(new Error(...)); -> throw new Error(...);로 수정
async function startAsync(age){
  if(age > 20) return(`${age} success`);
  else throw new Error(`${age} is not over 20`);
}

setTimeout(()=>{
  const promise1 = startAsync(25);
  promise1  
    .then((value)=>{
      console.log(value);
    })
    .catch((error)=>{
      console.log(error);
    });

  const promise2 = startAsync(15);
  promise2
    .then((value)=>{
      console.log(value);
    })
    .catch((error)=>{
      console.log(error);
    });
}, 1000);

//async 함수의 리턴 값은 무조건 Promise
//위 함수에서 문자열을 리턴했지만 promise1과 promise2는 문자열이 아님. 
//async 함수를 실행시킨 뒤 then과 catch를 활용하여 흐름을 제어해야 함. 