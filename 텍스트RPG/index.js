// 메뉴 
const $startScreen = document.querySelector('#start-screen');
const $screen = document.querySelector('#screen');
const $gameMenu = document.querySelector('#game-menu');
const $battleMenu = document.querySelector('#battle-menu');
const $message = document.querySelector('#message');

// 영웅
const $heroName = document.querySelector('.hero-name');
const $heroLevel = document.querySelector('.hero-level');
const $heroHp = document.querySelector('.hero-hp');
const $heroXp = document.querySelector('.hero-xp');
const $heroAtt = document.querySelector('.hero-att');

//몬스터 
const $monsterName = document.querySelector('.monster-name');
const $monsterHp = document.querySelector('.monster-hp');
const $monsterAtt = document.querySelector('.monster-att');

// 영웅 초기 스탯 
const hero = { 
    name : '',
    maxHp : 100,
    hp : 100, 
    xp : 0, 
    att : 10, 
}


// 게임시작 
$startScreen.addEventListener('submit',function(e){
    e.preventDefault(); 
    const name = e.target.querySelector('.name-input').value; 
    $startScreen.style.display = 'none'; 
    $gameMenu.style.display = 'block'; 
    $screen.style.display = 'block'; 
    $heroName.textContent = name; 
}); 

// 게임메뉴 
$gameMenu.addEventListener('submit',function(e){
    e.preventDefault(); 
    const input = e.target.querySelector('select').value;
    console.log(input);
    
    
});


