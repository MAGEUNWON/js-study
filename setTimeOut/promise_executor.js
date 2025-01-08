const throwError = new Promise((resolve, reject)=>{
  throw Error("error");
});
throwError
  .then(()=>console.log("throwError success"))
  .catch(()=>console.log("throwError catched"))

//아무런 영향 없음
const ret = new Promise((resolve, reject)=>{
  return "returned";
});
ret
  .then(()=>console.log("ret success"))
  .catch(()=>console.log("ret catched"));

  //resolve만 됨
  const several1 = new Promise((resolve, reject)=>{
    resolve();
    reject();
  });
  several1
    .then(()=>console.log("several1 success"))
    .catch(()=>console.log("several1 catched"));

  //reject만 됨
  const several2 = new Promise((resolve, reject)=>{
    reject();
    resolve();
  })
  several2
    .then(()=>console.log("several2 success"))
    .catch(()=>console.log("severla2 catched"));
  
    //resolve만 됨
  const several3 = new Promise((resolve, reject)=>{
    resolve();
    throw new Error("error");
  });
  several3
    .then(()=>console.log("several3 success"))
    .catch(()=>console.log("several3 catched"));

    //executor 내부에서 에러가 throw 되면 해당 에러로 reject가 수행
    //executor의 리턴 값은 무시. 
    //첫번째 reject 혹은 resolve만 유효(두 번째부터는 무시, 이미 해당 함수가 호출 되었다면 throw 또한 무시)