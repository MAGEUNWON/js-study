
// const number = Array(3).fill().map((item, index)=> index +1);
// 빈 배열에 fill() 함수를 통해 3개의 undifined로 채워진 빈자리 만들어둠
// console.log(number);

const inputData = [];





const objectData ={
  first : inputData[0], 
  second: inputData[1],
  third : inputData[2],
}

// objectData 객체에 inputData에서 나온 키 값 넣어줌

const objValue = {
  x : objectData.first,
  y : objectData.second,
  z : objectData.third,
  formula : function (x, y, z){
    return (x+y+z) / 3;
  }
}


// const x = objectData.first;
// const y = objectData.second;
// const z = objectData.third;


// const formula = function(x, y, z){
//   return (x+y+z) / 3;
// }

//랜덤 3개 숫자 평균 구함



function median(arr){
  let center = parseInt(arr.length / 2);
  // 배열의 길이를 2로 나눈값이 문자열이면 숫자로 바꿔라 
  // console.log(center);
  
  if(arr.length % 2 === 1){
    // 배열의 길이를 2로 나눈 나머지값이 1일 때 (=홀수 일 때)
    return arr[center];
  }else{
    return (arr[center-1]+arr[center]/2)
    // 배열의 길이의 2로 나눈 값과  나눈 값의 -1을 더해서 평균을 내라, 배열의 중간 두 수의 평균 (=짝수 일 때) 
  }
}


export {inputData, objectData, objValue, median};
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

  








