const countdownForm = document.getElementById('countdownForm');
const  inputContainer = document.getElementById('input-container');
const dateEl = document.getElementById('date-picker');
const countDownEl = document.getElementById('countdown');

const countDownTitleEl = document.getElementById('countdown-title');
const countDownButtonEl = document.getElementById('countdown-button');
const timeEl = document.querySelectorAll('span');

const completeEl = document.getElementById('complete');
const completeInfoEl = document.getElementById('complete-info');
const completeButtonEl = document.getElementById('complete-button');
//ควบคุมการทำงาน
let countDownTitle = '';
let countdownDate  ='';
let countdownValue = Date; //เก็ยวันที่เลือกจากฟอม
let countdownActive; //ตัวนัยเวลา
let saveCountDown; //เก็บข้อมูลและวันแจ้งเตือน

//ตัวแปรแปลงหน่วยเวลา
const second = 1000;
const minute = second*60;
const hour  =minute*60;
const day = hour*24;

countdownForm.addEventListener('submit', updateCountdown);

function updateCountdown(e) {
    e.preventDefault();
    //console.log(e.srcElement[1].value);
    countDownTitle=e.srcElement[0].value;
    countdownDate=e.srcElement[1].value;

    if (countDownTitle ===''){
        alert('ป้อนข้อมูลไม่ครบ');
    }else{
        saveCountDown={title:countDownTitle,Date:countdownDate};
        localStorage.setItem('countdown',JSON.stringify(saveCountDown));
        countdownValue=new Date(countdownDate).getTime();//เวลาที่ตั้งไว้
        setUpTime();
    }
}
function setUpTime(){
    countdownActive=setInterval(()=>{
//ที่ตั้งไว้ -ปัจจุบัน
        const now = new Date().getTime();
        const distance = countdownValue - now;
        const days = Math.floor(distance/day);
        const hours = Math.floor((distance%day)/hour);
        const minutes = Math.floor((distance%day)/hour);
        const seconds= Math.floor((distance%minute)/second);
        inputContainer.hidden=true;

        if(distance<0){
            countDownEl.hidden=true;
            completeEl.hidden=false;
            completeInfoEl.textContent = `${countDownTitle}วันที่${countdownDate}`
            clearInterval(countdownActive);
            //หมดเวลา
        }else{
            countDownTitleEl.textContent=`${countDownTitle}`;
            //นับถอยหลังเรื่อยๆ
            timeEl[0].textContent=`${days}`;
            timeEl[1].textContent=`${hours}`;
            timeEl[2].textContent=`${minutes}`;
            timeEl[3].textContent=`${seconds}`;
            countDownEl.hidden=false;
            completeEl.hidden=true;
        }
    },second);
}
function callDatainstore() {
    if (localStorage.getItem('countdown')){
        inputContainer.hidden = true;
        saveCountDown = JSON.parse(localStorage.getItem('countdown'));
        countDownTitle = saveCountDown.title;
        countdownDate = saveCountDown.date;
        countdownValue=new Date(countdownDate).getTime();
        setUpTime();
    }
}
function reset(){
    localStorage.removeItem('countdown');
    countDownEl.hidden=true;
    completeEl.hidden=true;
    inputContainer.hidden= false;
    clearInterval(countdownActive);
    countDownTitle='';
    countdownDate='';
}
callDatainstore();
countDownButtonEl.addEventListener('click',reset);
completeButtonEl.addEventListener('click',reset);