setTimeout(function(){
  console.log("a");

  setTimeout(function(){
    console.log("b");

    setTimeout(function(){
      console.log("c");
      
    }, 2000);

  }, 1000);

}, 3000);
    

      
  