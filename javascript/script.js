let saleTime = 86400;  
let Timer=()=>{
    let hours=Math.floor(saleTime/3600);
    let minutes = Math.floor((saleTime % 3600) / 60);
    let seconds = saleTime % 60;
    document.getElementById('timer').innerText=`Sale Starts In: ${hours}h ${minutes}m ${seconds}s`;
    if (saleTime > 0)
         saleTime--;
}
setInterval(Timer, 1000);

//slider
 