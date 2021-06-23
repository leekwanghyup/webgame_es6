const $result = document.querySelector('.result');
const $bonus = document.querySelector('.bonus')
let candidate = Array(45).fill().map((v,i)=> i + 1);
let suffle = [];

while(candidate.length > 0 ){
    const random = Math.floor(Math.random() * candidate.length);
    const spliceArray = candidate.splice(random,1);
    const value = spliceArray[0]; 
    suffle.push(value); 
}

let winBalls = suffle.slice(0,6).sort((a,b)=>a-b);
let bonus = suffle[6];

const drawBall = (number, $target)=>{
    const $ball = document.createElement('div');
    $ball.className = 'ball';
    colorize(number,$ball);
    $ball.textContent = number;
    $target.appendChild($ball);
}

// 추첨번호 그리기 
for(let i = 0; i<6; i++){
    setTimeout(function(){  
        drawBall(winBalls[i], $result);
    },(i+1) * 1000); 
}

// 보너스 
setTimeout(function(){
    drawBall(bonus, $bonus);
}, 7000);


function colorize(number, $tag){
    if(number<10){
        $tag.style.backgroundColor = 'red';
        $tag.style.color = 'white';
    } else if (number <20){
        $tag.style.backgroundColor = 'blue';
        $tag.style.color = 'white';

    } else if (number <30){
        $tag.style.backgroundColor = 'green';
        $tag.style.color = 'white';
    } else if (number <40){
        $tag.style.backgroundColor = 'orange';
        $tag.style.color = 'white';
    } else {
        $tag.style.backgroundColor = 'yellow';
        $tag.style.color = 'white';
    }
}