const content = document.querySelectorAll('.content');

document.addEventListener('scroll',showText);

function showText() {
    content.forEach((section)=>{ //ลูปมาทีละเซคชั่น
    const imgEl = section.querySelector('img');
    const textEl = section.querySelector('.text');

    const scrollPos =window.pageYOffset;
    // 500 + 100/50
    //502 จะแสดงข้อความ
    const textPosition = imgEl.offsetTop + imgEl.offsetHeight/50;
    if (scrollPos > textPosition){
        textEl.classList.add('show-reveal');
        //แสดง
    }else{//ปิดการแสดงเนื้อหา
        textEl.classList.remove('show-reveal');
    }
    });
}