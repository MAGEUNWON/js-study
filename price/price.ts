//함수이름: commingsoon()
// 포켓몬 게임 가격 : 64,800원
// 고정지출예산 : 100,000(십만)원
// 게임 사면 고정지출에서 얼만큼 절약해야 하는 상황
// 고정지출 항목에서 어떤 항목을 몇번 절약해아 게임 살 수 있을까?

// 고정지출 항목 :
// {
//   항목1:{
//     객체안에 객체로 구성
//     "비용 " : "0원",
//     "비용 " : "0 원",
//   },
//   항목2:{
//     "비용 " : "0원",
//     "비용 " : "0 원",
//   },
//   항목3:{
//     "비용 " : "0원",
//     "비용 " : "0 원",
//   }
// }
// 객체 묶음으로 이루어져있음. 그럼 class나 생성자 함수로 만들 수 있나?
// 고정지출 총 비용 계산해 보기

// 고정지출 내역:
// {
//   "내역1" : {
//     "내용" : " ",
//     "내용" : " ",
//   },
//   "내역2" : {
//   },
//   "내역3" : {
//   }
// }
// 고정지출 총 횟수 계산해 보기

//각각 항목 * 비용으로 제일 크게 나올 수 있는 비용 계산
// 같은 객체 형태 2개니까 클래스로 만들면 찍어 낼 수 있을듯? 고정 지출 항목, 내역 정보의 자료구조 및 데이터타입(객체?)은 변형 x

// 고정지출 중요도
// 고양이 간식 -> 매우 중요. 절약 불가능. 완전 고정비용
// 출퇴근비용 -> 30분 일찍 일어나면 무지출 가능 but 30분당 피로도 1증가(피로도 증가하면 뭐가 안좋은건데?)
// 커피 -> 어떤 형태로든 커피는 무조건 마셔야 함. 원장님 카드로 계산하면 무지출 가능 but 미움지수 1증가(미움보다는 피로도 증가가 낫지않나?)


// 조건:
// 1. 함수의 인자(입력) 데이터타입은 객체
// 2. 리턴은 하나의 문장, string으로 항목별 절약 횟수 나오기
// 3. 고정지출의 종류와 갯수, 총 예산과 게임가격이 변할 수도 있음.

interface itemName {
  [key : string] : itemName 
}


interface item {
  costName: {
    // [key : string] : itemName['name']
  }
}

const fixedItem : item['costName'] = {

  "출퇴근비용" : {
    "카카오톡자전거" : "1500원",
    "택시" : "3500원",
  },
  "커피" : {
    "엔시나" : "4500원",
    "카누" : "200원",
  },
  "고양이간식" : {
    "닭고기" : "400원",
    "락토프리우유" : "800원",
  }

}

const fiexdHistory : item['costName'] = {
  "출퇴근비용" : {
    "카카오톡자전거" : "19회",
    "택시" : "3회",
  },
  "커피" : {
    "엔시나" : "6잔",
    "카누" : "15잔",
  },
  "고양이간식" : {
    "닭고기" : "30개",
    "락토프리우유" : "2개",
  }
}
console.log(fixedItem, fiexdHistory);

class fix {
  fix1 : object;
  fix2 : object;
  constructor(fix1 : object, fix2: object){
    this.fix1 = fix1;
    this.fix2 = fix2;
  }
}

const pick = new fix(fixedItem, fiexdHistory);

// const kakao = 1500;
// const taxi = 3500;
// const coffee = 4500;
// const cano = 200;
// const chicken = 400;
// const milk = 800;

const itemCost = {
  kakao : 1500,
  taxi : 3500,
  cafe : 4500,
  cano : 200,
  chicken : 400,
  milk : 800
}

const count = {
  kakao : 19,
  taxi : 3,
  cafe : 6,
  cano : 15,
  chicken : 30,
  milk : 2
  
}

let cal = (itemCost.kakao * count.kakao) + (itemCost.taxi * count.taxi) + (itemCost.cafe * count.cafe) + (itemCost.cano * count.cano) + (itemCost.chicken * count.chicken) + (itemCost.milk * count.milk)
// 이거 뭔가 함수로 바꾸거나 반복문 쓸 수 없나
console.log(cal) // 총 고정지출 비용 82600


let fixedExpenses : number = 100000 //고정지출 예산
let gamePrice : number = 64800 // 게임가격
let restPrice : number = fixedExpenses - gamePrice; // 게임사면 남는 돈
// console.log(restPrice) //35200

const totalRest : number= fixedExpenses - cal // 고정지출예산 - 총 고정지출 비용 
console.log(totalRest) //17400 그냥 고정지출하는 그대로 쓰면 17400원 남음

const saveCost : number= gamePrice - totalRest //게임 사려면 더 필요한 돈(부족한 금액)
console.log(saveCost) //47400

// 뭘 줄여야 47400원을 세이브할 수 있을까. 중요도도 따져야함

// 내가 정한 중요도 순위는 고양이간식 > 출퇴근비용 > 커피 순 
const commingsoon = () =>{
  // 부족한 비용 47400원 , 절약하는 돈의 합계 > 47400 면 게임 살 수 있고 함수 끝남.  
  // if(47400원 - (커피 엔시나 비용 4500 * 최대값(count.cafe 6번)) = 양수이면){
  //   다시 계산 
  // }else(음수면 return)
  // if(saveCost - (itemCost.cafe * 1) )

  for(let i = 0; i<=count.cafe; i ++){
    console.log(count.cafe);
    if((saveCost-(itemCost.cafe*i)) + (itemCost.cano * (count.cano + i)) > 0){
      let a = (saveCost-(itemCost.cafe*i)) + (itemCost.cano * (count.cano + i))
      console.log("게임을 사기까지",a,"이 부족합니다.")

      // for(let j = 0; j<=count.taxi; j ++){
      //   console.log(count.taxi)
      //   if((a - (itemCost.taxi*j)) + (itemCost.kakao * (count.kakao + j)) > 0){
      //     let b = (a - (itemCost.taxi*j)) + (itemCost.kakao * (count.kakao + j))
      //     console.log(b, "이 부족합니다.")
      //   }else(console.log("끝"));
      // }
      // 이렇게 또 다른 조건 반복문 돌려보려고 했는데 먼저 쓴 for문과 이중으로 같이 돌고, 밖으로 빼려고 하면 a안의 i값이 나오질 못해서 못구해서 어떻게 해아 할지 모르겠음 

    }else(console.log("게임을 살 수 있습니다."));
  }

  // if(saveCost - (itemCost.cafe*(count.cafe)) > 0 ){
  //   console.log("게임을 살 수 없습니다.")
  // }else("게임을 살 수 있습니다.")
}

console.log(commingsoon());





