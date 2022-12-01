
const blob = new Blob(["안녕", "미에로화이바", "세상에서", "제일가는", "포테이토칩"], {type:"text/plain"})
console.log(blob)

const blobSlice = blob.slice(0, 6, "text/plain")
blobSlice.text().then((value)=>{
  console.log(value)
})
console.log(blobSlice)

const objectURL = URL.createObjectURL(blob)

const root = document.getElementById("root") as HTMLElement
const anchor = document.createElement("a");
anchor.innerText = "다운로드"
anchor.href = objectURL;
anchor.download = "hi,txt";
root.appendChild(anchor)
// 얘를 쓰면 음성으로 들어온 내용을 한글로 변환할 수도 있고 한글로 받은 결과를 음성으로 출력할 수도 있음. 시각장애인용 사이트 등 음성으로 설명이 필요한 경우 쓸 수도 있음. img는 그 이미지에 대한 화면해설 등에 쓰일 수도 있을 듯? 아니면 시리처럼 음성으로 말한걸 byte?형식 등으로 컴퓨터가 인식하고 다시 대답을 byte등으로 한 뒤 음성으로 내보낼 수도 있을 듯?? 또 서버에서 이미지를 불러와서 img 태그에 넣어서 보여주는 것과 별개로 서버에서 이미지의 blob 데이터를 가져와서 js의 file객체로 변환할 수 있음. api에 있는 img 정보를 jpg파일로 받았을 때 서버에서 보낸 blob array를 Uint8Array로 변환하고 blob로 변환해서 file객체의 첫번째 인자에 들어가는 blob 에 넣어주면 서버에 있는 이미지와 동일한 정보를 가지고 있는 객체를 생성할 수 있음. 