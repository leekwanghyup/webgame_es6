const $screen = document.querySelector('#screen');
const $result = document.querySelector('#result');



$screen.addEventListener('click',(event)=>{
    if (event.target.classList.contains('waiting')){ // 대기화면
        
    } 
    else if (event.target.classList.contains('ready')){ // 준비화면

    }
    else if (event.target.classList.contains('now')){ // 시작화면 

    }
})
