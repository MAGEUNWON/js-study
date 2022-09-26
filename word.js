const word = "We will never be able to recognize opportunities if we first don’t recognize all that we have and all that we’ve been given."

const hi = "학교 종이 땡땡땡 어서 모이자 선생님이 우리를 기다리신다."

function countWord (text){
  text = text.replace(/(^\s*)|(\s*$)/gi, "");
  // 중간의 공백은 무시하고 처음, 끝 공백만 제거 
  text = text.replace(/[]{2,}/gi," ");
  text = text.replace(/\n /,"\n");
  return text.split(' ').length;
}
console.log(countWord(hi));

 // text = text.replace(/^/gi,""); 맨 앞의 공백만 제거 
// text = text.replace(/\s$/gi,""); 문자열 맨 뒤의 공백만 제거


// text.repalce(/찾을 문자열/gi, "변경할 문자열")
// gi의 의미
// g : 전체 모든 문자열 변경(global)
// i : 영문 대소문자를 무시, 모두 일치하는 패턴 검색(ignore)
// m : 여러줄 체크
// s : 공백 문자(스테이스, 탭, 폼 피드, 라인 피드)

// ^ : 처음
// $ :  끝
// . : 한문자
// * : 뒤에 이어지는 문자까지 모두 선택
// | : ~또는~
// {} : 반복 횟수

// /\s/g; : 모든 공백 체크 정규식

// text.replace(/\./gi,"-")
// [] 안에 특수기호를 넣으면 하나하나 개별적으로 변환

// let str = 'This123is456Java789script';
// str = str.replace(/[1-9]+/gi, @) -> This@is@Java@script로 변환
// [1-9] 패턴은 숫자 1개를 의미 : 1, 2, 3, 4, ~~, 9 따로따로 봄
// [1-9]+ 연속된 숫자들을 의미 : 123, 456, 789 붙어 있는 연속된 숫자로 인식

