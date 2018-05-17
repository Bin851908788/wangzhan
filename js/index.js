window.onload= function () {
         let picture = document.querySelectorAll(".bannerBox>div");
         let now  = 0;
         let next =0;
         let banner = document.querySelector(".banner");
         let rightBtn = document.querySelector(".rightBtn");
    console.log(rightBtn);
    let leftBtn = document.querySelector(".leftBtn");
         let Wh = window.innerHeight;
         let item = document.querySelector(".item");
    let flagdow =true;
    let flagup=true;


          let width=parseInt(getComputedStyle(picture[0],null).width);
        console.log(width);
        let Dot = document.querySelectorAll(".bannerDot>div");



    let t=setInterval(move,3000);
    
    function move() {
       next++
        if (next===picture.length){
              next=0;
        }
        picture[next].style.left =width+"px";
            animate(picture[now],{left:-width});
            animate(picture[next],{left:0});
            Dot[now].classList.remove("active");
            Dot[next].classList.add("active");


        now = next
    }
    function move1() {
        next--
        if (next<0){
            next=picture.length-1;
        }
        picture[next].style.left =-width+"px";
        animate(picture[now],{left:width});
        animate(picture[next],{left:0});
        Dot[now].classList.remove("active");
        Dot[next].classList.add("active");


        now = next
    }

    Dot.forEach(function (element,index) {
         element.onclick=function () {
             if (now===index){
                 return
             }
             Dot[now].classList.remove("active");
             Dot[index].classList.add("active");
             if (now>index){
                 picture[index].style.left =-width+"px"
                 animate(picture[index],{left:0});
                 animate(picture[now],{left:width})
             }
             if (now<index){
                 animate(picture[now],{left:-width});
                 animate(picture[index],{left:0})
             }

             now = next =index
         }
    })

       banner.onmouseenter=function () {
           clearInterval(t)
       }
       banner.onmouseleave = function () {
           t=setInterval(move,3000)
       }
   rightBtn.onclick = function () {
       move()
   }
   leftBtn.onclick = function () {
        move1()
    }



 window.onscroll= function () {
     let TH = document.body.scrollTop||document.documentElement.scrollTop;
     if (TH>200){
         if (!flagdow){
             return
         }
         flagdow=false;
         animate(item,{top:0},function () {
             flagup =true;
             flagdow =true
         });
     } else {
         if (!flagup){
             return
         }
         flagup=false
         animate(item,{top:-100},function () {
             flagup =true;
             flagdow =true
         })
     }


 }





    let span  =document.querySelectorAll(".time>span");
    let span1 =document.querySelectorAll(".bootmtime>span")
    Dates()
    setInterval(Dates,1000);
    function Dates() {
        let arr = fn();




        // arr.forEach(function (element,index) {
        //      span[index].innerText =element
        //  });
        // }
        arr.forEach((element,index)=>{
            span[index].innerText=element
            span1[index].innerText =element
        })
    }
    function fn() {

        let arr =[]
        let now = new Date()
        let date   = new Date();
        date.setMonth(4);
        date.setDate(1);
        date.setHours(0);
        date.setMinutes(0)
        date.setSeconds(0);





        let time  =Math.floor((now.getTime()-date.getTime())/1000);
        let month = Math.floor(time/(60*60*24*30));

        time= time%(60*60*24*30);
        let day = Math.floor(time/(60*60*24));
        arr.push(day)
        time  = time%(60*60*24);
        let hours =Math.floor(time/(60*60));
        arr.push(hours)
        time = time %(60*60);

        let minutes = Math.floor(time/60);
        arr.push(minutes);
        let seconde  =time %60;
        arr.push(seconde);
        return arr

    }


};