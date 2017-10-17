window.onload = function(){
   var circle = document.querySelector("#moving-circle");
   window.setInterval(function(){
     Moveit.put(circle, {
          start: '0%',
          end: '0%',
          visibility: 1
        });
     Moveit.animate(circle, {
          visibility: 1,
          start: '0%',
          end: '100%',
          duration: 1,
          delay: 1,
          timing: 'ease-out'
        });
   }, 3000);
}
 function page2(){
    var next = document.querySelector("#next-item");
    
      if (next.style.marginLeft !== "-70%") {
          next.style.marginLeft = "20%";
          next.style.transition="margin-left 2s ease-in";
      }
} 
function page1(){
  var prev = document.querySelector("#next-item");
     if(prev.style.marginLeft != "-70%"){
        prev.style.marginLeft="-70%";
        prev.style.transition="margin-left 1s ease";
      }
}