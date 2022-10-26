function setTimeoutPromise(ms){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>resolve(), ms);
  });
}

async function fetchAge(id){
  await setTimeoutPromise(1000);
  console.log(`${id} 사원 데이터 받아오기 완료!`);
  return parseInt(Math.random() * 20, 10) +25;
}

//for 안에 await가 들어있음. 1번 사원 정보 받기 전에 0번 사원의 정보를 기다리고 있음. 그래서 동기 코드 짤 때와 시간이 비슷함. 

// async function startAsyncJobs(){
//   let ages = [];
//   for(let i = 0; i < 10; i++){
//     let age = await fetchAge(i);
//     ages.push(age);
//   }

//   console.log(
//     `평균 나이는? ==> ${
//       ages.reduce((prev, current)=>prev + current, 0)
//     }`
//   );
  
// }

//promise.all로 바꾸면 for문 안에서는 더이상 await하지 않음. 대신 Promise를 배열에 쌓아 놓음. async 함수를 호출하기만 하면 이 쌓아놓은 Promise를 한번에 처리. 위 예제보다 시간이 줄어듬. Promise 배열로 받은 것들 중 하나라도 비동기 작업이 실패하면 reject를 호출. 

async function startAsyncJobs(){
  let promises = [];
  for(let i = 0; i < 10; i++){
    promises.push(fetchAge(i));
  }

  let ages = await Promise.all(promises);

  console.log(
    `평균 나이는? ==> ${
      ages.reduce((prev, current)=>prev + current, 0)
    }`
  );
  
}

startAsyncJobs();