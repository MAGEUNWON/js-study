// interface Animal {
//   name : string;
//   age : number;
// }

// interface AnimalConstructor {
//   new(name:string, age:number) :Animal;
// }



// class Dog implements Animal{
//   name : string;
//   age : number;
    
//   constructor(name:string, age:number){
//     this.name = name;
//     this.age = age;
//   }
// }

// class Cat implements Animal{
//   name : string;
//   age : number;

//   constructor(name:string, age:number){
//     this.name = name;
//     this.age = age;
//     }
// }

// function createAnimal(cstr : AnimalConstructor, name : string, age:number){
//   return new cstr(name, age);
// }




// console.log(createAnimal(Dog, '팔랑', 15));
// console.log(createAnimal(Cat, '쭈쭈', 10));

interface CraftBeer{
  beer : string;
  nameBeer(beer:string): void;
}

class myBeer implements CraftBeer{
  beer: string = 'guinness';
  nameBeer(b:string){
    this.beer = b;
  }
  constructor(){}
}


// let keys : keyof item['costName'] = "출퇴근비용"
// let value : itemName['name'] = "카카오톡자전거 : 1500원";
// console.log(keys,value)

// interface itemConstructor {
//   // new( name : string, name2: string) : item;
//   new(costName : string) :itemName['name'], itemName['name2'];
//   // new(costName2 : string) :itemName;
//   // new(costName3 : string) :itemName;
// }



// class fixedItem implements item{

//   "출퇴근비용": {};
//   // costName2: {};
//   // costName3: {};

//   // constructor("출퇴근비용": {}){
//   //   this.costName = costName;
//   //   // this.costName2 = costName2;
//   //   // this.costName3 = costName3
//   // }
  
//   // name: string;
//   // name2 : string;
  

//   // constructor(name:string, name2:string){
//   //   this.name = name;
//   //   this.name2 = name2;
//   // }
// }

// const cost = new fixedItem()
// console.log(cost);

// const pick = new commutePrice("카카오톡자전거 : 1500원", "택시 : 3500원")
// console.log(pick)
// function createItem(cstr: itemConstructor, name:string, name2:string){
//   return new cstr(name, name2)
// }

// console.log(createItem(commutePrice, "카카오톡자전거 : 1500원", "택시 : 1500원"));

// class item {

// }


// interface Pirce {
//   Price: item;
// }

// interface item {
//     itemName : string;
//     itemName2 : string;
// }



// const getUser = (item : item)=>{
//   console.log(`${item.itemName}, ${item.itemName2}`)
// }

// getUser({
//   itemName : "카카오톡자전거 : 1500원",
//   itemName2: "택시 : 3500원"
// })

// console.log(getUser)
