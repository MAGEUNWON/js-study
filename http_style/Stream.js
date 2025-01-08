const fs = require('fs');
const readStream = fs.createReadStream('./readme3.txt', {highWaterMark : 16});
//'./readme3.txt' 는 그냥 가상 파일임.
const data = [];

readStream.on('data', (chunk) =>{
  data.push(chunk);
  console.log('data :', chunk, chunk.length);
  //data : <Buffer ex a0 80 eb 8a 94 20 ec a1 b0 ea b8 88 ec 94 a9> 16
});

readStream.on('end', ()=>{
  console.log('end :', Buffer.concat(data).toString());
  //end : 저는 조금씩 조금씩 나눠서 전달됩니다. 나눠진 조각을 chunk라고 부릅니다.
});

readStream.on('error',  (err) =>{
  console.log('error', err);
});

//createReadStream(파일 경로, 옵션 객체) - 파일 경로와 옵션 객체를 입력하면 읽기 스트림이 만들어짐. highwaterMark는 옵션 객체로 버퍼의 크기를 정할 수 있음. 
//readStream.on() - readStream은 이벤트 리스너를 붙여서 사용하는데 보통 data, end, error 이벤트를 사용. data는 파일 읽기가 시작될 때 발생. end는 파일 읽기가 끝나면 발생. error는 파일 읽는 도중 에러가 발생하면 발생하는 이벤트

//Buffer(버퍼)는 파일을 읽을 때 메모리에 파일 크기만큼 공간을 비워두고 파일 데이터 메모리를 저장. 이 때 메모리에 저장된 데이터가 퍼버임. 
//from(string) : 문자열을 버퍼로 바꿈. 
//toString(buffer) : 버퍼를 문자열로 바꿈. 
//concat(array) : 배열 안의 버퍼들을 하나로 합침. 
//버퍼가 readFile을 할 때 편리하긴 하지만 파일의 용량이 크고 많아지면 문제가 발생할 수 있음. 그래서 버퍼의 크기를 작게 만든 후 여러번으로 나눠 보내는 방식인 스트림이 등장.
//데이터가 나눠진 조각을 chunk라고 함. 


//기타 fs 메서드 
//fs.access(경로, 옵션, 콜백) - 폴더나 파일에 접근할 수 있는지 체크 
//fs.mkdir(경로, 콜백) - 폴더 생성
//fs.rmdir(경로, 콜백) = 폴더를 지움
//fs.open(경로, 옵션, 콜백) - 파일의 아이디를 가져오는 메서드. 파일이 없다면 파일을 생성한 뒤 아이디를 가져옴
//rs.rename(기존 경로, 새 경로, 콜백) - 파일의 이름을 바꿔줌
//fs.unlink(경로, 콜백) - 파일을 지움. 
//fs.copyFile(복사할 파일, 복사될 경로) - 파일을 복사하여 복사될 경로에 파일을 생성. 