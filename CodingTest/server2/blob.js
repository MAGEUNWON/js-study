"use strict";
exports.__esModule = true;
// fs.readdir('./txt', (err, filelist)=>{
//   // console.log(filelist)
// })
// // readdir은 비동기, 비동기니까 콜백함수 필요
// const file = fs.readdirSync('./txt')
// // console.log(file)
// // readdirSync는 동기, 콜백함수 필요 없음. 
var blob = new Blob(["안녕", "미에로화이바", "세상에서", "제일가는", "포테이토칩"], { type: "text/plain" });
console.log(blob);
var blobSlice = blob.slice(0, 6, "text/plain");
blobSlice.text().then(function (value) {
    console.log(value);
});
console.log(blobSlice);
var objectURL = URL.createObjectURL(blob);
var root = document.getElementById("root");
var anchor = document.createElement("a");
anchor.innerText = "다운로드";
anchor.href = objectURL;
anchor.download = "hi,txt";
root.appendChild(anchor);
// 얘를 쓰면 음성으로 들어온 내용을 한글로 변환할 수도 있고 한글로 받은 결과를 음성으로 출력할 수도 있음. 시각장애인용 사이트 등 음성으로 설명이 필요한 경우 쓸 수도 있음. img는 그 이미지에 대한 화면해설 등에 쓰일 수도 있을 듯? 아니면 시리처럼 음성으로 말한걸 byte?형식 등으로 컴퓨터가 인식하고 다시 대답을 byte등으로 한 뒤 음성으로 내보낼 수도 있을 듯??
// const server = http.createServer((req:http.IncomingMessage, res:http.ServerResponse) => {
//   const method = req.method;
// })    
