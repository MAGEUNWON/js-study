import{inputData, objectData, objValue, median} from './coding-test-export.js';



for(let i = 1; i<=3; i++){
  let random = Math.floor(Math.random() *20) +1;
  //1부터 20까지의 수 중 난수 생성해라, random 범위지정은 (최대값 -최소값 + 최소값) +최소값
  if (inputData.indexOf(random)===-1){
    // indexOf는 지정된 요소 첫번째 인덱스를 반환하고 존재하지 않으면 -1 반환. 음수값 나오는걸로 중복을 검사할 수 있음 
    inputData.push(random);
  } else {
    i--
  }
  // 중복이 있으면 중복된 숫자빼고 2개만 반환하니까 총 3개 반환하게 하려면 중복일 땐 i값을 1 빼서 반복문 한번 더 돌려라 
}
inputData.sort(function(a,b){
  return a-b;
  // 랜덤 숫자 오름차순 정렬
});

console.log(inputData);

// console.log(formula(x, y, z));

if(objValue.formula(objValue.x, objValue.y, objValue.z)<10){
  console.log('under')
}else{
  console.log('over');
}
// 평균값 10 미만이면 under, 10 이상이면 over 출력



console.log(objectData);

console.log(objValue.formula(objValue.x, objValue.y, objValue.z));

console.log(median(inputData));








