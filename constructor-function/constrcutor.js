
export default function me(name, age, address, tel){
  if(typeof(name)==="string"
  && typeof(age)==="number"
  && typeof(address)==="string"
  && typeof(tel)==="number"){
    
    this.name = name;
    this.age = age;
    this.address = address;
    this.tel = tel;

  }

}


const ma = new me("geunwon", 20, "모름", "01012345678");

  