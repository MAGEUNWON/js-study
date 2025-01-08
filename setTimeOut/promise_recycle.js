function startAsync(age){
  return new Promise((resolve, reject)=>{
    if(age > 20) resolve(`${age} success`);
    else reject(new Error(`${age} is not over 20`));
  });
}

//이런 식으로 바꿀 수 있음. 
// function startAsync(age){
//   return new Promise((resolve, reject)=>{
//     if(age > 20) {
//       return resolve(`${age} success`);
//     }
//     return reject(new Error(`${age} is not over 20`));
//   });
// }


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

//new Promise() 하는 순간 비동기 작업 시작
//비슷한 비동기 작업 수행할 때 마다 매번 new Promise() 할 필요 없이 앞에서 한 것을 그대로 리턴하는 함수 만들어서 사용하면 됨. 
//또한 resolve, reject 함수에 인자를 전달함으로써 then 및 catch 함수에서 비동기 작업으로부터 정보를 얻을 수 있음. 