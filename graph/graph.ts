// 배열 invest 순서는 하루씩 종합하여 산출한 값
// x축은 시간이 지남에 따라 늘어남. 배열 0번째는 맨 왼쪽
// y축은 종합주가지수가 높을수록 맨 아래서부터 위로 늘어남. 지수0은 맨 밑
// 브라우저에 보여야 함. DOM API 활용
// 하루당 막대그래프의 가로(width)값은 100 px씩 차지

// 타입스크립트랑 html은 어떻게 연결하지????

// 배열의 값들이 y축의 값.(높이)
// 배열의 인덱스는 x의 순서. 그래프 x축의 길이 = 100px * 배열의 길이 

const root = document.getElementById("root") as HTMLElement;
const div = document.createElement("div");
root.appendChild(div);

const section1 = document.createElement("section");
div.appendChild(section1);

// div.style.width 


const domStyle = {
  width :"90vw",
  height : "100vh",
  backgroundColor : "beige"
}
div.style.width = domStyle.width;
div.style.height = domStyle.height;
div.style.backgroundColor = domStyle.backgroundColor;

const xStyle = {
  width : "100px",
  height: "200px",
  display : "flex",
  flexDirection :"row"
}

const kdt_invest : number[] = [2003, 1980, 1989, 1995, 2003, 2007, 2001, 2003, 1970, 1995]

const color : string[] = ["yello", "coral", "blue", "pink", "green", "red", "gary", "orange", "black", "purple"]

for (let i = 0; i < kdt_invest.length; i++){
  let x = document.createElement("div");
  div.appendChild(x)
  x.style.width = xStyle.width;
  x.style.height = xStyle.height;
  x.style.display = xStyle.display;
  x.style.flexDirection = xStyle.flexDirection;
  // console.log(x)
}

// const bar_chart = (data : number) => {
//   // const x = calc((kdt_invest.length) * 100px)
//   for (let i of kdt_invest ) {
//     console.log(i)
//   }
// }