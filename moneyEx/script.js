const currency_one = document.getElementById('currency-one')
const currency_two = document.getElementById('currency-two')

const amount_one = document.getElementById('amount-one');
const amount_two = document.getElementById('amount-two');

const rateText=document.getElementById('rate');
const swap = document.getElementById('btn');

currency_one.addEventListener('change',calculateMoney);
currency_two.addEventListener('change',calculateMoney);
amount_one.addEventListener('input',calculateMoney);
amount_two.addEventListener('input',calculateMoney);
function calculateMoney() {
    const one = currency_one.value;
    const two = currency_two.value;
   
     //  เป็นการเอาข้อมูลจากดอปดาวเก็บไว้ในตัวแปร
    fetch(`https://v6.exchangerate-api.com/v6/32c70bcd5c18219ba1ec17a9/latest/${one}`).then(res=>res.json()).then(data=>{
      
    const rate =  data.conversion_rates[two];
    rateText.innerText= `1 = ${one} = ${rate} ${two}`;
    amount_two.value=(amount_one.value*rate).toFixed(2);
    })
    /*ใช้thenเพื่อแสดงว่าคอลแล้วจะเกิดอะไรขึ้น //ต่อมาทำเป็นjason แล้วเก็บที่ data //วงเล็บป่าว()สร้าง
    ฟังก์ชั่นไม่มีการรับค่าข้างใน */ 
    
    }
    swap.addEventListener('click',()=>{
       const temp = currency_one.value; //ดึงต่าcurrency_one.value มาใช้งานแล้วสร้างตัวแปรมาเก็ชั่วคราว
       currency_one.value = currency_two.value; //ค่าต้นทางเปลี่นร
       currency_two.value = temp;
       calculateMoney();
    })
    calculateMoney();

    


