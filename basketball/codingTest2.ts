function score_analysis(total: number, three: number, percent:number){
  let threeCount = 3 * three;
  let rest = total - threeCount;
  let two = rest * percent; //18점
  let free = rest * percent; //18점
  let A = two / 2
  let B = free / 2
  let C = free
  let CC = B * 2
  let D = (C / CC) * 100

  return `KDT팀이 성공한 2점 슛은 ${A}, 상대팀으로부터 자유투를 얻은 횟수는 ${B}, 총 ${C}개의 자유투를 성공했습니다. 이날 KDT팀의 자유투 성공률은 ${D}% 입니다. `
  
}

console.log(score_analysis(84, 16, 0.5));