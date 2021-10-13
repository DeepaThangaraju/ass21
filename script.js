
    function timer() {
        return new Promise(function(resolve, reject) {
  
            setTimeout(resolve, 0);
        }).then(function timer1(){
            setTimeout(()=>{
                return document.querySelector("h1").innerText="10";
             },1000*1); 
        }).then(function timer2() {
            setTimeout(timer1=>{
                return document.querySelector("h1").innerText="9";
             },1000*2); 
        }).then(function timer3() {
            setTimeout(timer2=>{
                return document.querySelector("h1").innerText="8";
             },1000*3); 
        }).then(function timer4() {
            setTimeout(timer3=>{
                return document.querySelector("h1").innerText="7";
             },1000*4); 
        }).then(function timer5() {
            setTimeout(timer4=>{
                return document.querySelector("h1").innerText="6";
             },1000*5); 
        }).then(function timer6() {
            setTimeout(timer5=>{
                return document.querySelector("h1").innerText="5";
             },1000*6); 
        }).then(function timer7() {
            setTimeout(timer6=>{
                return document.querySelector("h1").innerText="4";
             },1000*7); 
        }).then(function timer8() {
            setTimeout(timer7=>{
                return document.querySelector("h1").innerText="3";
             },1000*8); 
        }).then(function timer9() {
            setTimeout(timer8=>{
                return document.querySelector("h1").innerText="2";
             },1000*9); 
        }).then(function timer10() {
            setTimeout(timer9=>{
                return document.querySelector("h1").innerText="1";
             },1000*10); 
        }).then(function happy() {
            setTimeout(timer10=>{
                return document.querySelector("h1").innerText="Happy Independence day";
             },1000*11); 
        });
    }
    timer();