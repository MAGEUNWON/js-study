let date = new Date();
console.log(date);
let hour = date.getHours();
console.log(hour);
let now = "현재시간은" + hour + "시이므로" + ((hour >12) ? "오후" : "오전") +"입니다.";
console.log(now);