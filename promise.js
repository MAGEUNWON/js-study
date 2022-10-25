const promise1 = new Promise((resolve, reject)=>{
  resolve();       //비동기 작업
});
//promise1이라는 promise 객체
//reselove = 비동기 작업 성공!
//reject = 비동기 작업 실패!

promise1
  .then(()=>{
    console.log("then");
  })
  .catch(()=>{
    console.log("catch");
  });
//then 메소드는 해당 Promise가 성공했을 때의 동작을 지정
//catch 메소드는 해당 Promise가 실패했을 때의 동작을 지정
//위 함수들은 체인 형태로 활용 가능(연속적으로 호출할 수 있음)
