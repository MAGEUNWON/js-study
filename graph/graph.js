// 배열 invest 순서는 하루씩 종합하여 산출한 값
// x축은 시간이 지남에 따라 늘어남. 배열 0번째는 맨 왼쪽
// y축은 종합주가지수가 높을수록 맨 아래서부터 위로 늘어남. 지수0은 맨 밑
// 브라우저에 보여야 함. DOM API 활용
// 하루당 막대그래프의 가로(width)값은 100 px씩 차지

var root = document.getElementById("root");
root.style.backgroundColor = "blue";
var kdt_invest = [2003, 1980, 1989, 1995, 2003, 2007, 2001, 2003, 1970, 1995];

