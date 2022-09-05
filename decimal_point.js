export default function gogodan(arr, num, num2, count2 =0){
  for(let j=2; j<num; j++){
    console.log(j+"단");
    for(let i = 1; i<num2; i++){
      count2++  
      // 곱셈 몇번 했는지 count 함
      let gogodan = `${j}x${i} = ${j*(Math.random()*i)}`;
      if
      let value = j*(Math.random()*i);
      let first = value.toFixed(1);
      let gogodanValue = `${j}x${i} = ${first}`;
      arr.push(gogodanValue);
      console.log(arr);
      let multiplyCounter = count2;
      console.log(multiplyCounter);
    };
  }
}

