
const inputData = [6, 2, 9, 8, 4, 0, 3, 8, 5, 7, 1];
// const newInputData = [];



// if(inputData[0] < inputData[1]){
//   temp.push(inputData[1])
// } else(temp.unshift(inputData[0]))
// console.log(temp)

//   if(temp[0] < inputData[2]){
//     temp.push(inputData[2])
//   } else(temp.unshift(temp[0]))

function sortArray(){

  let j  = 0;

  for(let i =1; i<inputData.length; i++){
    let temp = inputData[i] // temp = 1 2
    // console.log(inputData);
    for(j = i-1; j >=0; j--){
      if(temp < inputData[j]){
        // console.log(temp)
        inputData[j + 1] = inputData[j]       //1 = 0  2 = 1
      }else break;
      // console.log(inputData)
      inputData[j+1] = temp; //j가 -되니까 +1을 다시 해주기 0 = temp 1 = temp
      // console.log(temp);
    } 
  }
  // console.log(inputData);
  return inputData;
}

console.log(sortArray())