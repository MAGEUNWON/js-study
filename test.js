const fs = require('fs');

// fs.writeFile('./sangho.txt', "이상호바보", function(error){
//   if(error){
//     throw error;
//   }

// });
// 파일 만드는 것 

fs.mkdir('./sangho', function(error){
  if(error){
    throw error;
  }

});

// 폴더 만드는 것