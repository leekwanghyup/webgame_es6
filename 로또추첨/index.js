window.onload = function(){

let $result = document.querySelector('.result');
let $bonus = document.querySelector('.bonus');
let $button = document.querySelector('.button');
let buttonFlag = false; 


let lottoNumber = Array(45)
lottoNumber.fill(0); 
let tries = [];
let ball = Array(7); 
let bgColor = ['red','blue','yellow','aqua','pink','purple','green']
let renderingBall = Array(7); 
renderingBall.fill('');

$button.addEventListener('click',()=>{
    startMain(init,raffle);
});

// 1~45 번호 준비 
function init(){
    lottoNumber.forEach((e,i)=>{
        lottoNumber[i] = i+1;
    });

    // 셔플 
    for(let i=0 ; i<2000; i++){
        let idx1 = Math.floor(Math.random()*45);
        let idx2 = Math.floor(Math.random()*45);
        var temp  = lottoNumber[idx1]
        lottoNumber[idx1] = lottoNumber[idx2];
        lottoNumber[idx2] = temp; 
    }

    // 7개 공뽑기 :  섞어놓은 배열의 인덱스를 정하자 
    while(true){
        let idx = Math.floor(Math.random()*45); 
        if(!tries.includes(idx)){
            tries.push(idx);
        }
        if(tries.length >= 7 ) break; 
    }

    // 7개 공뽑기 : 위에서 정해진 인덱스 기반으로 공을 선택하여 정렬  
    tries.forEach((e,i)=>{
        ball[i] = lottoNumber[e];
    })
    ball.sort((a,b)=> a-b);
}

function raffle(){
    reset(); 
    let idx = 0; 
    renderingBall.forEach((e,i)=>{
    (function(e,i){
        e = document.createElement('div'); 
        e.setAttribute('class','ball')
        e.style.backgroundColor = bgColor[i];
        e.innerText = ball[i];
        setTimeout(function(){
            if(idx == 6 ){
                $bonus.append(e);
                return;
            } 
            $result.append(e);  
            idx++;
        },1000*(i+1));
    })(e,i);
    });
}


function reset(){
    while($result.hasChildNodes()) {
        $result.removeChild($result.firstChild); 
    }
    while($bonus.hasChildNodes()){
        $bonus.removeChild($bonus.firstChild); 
    }
}


function startMain(init,raffle){
    if(buttonFlag == true){
        setTimeout(function(){ console.log('실행중입니다.')}, 7000);
        return; 
    }
    buttonFlag = true; // 애니메이션이 실행되는 동안 플래그 활성화 
    init();   
    raffle(); 
    setTimeout(function(){
        buttonFlag = false;  // 작업후 플래그 비활성 
    }, 7000);
}












}