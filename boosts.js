let boost2xUntil = 0;
let autoTapUntil = 0;

function activateBoost2x(){
  boost2xUntil = Date.now()+30000;
}

function activateAutoTap(){
  autoTapUntil = Date.now()+60000;
}

setInterval(()=>{
  if(Date.now()<autoTapUntil){
    tap(true);
  }
},2000);
