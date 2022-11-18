//함수이름: commingsoon()
// 포켓몬 게임 가격 : 64,800원
// 고정지출예산 : 100,000(십만)원
// 게임 사면 고정지출에서 얼만큼 절약해야 하는 상황
// 고정지출 항목에서 어떤 항목을 몇번 절약해아 게임 살 수 있을까?
var fixedItem = {
    "출퇴근비용": {
        "카카오톡자전거": "1500원",
        "택시": "3500원"
    },
    "커피": {
        "엔시나": "4500원",
        "카누": "200원"
    },
    "고양이간식": {
        "닭고기": "400원",
        "락토프리우유": "800원"
    }
};
var fiexdHistory = {
    "출퇴근비용": {
        "카카오톡자전거": "19회",
        "택시": "3회"
    },
    "커피": {
        "엔시나": "6잔",
        "카누": "15잔"
    },
    "고양이간식": {
        "닭고기": "30개",
        "락토프리우유": "2개"
    }
};
console.log(fixedItem, fiexdHistory);

var fix = /** @class */ (function () {
    function fix(fix1, fix2) {
        this.fix1 = fix1;
        this.fix2 = fix2;
    }
    return fix;
}());
var pick = new fix(fixedItem, fiexdHistory);
// const kakao = 1500;
// const taxi = 3500;
// const coffee = 4500;
// const cano = 200;
// const chicken = 400;
// const milk = 800;
var itemCost = {
    kakao: 1500,
    taxi: 3500,
    cafe: 4500,
    cano: 200,
    chicken: 400,
    milk: 800
};
var count = {
    kakao: 19,
    taxi: 3,
    cafe: 6,
    cano: 15,
    chicken: 30,
    milk: 2
};
var cal = (itemCost.kakao * count.kakao) + (itemCost.taxi * count.taxi) + (itemCost.cafe * count.cafe) + (itemCost.cano * count.cano) + (itemCost.chicken * count.chicken) + (itemCost.milk * count.milk);
// 이거 뭔가 함수로 바꾸거나 반복문 쓸 수 없나
console.log(cal); // 총 고정지출 비용 82600
var fixedExpenses = 100000; //고정지출 예산
var gamePrice = 64800; // 게임가격
var restPrice = fixedExpenses - gamePrice; // 게임사면 남는 돈
// console.log(restPrice) //35200
var totalRest = fixedExpenses - cal; // 고정지출예산 - 총 고정지출 비용 
console.log(totalRest); //17400 그냥 고정지출하는 그대로 쓰면 17400원 남음
var saveCost = gamePrice - totalRest; //게임 사려면 더 필요한 돈(부족한 금액)
console.log(saveCost); //47400
// 뭘 줄여야 47400원을 세이브할 수 있을까. 중요도도 따져야함
// 내가 정한 중요도 순위는 고양이간식 > 출퇴근비용 > 커피 순 
var commingsoon = function () {
    // 부족한 비용 47400원 , 절약하는 돈의 합계 > 47400 면 게임 살 수 있고 함수 끝남.  
    // if(47400원 - (커피 엔시나 비용 4500 * 최대값(count.cafe 6번)) = 양수이면){
    //   다시 계산 
    // }else(음수면 return)
    // if(saveCost - (itemCost.cafe * 1) )
    for (var i = 0; i <= count.cafe; i++) {
        console.log(count.cafe);
        if ((saveCost - (itemCost.cafe * i)) + (itemCost.cano * (count.cano + i)) > 0) {
            var a = (saveCost - (itemCost.cafe * i)) + (itemCost.cano * (count.cano + i));
            console.log("게임을 사기까지", a, "이 부족합니다.");
            // for(let j = 0; j<=count.taxi; j ++){
            //   console.log(count.taxi)
            //   if((a - (itemCost.taxi*j)) + (itemCost.kakao * (count.kakao + j)) > 0){
            //     let b = (a - (itemCost.taxi*j)) + (itemCost.kakao * (count.kakao + j))
            //     console.log(b, "이 부족합니다.")
            //   }else(console.log("끝"));
            // }
            // 이렇게 또 다른 조건 반복문 돌려보려고 했는데 먼저 쓴 for문과 이중으로 같이 돌고, 밖으로 빼려고 하면 a안의 i값이 나오질 못해서 못구해서 어떻게 해아 할지 모르겠음 
        }
        else
            (console.log("게임을 살 수 있습니다."));
    }
    // if(saveCost - (itemCost.cafe*(count.cafe)) > 0 ){
    //   console.log("게임을 살 수 없습니다.")
    // }else("게임을 살 수 있습니다.")
};
console.log(commingsoon());
