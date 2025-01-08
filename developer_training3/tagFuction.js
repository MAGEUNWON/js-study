const tagFunction = {

  tagMaker : function(parent, tagName, html){
    const tag = document.createElement(tagName);
    tag.innerHTML = html;
    parent.appendChild(tag);
  },
  // tagMaker로 root>header>nav 넣어줌


  solTagMaker: function(parent, itemName){
    let itemTag = document.createElement(itemName);
    parent.appendChild(itemTag);
  },
  
  listMaker : function(parentElement, containerName, itemName, itemcount){
    let ulTag = document.createElement(containerName);
      for(let i = 0; i<itemcount; i++){
      let liTag = document.createElement(itemName);
      // liTag.textContent = i + 1;
      ulTag.appendChild(liTag);
      }
    parentElement.appendChild(ulTag);
  }
  // listMaker로 ul>li*6개 넣어줌
}

// tagFunction이라는 객체안에 tagMaker, listMaker 두개의 함수가 담겨있음
// 이 객체는 import로 novel파일 데이터 온 뒤 export 해서 쓸 수 있음

function contentDiv(tagName){
  let imgTag = document.createElement(tagName);
  let h1Tag = document.createElement(tagName);
  let div1Tag = document.createElement(tagName);
  let div2Tag = document.createElement(tagName);


}



