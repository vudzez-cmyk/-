const CHANNEL_URL = "https://t.me/+s1VSvO5kwp45OTFi";

function openChannel(){
  window.open(CHANNEL_URL, "_blank");
}

function confirmSubscribe(){
  localStorage.setItem("subscribed", "1");
  document.getElementById("subscribe").classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");
}

function haptic(){
  if(window.Telegram?.WebApp?.HapticFeedback){
    Telegram.WebApp.HapticFeedback.impactOccurred("light");
  }
}

if(localStorage.getItem("subscribed")==="1"){
  document.getElementById("subscribe").classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");
}
