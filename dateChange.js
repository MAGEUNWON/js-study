// const today = new Date();
// console.log(today);

let example = `오늘은 9월 1일 입니다.`;




const arr = example.split("");
console.log(arr.length);

const change = example.replace("1", "9");
console.log(change);

function remove (index, num, chageValue){
  arr.splice(index, num, chageValue);
  return console.log(arr);
}
remove(7, 3, "9일 추석연휴");
// 7번째 인덱스부터 그 뒤로 3번째까지 변경, 변경 내용은 "9일 추석연휴"

// console.log(arr.join(''));

const string = arr.join('');
// join으로 배열들 다시 하나의 문자열로 바꿔 줌
console.log(string);

// const remove = arr.splice(7, 1, 9);
// console.log(arr);

// const replace = arr[2]


// console.log(arr[1]);
// console.log(arr[2]);

// console.log(arr);
// console.log(example.replace("1일", "9일"));
