const fromInput = " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like) "

// 1.위 문장에서 알파벳은 무엇을 몇개 사용했나? 
// 2.어떤 언어여도 어떤 문자열을 몇개 사용했는지 나와야함
// 가장 많이 작성된 음절은? 가장 적게 작성된 음절은?
// 3.가장 많이 작성된 음절 - 가장 적게 작성된 음절 = 값. 값 나오면 값만큼 문장 사이사이에 무작위로 음절 집어 넣기 
// 3이 완료되면 띄어쓰기는 5개 음절이 한묶음. 한 단어처럼 나오게 할 것

// formInput 문장 공백 제거하기
// formInput의 단어를 하나의 배열로 묶기 각각 음절 1개당 인덱스 0,1,2 ...
// 어떤 단어가 들어있는지 찾아내기 
// charAt()은 인덱스 번호에 따라 어떤 문자 있는지 알려줌
// indexOf()는 문자열이 몇번째 인덱스에 있는지 알려줌 
// 대소문자도 같은 문자열로 처리해줘야겠지?


// const setTrim = fromInput.trim();
// console.log(setTrim)
// 얜 내부 띄어쓰기는 못 없앰

const lowerCase = fromInput.toLowerCase();
console.log(lowerCase);


const fromInputSplit = lowerCase.split(' '); //띄어쓰기 ' ' 기준으로 문자열 분리

const fromInputJoin = fromInputSplit.join('')
console.log(fromInputJoin);  // join 함수에 빈값 ''을 전달하여 결합

const fromInputArray = [...fromInputJoin]
// 배열로 묶음. 
console.log(fromInputArray);

const reduce = fromInputArray.reduce((accu, curr) => {
  // console.log('accu', accu, 'curr', curr, accu[curr])
  accu[curr] = (accu[curr] || 0)+1;
  // 객체에서 누적값의 key값을 찾아 value 값이 있으면 그 value에서 1을 더하고 없으면 0, 여기에서 1을 더해줌
  return accu;
}, {});

console.log(reduce);
//   누적값으로 알파벳 갯수 찾기. 초기값을 {}로 지정. 누적값의 첫 값은 {}임. 빈 객체에서 첫 음절을 찾는 accu[curr] 값은 없음. key값의 value가 없기 때문. 여기서 0 +1, 1 + 1 이런식으로 반복문하면 value의 누적값이 쌓임. 

let arr = Object.values(reduce);
let obj = Object.keys(reduce);
// console.log(obj);

let max = Math.max(...arr);
let min = Math.min(...arr);
console.log(max, min);
// 최대값, 최소값 구함

let count = max - min
console.log(count);
// 둘의 차이 구함
// console.log(fromInputArray);

let repeat = [...Array(count+1).join('i')];
// console.log(repeat.length);
// console.log(repeat);
// 'i'를 count(둘의 차이값)만큼 배열에 넣어줌

const pushInputArray = [...repeat, ...fromInputArray]
// console.log(pushInputArray.length);
console.log(pushInputArray);
// i넣어준 배열과 원래 배열 합침


let randomArray = pushInputArray.sort(()=> Math.random()-0.5);

console.log(randomArray);
// 0.5는 0-1 난 수의 중간 값. 0.5를 빼면 무조건 양수이거나 음수가 나옴. 이를 이용해서 sort 메서드로 매번 랜덤한 값으로 정렬시켜 섞어줌.

const splitChunk=((arr, chunk)=>{
  
})


