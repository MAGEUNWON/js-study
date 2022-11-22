// 인터페이스를 써보자
// 함수 이름 : sortArray()
// 원소를 작은 순서대로 정렬할 것, sort(), sorted() 메서드 쓰지 말 것
// 함수 인자는 배열, 리턴 타입은 객체 , step 값도 콘솔에 찍혀야함. 




interface inputData{
  (numArray:number[]):void
}

let Data:number[]=[6, 2, 9, 8, 4, 0, 3, 8, 5, 7, 1];
// const step : number = 0;

// 배열안의 원소 옆자리랑 서로 비교해서 작은것이 앞으로(왼쪽으로) 위치하게 하자
// swap 쓰면 위치 바꿀 수 있나
// 배열 안의 원소 length만큼 비교 반복해야 함. 
// let j = 0;   0번째는 비교할 대상 없으니까 1번째 부터
// for(let i =1; i<배열의 lenght; i ++){
//    const temp = inputData[i] 이러면 배열 넣고 바꿀 수 있지 않나, const temp에 inputData[i] 번째 담기 
//      for(let j =i-1; j >= 0; j-- ){   j랑 계속 비교 

//          if(temp < inputData[j]){   inputData[j]가 더 크면 j+1번째랑 j 랑 자리 바꿔라
//            inputData[j + 1] = inputData[j]
//          }
     
//          inputData[j + 1] = temp  j>=0이면 -되니까 +1해줘야하나 
         
//      }
// }

let j : number = 0;

const sortArray:inputData=(numArray)=>{

  
  for(let i =1; i<numArray.length; i++){

    const temp = numArray[i]  // temp = 1 2

    
    for(let j = i-1; j >=0; j--){

      if(temp < numArray[j]){

        numArray[j + 1] = numArray[j]   //1 = 0  2 = 1
      } else break;

      numArray[j+1] = temp   //0 = temp 1 = temp
    }

  }
  console.log(numArray)
}

sortArray(Data);