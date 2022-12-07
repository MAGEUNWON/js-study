const http = require('http');
const fs = require('fs');


const setDomComponent = (tagName, content, attributeName, props) => {
  let getDataArr = [];
  try{
    if(typeof tagName ==='string' && typeof props ==='object' && typeof attributeName ==='string'){
      if(getDataArr.length === 0){
        let tempArray = [];
        tempArray.push("<");
        tempArray.push(tagName + " " + attributeName + "=\"");
        // \u00A0 => no-break space(공백문자 유니코드 문자열, 그냥 ' ' 넣으면 레이아웃 깨지는 경우 발생, 이럴때 저 유니코드 넣어서 강제로 공백으로 설정해 줄 수 있음.), html에서 &nbsp;랑 같은거
        for(const keys in props){
          tempArray.push(" " + keys + ":" +props[keys] + ";");
          // 이런식으로 복잡하게 넣을 때 + 써줘서 합치고 있다는걸 관습적으로 보여줌. 
        };
        tempArray.push("\">");
        getDataArr.push(tempArray.join(''));
        console.log(tempArray);
      };
    }
    getDataArr.push(content);
    getDataArr.push(`</${tagName}>`);
  } catch(e){
    console.error(e, "need checking arguments data type");
  } finally {
    return getDataArr.join("");
  }
}

let dynamicElement = setDomComponent("div", "hello", "style", {"width":"100px", "height": "100px", "background-color": "cadetblue"});

const mainPage = `
<!DOCTYPE html>
<html lang ="en">
<head>
  <meta charset = "UTF-8">
  <meta http-equiv="X-UA-Compatible" content ="IE=edge">
  <meta name ="viewport" content="width=divice-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
${dynamicElement}
</body>
</html>
`;
// meta viewport 태그는 애플이 아이폰, 아이패드 등 자사의 모바일 브라우저의 뷰포트 크기 조절을 위해 만듬.
// 이 mainPage 부분이 리액트가 될 수 있고 다른 원하는 걸로 바꿔서 쓸 수 있음. 
// 리액트는 props를 객체로 알아서 인식함. 

const byteChecker = string => {return string.length +2 +"byte"};
// 데이터 용량처리(실제로는 이렇게 사용하지 않음. 예시임.)

http.createServer(async(request, response)=>{
  response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  response.write(mainPage);
  response.end();
}) . listen(5555, ()=>{
  console.log(byteChecker(mainPage), "server listening on port 5555");
});

//  이렇게 만들면 동작과정에서의 문제는 없지만 최종적으로 치명적인 문제가 존재. 무슨 문제가 생길까???
// 서버에 스타일이 지정 안됌. html내용을 너무 빠르게 해석해서 스타일을 무시하고 그냥 넣어버림. 스타일까지 제대로 나오게 하려면 html파일을 한개 만들어서 위의 html 내용을 <div id =root></div>안에 넣고 fs로 연결하면 됨. 