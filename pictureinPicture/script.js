const videoEl = document.getElementById('video');
const btnRequest = document.getElementById('requestbtn');
const btnShare= document.getElementById('sharebtn');


btnRequest.addEventListener('click',()=>{
    selectMediaStream();
});

btnShare.addEventListener('click', () =>{
    btnShare.disabled = true;
    await videoEl.requestPictureInPicture();
    btnShare.disabled = false;
});
//ส่งคำขอเข้าถึงอุปกรฯ์
async function selectMediaStream() {
    try{
        const MediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoEl.onloadedmetadata = () =>{
            videoEl.play();
        }
    }catch(error){
        console.log(error);
    }
}