//1. setTimeout을 Promise 버전으로 하여 setTimeout Promise 함수를 새로 만듬. setTimeout 함수를 활용하여 지정된 ms만큼 기다린 후 resolve를 호출. 이렇게 만든 Promise의 then으로 다음 동작을 정의할 수 있음. then은 resolve 함수 호출되면 실행되므로 ms만큼 기다리면 다음 동작으로 넘어감

//2. startAsyncJobs 함수를 새로 만듬. 이 함수내에서 await를 사용하기 위해 async 함수로 정의 내린 후 코드의 마지막 부분에서 호출함으로써 비동기 작업 시작. 기존의 then과 catch 하던 작업들은 모두 이 함수 내에 있음. 

function setTimeoutPromise(ms){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>resolve(), ms);
  });
}

async function startAsync(age){
  if(age>20) return `${age} success`;
  else throw new Error(`${age} is not over 20`);
}

async function startAsyncJobs(){
  await setTimeoutPromise(1000);
  const promise1 = startAsync(25);
  try{
    const value = await promise1;
    console.log(value);
  } catch(e) {
    console.error(e);
  }
  const promise2 = startAsync(15);
  try{
    const value = await promise2;
    console.log(value);
  }catch (e){
    console.error(e);
  }
}

startAsyncJobs();

//await [[Promise 객체]] 문법적으로 이렇게 사용
//await는 Promise가 완료될 때까지 기다림. 그러므로 setTimeoutPromise의 executor에서 resolve 함수가 호출될 때까지 기다림. 그 시간동안 startAsyncJobs의 진행은 멈춰있음. 
//async 함수 내부에서는 return하는 값이 resolve한 값이므로 `${age} success`가 value로 들어옴. 
//해당 Promise에서 reject가 발생하면 예외가 발생. 이 예외를 처리하기 위해서 try-catch구문을 사용. reject로 넘긴 에러(async 함수 내에서는 throw한 에러)는 catch절로 넘어감. 이로써 본래 해왔던 에러 처리하듯이 진행가능.