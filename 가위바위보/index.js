const $computer = document.querySelector('#computer');
const $score = document.querySelector('#score');
const $rock = document.querySelector('#rock');
const $scissors = document.querySelector('#scissors') ;
const $paper = document.querySelector('#paper');
const IMG_URL = './rsp.png';
// console.log($computer,$score, $rock, $scissors, $paper);
$computer.style.background = `url(${IMG_URL}) -220px 0`; 
$computer.style.backgroundSize = 'auto 200px';

const rspX  = { // 스프라이트 이미지 X좌표 
    scissors : '0', 
    rock : '-220px',
    paper : '-440px'
}; 

// 가위 바위 보 이미지가 연속해서 바뀌는 코드 
let computerChoice = 'rock';
const changeComputerHand = ()=>{
    if(computerChoice === 'rock'){
        computerChoice = 'scissors';
    }
    else if(computerChoice === 'scissors'){
        computerChoice = 'paper';
    }
    else if(computerChoice === 'paper'){
        computerChoice = 'rock';
    }
    $computer.style.background = `url(${IMG_URL}) ${rspX[computerChoice]} 0`;
    $computer.style.backgroundSize = 'auto 200px'; // url()을 변경하면 다시 설정해야함 
}

// 
const scoreTable = {
    rock : 0, 
    scissors : 1, 
    paper : -1 
}

// 이벤트 리스너 등록 -  버튼을 클릭했을 때 
let intervalId = setInterval(changeComputerHand, 50); 
let clickable = true; 
let com_score = 0; 
let my_score = 0; 
const clickButton = (e)=>{
    if(clickable){
        clearInterval(intervalId); 
        clickable = false; // 클릭 금지 
        // 점수계산 및 화면 표시 
        const myChoice = e.target.id === 'rock' ? 'rock'
            : e.target.id === 'scissors' ? 'scissors' : 'paper'; 
        const myScore = scoreTable[myChoice]; 
        const computerScore = scoreTable[computerChoice];
        const diff = myScore - computerScore; 
        console.log(diff);

        // diff :  승리 (2,-1) 패배 (-2, 1) 무승부(0)
        let message; 
        if( [2,-1].includes(diff)){ // 코드를 줄였을때 가독성이 떨어진다면 반드시 주석처리 
            my_score += 1; 
            message = '승리';
        }
        else if ( [-2,1].includes(diff)){
            com_score += 1; 
            message = '패배';
        } else {
            message = '무승부';
        }
        $score.textContent = `${message}! 내 점수 : ${my_score}점 : / 컴퓨터 점수 : ${com_score}`;
        if(my_score >= 3){ // 버그로인해 3점 이상 초과되는경우 고려 
            alert('나의 승리');
        } 
        else if(com_score >= 3){
            alert('컴퓨터 승리');
        } else{ // 게임 계속 
            setTimeout(()=>{
                clickable = true; // 1초 후 클릭 가능 
                intervalId = setInterval(changeComputerHand, 50); // 타이머를 멈췄다면 다시 등록해야한다. 
            },1000); 
        }
    }
}

$rock.addEventListener('click',clickButton);
$scissors.addEventListener('click',clickButton);
$paper.addEventListener('click',clickButton);

