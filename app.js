let gold = Number(localStorage.getItem("gold")) || 0;
let energy = 5500;

const goldEl = document.getElementById("gold");
const energyFill = document.getElementById("energyFill");
const orb = document.getElementById("orb");

function render(){
  goldEl.textContent = gold;
  energyFill.style.width = (energy/5500*100)+"%";
}
render();

function tap(auto=false){
  if(energy<=0) return;
  energy--;
  gold += (Date.now()<boost2xUntil?2:1);
  localStorage.setItem("gold", gold);
  render();
  if(!auto) haptic();
}

orb.addEventListener("click", ()=>tap());

setInterval(()=>{
  energy = Math.min(5500, energy+1);
  render();
},1000);

function showScreen(id){
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  document.querySelectorAll(".menu button").forEach(b=>b.classList.remove("active"));
  event.target.classList.add("active");
}

function withdraw(){
  const id = document.getElementById("gameId").value;
  const amount = document.getElementById("amount").value;
  document.getElementById("withdrawStatus").textContent =
    "Заявка отправлена ✔";
}
