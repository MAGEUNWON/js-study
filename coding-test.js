
// const number = Array(3).fill().map((item, index)=> index +1);
// 빈 배열에 fill() 함수를 통해 3개의 undifined로 채워진 빈자리 만들어둠
// console.log(number);

const inputData = [];
for(let i = 1; i<=3; i++){
  let random = Math.floor(Math.random() *(20-1+1)) +1;
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

const objectData ={
  first : inputData[0], 
  second: inputData[1],
  third : inputData[2],
}
console.log(objectData);
// objectData 객체에 inputData에서 나온 키 값 넣어줌


const x = objectData.first;
const y = objectData.second;
const z = objectData.third;


const formula = function(x, y, z){
  return (x+y+z) / 3;
}
console.log(formula(x, y, z));
//랜덤 3개 숫자 평균 구함

if(formula(x, y, z)<10){
  console.log('under')
}else{
  console.log('over');
}
// 평균값 10 미만이면 under, 10 이상이면 over 출력


function median(arr){
  let center = parseInt(arr.length / 2);
  // console.log(center);
  
  if(arr.length % 2 === 1){
    return arr[center];
  }else{
    return (arr[center-1]+arr[center]/2)
  }
}
console.log(median(inputData));

// console.log(inputData.length);
  // console.log(element);
  // arr.push(new objectData(element));
  // console.log(arr);




// formula ((x, y, z) => {

//   return (x+y+z) /3

// });

// result = formula()






// Math.floor(Math.random() *(20-1+1)) +1;
// console.log(number);





// function num () {
//   const random = [];
//   function makeNum (){
//     if (random.length<3) {
//       let n = Math.floor(Math.random() *(20-1+1)) +1;
//       if(notSanme(n)) {
//         random.push(n);
//       }
//       num();
//     }
//     function notSanme (n) {
//       return num.every((e) => n !== e);
//     }
//   }

//   num();
//   return random;

// }

  








