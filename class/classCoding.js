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

  get birth(){
    return this._birth;
  }
  set birth(value){
    if(typeof value === "string" & value.length === 8){
      this._birth = value;
    }else if(typeof value !== "string" & String(value).length===8){
      this._birth = String(value)
    }else if(String(value).length !==8 ){
      console.log("년4자리 월2자리 일2자리 형식으로 써주세요")}
  }

  // get NCS(){
  //   return this._NCS;
  // }
  // set NCS(value){
  //   if(typeof value === "string"){
  //     this._NCS = value;
  //   }else{
  //     this._NCS = String(value)
  //   }
  // }

  get classRoom(){
    return this._classRoom;
  }
  set classRoom(value){
    if(typeof value === "string"){
      this._classRoom = value;
    }else{
      this._classRoom = String(value)
    }
  }





  // list(){
  //   return `이름: ${this.name}, 생년월일: ${this.birth}, 훈련강의실: ${this.classRoom}, 연락처: ${this.phone}, 이메일: ${this.email}, 훈련강의명: ${this.className}, 훈련시작일: ${this.classStart}, 훈련종료일: ${this.classEnd}, 훈련생번호: ${this.studentNum}`
  // }

  
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

class BasicStudentInfo {
  constructor(studentName, phoneNumber, subNumber, email, cityName){
    this.studentName = studentName;
    this.phoneNumber = phoneNumber;
    this.subNumber = subNumber;
    this.email = email;
    this.cityName = cityName
  }

  get cityName(){
    return this._cityName;
  }
  set cityName(value){
    // if(typeof value === "string"){
    //   this._cityName = value;
    // }else{
    //   console.log("데이터타입 변경")
    //   this._cityName = String(value);
    // }
  }
}

const kong = new BasicStudentInfo("공욱재", "010-1234-5678", "02-456-7894", "hi@google.com", 12345678)

// console.log(kong)
// console.log(typeof kong.cityName);
// console.log(typeof kong._cityName);
// console.log(kong.cityName === kong._cityName)


