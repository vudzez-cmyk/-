
const CHANNEL_URL='https://t.me/+s1VSvO5kwp45OTFi';
function openChannel(){window.open(CHANNEL_URL,'_blank')}
function confirmSubscribe(){
 localStorage.setItem('sub','1');
 document.getElementById('subscribe').style.display='none';
 document.getElementById('app').style.display='block';
}
if(localStorage.getItem('sub')==='1'){
 document.getElementById('subscribe').style.display='none';
 document.getElementById('app').style.display='block';
}
