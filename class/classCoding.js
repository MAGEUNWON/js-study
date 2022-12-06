class student {

  constructor(name, birth, NCSid, NCStitle, classRoom, phone, email, className, classStart, classEnd, studentNum){    
    this.name = name;
    this.birth = birth;
    this.NCS = {
      NCSid : NCSid,
      NCStitle : NCStitle
    }
    this.classRoom = classRoom;
    this.phone = phone;
    this.email = email;
    this.className =className;
    this.classStart = classStart;
    this.classEnd = classEnd;
    this.studentNum = studentNum;
  }

  list(){
    return `이름: ${this.name}, 생년월일: ${this.birth}, 훈련강의실: ${this.classRoom}, 연락처: ${this.phone}, 이메일: ${this.email}, 훈련강의명: ${this.className}, 훈련시작일: ${this.classStart}, 훈련종료일: ${this.classEnd}, 훈련생번호: ${this.studentNum}`
  }

  
}
const info = new student("마근원", "19970407", "1", "정보기술개발", "305", "010-1234-5678","hi@google.com", "풀스텍 Training","2022-07-19", "2023-01-05", "305-01")

console.log(info)

// class NCS {
//   constructor(num, title){
//     this.num = num;
//     this.title = title;
//   }
//   NCSprint(){
//     return `번호: ${this.num} 이름: ${this.title}`
//   }
// }
// const NCSS = new NCS("1", "정보기술개발").NCSprint()
// console.log(NCSS)


// class Animal {
//   speak(){
//     return this;
//   }
//   static eat(){
//     return this;
//   }
// }
// let obj = new Animal();
// console.log(obj.speak());

// class student2 extends student {
//   constructor(name, birth, classRoom, phone, email, className, classStart, classEnd, studentNum){
//     super(name, birth, classRoom, phone, email, className, classStart, classEnd, studentNum)
//     this.NCS = {};
//     this.NCS.num = "1";
//     this.NCS.ncsName = "정보기술개발"
//   }
// }

// const student3 = new student2("마근원", "19970407", "305", "010-1234-5678","hi@google.com", "풀스텍 Training","2022-07-19", "2023-01-05", "305-01")
// console.log(student3)

// let box = [];

// let list = ["학생1", "학생2", "학생3", "학생4", "학생5"]



// const student1 = new student("마근원", "19970407", "ncs", "305", "010","google", "풀스텍","07", "01", "0505" )
// console.log(student1)

