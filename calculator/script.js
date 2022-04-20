const calculatorDisplay = document.querySelector('h1');
const inputBtn = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

let firstValue = 0; //ตัวเลขตัวที่1
let operatorValue = '';
let waitForNext = false;//ป้อนตัวเลขตัวดำเนินการก่อนที่จะป้อนตัวต่อไปได้ หรือ เก็บตัวเลขและตัวสถานะตัวดำเนินการ

function setNumberValue(number) {   //2.รับค่าตัวเลขมาแสดง
   // console.log(number);ดีบัคเลขว่าแสดงมั้ย
   if (waitForNext){
       calculatorDisplay.textContent = number;
       waitForNext = false;
   }else{
    const displayValue = calculatorDisplay.textContent; //ดึงเลขแล้วเก็ยในdisplayValue เป็นค่าเริ่มต้น
    calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
    //นำค่าเดิมาเก็บแล้วถ้าค่าเดิมเป็น 0 จะให้ทำอะไร ในที่นี้จะให้แทนด้วย numberถ้าเป็นเลขอื่นให้ต่อกัน
   }

}

function callOperator(operator){ //สร้างfn callOperator เพื่อนำ operatorมาใช้งาน 
   // console.log(operator); 
   const currentValue = Number(calculatorDisplay.textContent);
   if(!firstValue){
       firstValue = currentValue; // เริ่มต้น
   }
    operatorValue = operator;
    waitForNext = true;
    console.log(firstValue);
    console.log(operator);
    console.log(currentValue);
    
}
function addDecimal() {
    if(waitForNext)return;
    if(!calculatorDisplay.textContent.includes('.')) //เรียหใช้งานfn includes เพื่อมองหาชาแร็ตเตอร์(.)ที่อยู่ในสตริง ถ้าไม่มีใส่!(not)เพื่อแสดงจุด 
        calculatorDisplay.textContent =`${calculatorDisplay.textContent}.`
        //นำข้อมูลเดิมมาใช้แล้ว ต่อด้วยจุดทศนิยม
   // console.log("decimal");
   
}

inputBtn.forEach((input)=>{
    //เข้าถึง input ทีละตัวโดยใข้ for each เพราะเป็น array ดึึงมาทีละปุ่นแล้วเอามากรองว่ามีสถานะอะไร
    //0-9
    if(input.classList.length === 0) {
        input.addEventListener('click', ()=>setNumberValue(input.value)); //1.กำหนดชื่อตัวแปรนั้นว่าถ้าคลิกแล้วจะเกิดอะไรขึ้น
    } //classlist เป็นการเข้สถึงชื่อคลาสใน input แต่ละตัว
    else if (input.classList.contains("operator")) {//มีการใส่ชื่อคลางในปุ่ม operator หรือป่าว
        input.addEventListener('click',()=>callOperator(input.value)); //เมื่อมีการกดปุ่มจะมีการเรียกใช้งานcallOperator
    }
    else if(input.classList.contains('decimal')){
        input.addEventListener('click',()=>addDecimal());
    }
}); 
function resetAll() {
    firstValue = 0;
    operatorValue= '';
    waitForNext = false;
    calculatorDisplay.textContent = '0';
}
clearBtn.addEventListener('click',()=>resetAll());
