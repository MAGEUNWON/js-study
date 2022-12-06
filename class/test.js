// class student {

//   constructor(num, name, birth, NCS, classRoom, phone, email, className, classStart, classEnd, classNum){
//     this.num = num;    
//     this.name = name;
//     this.birth = birth;
//     this.NCS = NCS;
//     this.classRoom = classRoom;
//     this.phone = phone;
//     this.email = email;
//     this.className =className;
//     this.classStart = classStart;
//     this.classEnd = classEnd;
//     this.classNum = classNum;
//   }

//   set num(newNum){
//     this._num = newNum;
//   }
// }

class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  get age(){
    return this._age;
  }
  set age(age){
      const num = parseInt(age)
      this._age = num + 1
      // this._age = "안녕"
  } 
  speak(){
    console.log(`내이름은 ${this.name}, 내 번호는 ${this.age}`)
  }
}
const kim = new Person("kim", "1")
kim.speak()

// const nm = parseInt("1")
// console.log(nm)


// class Car {
//   constructor(name = "없음", passengers = "0", price = "0"){
//     this.name = name;
//     this.passengers = passengers;
//     this.price = price;
//   }
//   carPrint(){
//     return(
//       "name => " + 
//       this.name +
//       "/ passengers =>" +
//       this.passengers +
//       "/pirce => " +
//       this.price
//     );
//   }
//   static description(){
//     console.log("static carPrint 스태틱 메소드 출력");
//   }
// }

// class Sonata extends Car{
//   constructor(name, passengers, price, seatFacility){
//     super(name, passengers, price);
//     this.seatFacility = seatFacility;
//   }

//   SonataPrint(){
//     return super.carPrint() + "/ seatFacility => " + this.seatFacility;
//   }

//   static description(){
//     console.log("이 클래스는 소나타 클래스 입니다.");
//   }
// }


// const sonata = new Sonata("소나타", "4", "1000", "열시트")
// console.log("sonata.carPirnt =>" , sonata.carPrint());
// console.log("sonata.sonataPrint =>" , sonata.SonataPrint());


class Car2{
  constructor(color, weight, speed, engine){
    this.color = color;
    this.weight = weight;
    this.speed = speed;
    this.engine = engine;
  }
}

class DiselCar extends Car2{
  constructor(color, weight, speed){
    super(color, weight, speed);
    this.engine = {};
    this.engine.engine = "Diesel";
  }
}
const kiaDiesel = new DiselCar("blue", 100, 0)
console.log(kiaDiesel);

// get, setter
// function으로 호출 
// 두개 연습까지 해보기 

