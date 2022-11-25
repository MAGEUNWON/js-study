// 배열 invest 순서는 하루씩 종합하여 산출한 값
// x축은 시간이 지남에 따라 늘어남. 배열 0번째는 맨 왼쪽
// y축은 종합주가지수가 높을수록 맨 아래서부터 위로 늘어남. 지수0은 맨 밑
// 브라우저에 보여야 함. DOM API 활용
// 하루당 막대그래프의 가로(width)값은 100 px씩 차지
// 타입스크립트랑 html은 어떻게 연결하지????
// 배열의 값들이 y축의 값.(높이)
// 배열의 인덱스는 x의 순서. 그래프 x축의 길이 = 100px * 배열의 길이 
var root = document.getElementById("root");
var h1 = document.createElement("h1");
root.appendChild(h1);
h1.innerHTML = "종합주가지수";
h1.style.marginRight = "24rem";
var div = document.createElement("div");
root.appendChild(div);
root.style.width = "99vw";
root.style.height = "98vh";
root.style.display = "flex";
root.style.flexDirection = "column";
root.style.justifyContent = "flex-end";
root.style.alignItems = "flex-end";
var domStyle = {
    width: "85vw",
    height: "90vh",
    backgroundColor: "beige"
};
div.style.width = domStyle.width;
div.style.height = domStyle.height;
div.style.backgroundColor = domStyle.backgroundColor;
div.style.display = "flex";
div.style.justifyContent = "center";
div.style.alignItems = "flex-end";
div.style.border = "1px solid black";
var y = document.createElement("div");
div.appendChild(y);
y.style.width = "5vw";
y.style.height = "800px";
y.style.border = "2px solid red";
y.style.display = "flex";
y.style.flexDirection = "column";
y.style.justifyContent = "space-between";
y.style.alignItems = "flex-start";
var section1 = document.createElement("section");
div.appendChild(section1);
// let sec1Child = Array.from(section1.children)
// console.log(sec1Child)
section1.style.width = "1000px";
section1.style.height = "200px";
section1.style.backgroundColor = "#6495ed";
section1.style.display = "flex";
section1.style.flexDirection = "row";
section1.style.justifyContent = "flex-end";
section1.style.alignItems = "flex-end";
var xStyle = {
    width: "100px",
    height: "200px",
    display: "flex",
    flexDirection: "row"
};
var kdt_invest = [2003, 1980, 1989, 1995, 2003, 2007, 2001, 2003, 1970, 1995];
console.log(kdt_invest.sort());
var color = ["yellow", "coral", "blue", "pink", "green", "red", "gary", "orange", "black", "purple"];
var bar_chart = function (data, col) {
    var yArr = new Array();
    for (var j = 20; j < 120; j++) {
        if (j % 10 === 0) {
            yArr.push(j);
        }
    }
    var yArrSort = yArr.sort(function (a, b) {
        return b - a;
    });
    console.log(yArrSort);
    for (var i = 0; i < data.length; i++) {
        var x = document.createElement("div");
        section1.appendChild(x);
        console.log(section1);
        x.style.backgroundColor = col[i];
        x.style.width = xStyle.width;
        x.style.height = xStyle.height;
        var yDiv = document.createElement("div");
        y.appendChild(yDiv);
        console.log(yDiv);
        yDiv.style.width = "15px";
        yDiv.style.height = "15px";
        var yInterver = document.createElement("span");
        yDiv.appendChild(yInterver);
        yInterver.innerHTML = yArrSort[i];
    }
};
bar_chart(kdt_invest, color);
