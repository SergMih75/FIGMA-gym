let left = 0;
let forward = document.querySelector('.btn-forward');
let back = document.querySelector('.btn-back');
let sliderLine = document.querySelector('.reviews-slider-line')

forward.addEventListener('click', function goForward() {
        if (forward.classList.contains('btn-active')) {
            left +=482
    if (left>0) {
        back.classList.add('btn-active') 
    }
    if (left==1446) {
        forward.classList.remove('btn-active')
    }
    sliderLine.style.left=-left+'px'
}})

back.addEventListener('click', function goback() {
    if (back.classList.contains('btn-active')) {
        left -=482
    if (left<1446) {
        forward.classList.add('btn-active')       
    }
    if (left==0) {
        back.classList.remove('btn-active')       
    }
    sliderLine.style.left=-left+'px'
}})

let videoBtn = document.querySelector(".video-btn");
let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.popup-close');
// let video = document.getElementById("video")
// let bodyScroll = document.querySelector('.wrapper');

videoBtn.addEventListener ("click", ()=> {
//     popup.style.display="block";
    popup.style.opacity=1;
    popup.style.visibility="visible";
//     video.play();
//     bodyScroll.scrollTop=0;
//     bodyScroll.style.overflow="hidden";
    
})

popupClose.addEventListener ('click', ()=> {
//     video.pause();
    popup.style.opacity=0;
    popup.style.visibility="hidden";
//     bodyScroll.style.overflow="auto";
})