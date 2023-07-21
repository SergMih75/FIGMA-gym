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