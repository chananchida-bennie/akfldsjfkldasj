const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');

const text= 'javascript text keybord';
let speed = 300/speedEl.value; //300speedmillisec/1 300/2
 //หาตัสชวมานับว่าพิมถึงตัวอักษรที่เท่าไหร่
 let charactorId=1;
 writeText();

 function writeText() {
    textEl.innerText = text.slice(0,charactorId);
    charactorId++;
    if (charactorId>text.length){
        charactorId=1;
    }

    setTimeout(writeText, speed);
 }
 speedEl.addEventListener('input',(e) =>{
     speed = 300/e.target.value;
 })