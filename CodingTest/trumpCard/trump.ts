// 카드 한 벌(deck)은 52장
// 모양은 스페이드, 하트, 다이아몬드 , 클로버, 조커
// 모양 하나당 13개 카드 존재(A(에이스,1 or 가장 높은 끗수), 2, 3, 4, 5, 6, 7, 8, 9, 10, J(잭), Q(퀸), K(킹)))
// 조커는 총 2장, 모든 카드를 능가하는 트럼프 카드 최강의 패 
// 숫자가 같은 경우 스페이드, 다이아몬드, 하트, 클로버 순으로 높음

// 함수 호출 시 객체로 리턴. 객체 키들의 개수는 (13*4) +2 = 54 가 조회를 통회 도출되는 방식으로 확인해야 함. 

// shape의 배열[0], 배열[1]... 을  매개변수로 하나씩 불러들이는 함수를 만들어야 하나? 얘네를 리턴하는 값은 객체로?  
// 아님 shape array를 일단 객체로 바꿔놓고 시작해야 하나?
// json 처럼 배열 안에 객체로 놓으면 되나
// 덱의 자료구조는 직접 만들어야겠지??

const shape_array : string[] = ["spade", "heart", "diamond", "club", "joker"];

const datas : string[]= ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]




interface inputData {
  (shapeArray : string[]) : string | object
}


type ObjType = {
  [shapeArray:string] : string;

}

// type index = {
//   [index:number | string] :any;
// }

// type Obj = {[key:string]};

interface newObject {
  [key : string|number] : string | number
}


const obj : newObject  = {}



// let value : any = []
// datas.map((item, index) =>{
//   value.push(item , index+1)
// })

// console.log(value)

const trump_deck  = (shapeArray:string[] | number[]) :object  => {
  
  
  
  for(let i =0; i < shapeArray.length;  i++){

     // console.log(shapeArray.length)
    let key = shapeArray[i]
     // console.log(key)
     // console.log(shapeArray[i])
    obj[key]  = shapeArray[i]
    console.log(obj)

    obj["spade"] = datas[0]
    // datas의 배열은 어떻게 반복문을 돌려야 할 지 모르겠음
    // 반복문 돌리면 이중이라서 shapeArray도 같이 반복문을 또 돔 

    // let values = datas.map((item, index) => {
    //   return item + ':' + (index+1)
    // })
    
  
    // console.log(values)
  
    

    // console.log(obj[key] = shapeArray[i])
    // console.log(Object.values(obj))
    
    
  
  }


  // const keyVlues = datas.map((item, index) =>{
    
  //   return item + ':' + (index +1)
  //   // key2.push(item)
  //   // values.push()

  // })
  // console.log(keyVlues)


  return obj
  
}

trump_deck(shape_array)
// console.log(trump_deck(shape_array))