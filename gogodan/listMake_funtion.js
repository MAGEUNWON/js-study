export default function listMaker(arr, parentElemnt, childElement, clearInterval,count=0){
  for(let i = 0; i<arr.length; i++){
    let item = document.createElement(childElement);
    parentElemnt.appendChild(item);
    count+=clearInterval

    setInterval(function(){
      item.textContent = arr[i];
    },count);
  }
}
