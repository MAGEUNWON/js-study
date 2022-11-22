# function score_analysis(total, three, percent){
#   const threeCount = 3 * three;
#   const rest = total - threeCount;
#   const two = rest * percent; //18점
#   const free = rest * percent; //18점
#   const A = two / 2
#   const B = free / 2
#   const C = free
#   const CC = B * 2
#   const D = (C / CC) * 100

#   return `KDT팀이 성공한 2점 슛은 ${A}, 상대팀으로부터 자유투를 얻은 횟수는 ${B}, 총 ${C}개의 자유투를 성공했습니다. 이날 KDT팀의 자유투 성공률은 ${D}% 입니다. `

#   // const three = 3 * count; //48
#   // const score = total - three; //36
#   // const percent = score * 0.5; //18
#   // console.log(percent);
#   // const A = percent / 2; // 9 (2점슛 성공 횟수)
#   // console.log(A);
#   // const B = percent / 2; 
#   // console.log(B);
#   // const C = successFree;
#   // const successPercent = 

  
# }

# console.log(score_analysis(84, 16, 0.5));


def socre_analysis(total, three, percent) :
    threeCount = 3 * three
    rest = total - threeCount
    two = rest * percent 
    free = rest * percent
    A = two / 2
    B = free / 2
    C = free
    CC = B * 2
    D = (C / CC) * 100

    print("KDT팀이 성공한 2점 슛은" + str(A) + "상대팀으로부터 자유투를 얻은 횟수는" + str(B) + " 총" + str(C) + "개의 자유투를 성공했습니다. 이날 KDT팀의 자유투 성공률은" + str(D) + "% 입니다.")

socre_analysis(84, 16, 0.5)