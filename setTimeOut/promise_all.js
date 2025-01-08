const promise1 = new Promise((reslove, reject)=>{
  setTimeout(()=>{
    console.log("첫번째 Promise 완료");
    reslove("11111");
  }, Math.random() * 20000 + 1000);
});

const promise2 = new Promise((reslove, reject)=>{
  setTimeout(()=>{
    console.log("두번째 Promise 완료");
    reslove("22222")
  }, Math.random() * 20000 + 1000)
});

Promise.all([promise1, promise2]).then((valuse)=>{
  console.log("모두 완료됨", valuse);
})
// 여러개의 비동기 작업들이 존재하고 이들이 모두 완료 되었을 때 작업을 진행하고 싶다면 Promise.all 을 활용하면 됨. 
//두번째 Promise가 완료된 뒤, 시간이 흘러 첫번째 Promise가 완료되면 최종적으로 전체값을 보여줌. 