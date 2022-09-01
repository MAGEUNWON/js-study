
function student (id, name){
  this.id = id;
  this.name = name;
}


const studentList = ["강예훈","김성현","류주완","마근원","박종인","박재형","송형주","양상희","원두진","유민호","이상호","이소영","이은수","정동욱","정윤환","정정원","지영빈","한용준","황초영","김근수","김승현","전형민","정연주","이아연","최화연"
];

// console.log(studentList[0].charAt(0));


// let name = studentList[0];
// console.log(name);
// let reName = name.replace(/강/gi, '푸');
// console.log(reName);

// if(name.charAt(0)==="김"){
//   let reName=name.repalce(/김/gi, '푸');
// }
// console.log(studentList);

const members = [];
studentList.push("뽀로로")
studentList.forEach(function(element, index, array){
  // console.log(index +1, element);
  members.push(new student(index +1, element));
});

members.forEach((element) => {
  if(element.name.includes("김")){
    // includes는 "김"이 포함된 이름들 골라내 줌 
    element.name = element.name.replace("김", "청")
    // console.log(element.name);
  }
  if(element.id % 2 === 0){
    console.log(element);
    // id 값이 짝수 이면 콘솔에 찍어라 
  }
}); 
console.log(members);





// for(let keyName in studentList ){
// for in은 index값이 안나옴. 여기서 번호 나온건 배열이라서 배열 순서가 나온것
// index값은 forEach나 for of로 찾기 

//   console.log(keyName, studentList[keyName]);
//   members.push(new student(keyName, studentList[keyName]));
// }

// console.log(members);

