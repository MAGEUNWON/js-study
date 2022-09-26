const word = "We will never be able to recognize opportunities if we first don’t recognize all that we have and all that we’ve been given."

const hi = "학교 종이 땡땡땡 어서 모이자 선생님이 우리를 기다리신다."

function countWord (text){
  text = text.replace(/(^\s*)|(\s*$)/gi, "");
  text = text.replace(/[]{2,}/gi," ");
  text = text.replace(/\n /,"\n");
  return text.split(' ').length;
}
console.log(countWord(word));

// text.repalce(/찾을 문자열/gi, "변경할 문자열")
// gi의 의미
// g : 전체 모든 문자열 변경(global)
// i : 영문 대소문자를 무시, 모두 일치하는 패턴 검색(ignore)

// text.replace(/\./gi,"-")
// [] 안에 특수기호를 넣으면 하나하나 개별적으로 변환

