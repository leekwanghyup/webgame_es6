window.onload = function(){
    let buttonFlag = false;
    let $cardBtn = document.querySelectorAll('.col');
    let card = Array(8).fill(0);
    let first;
    let second; 

    let firstDiv; 
    let secondDiv;

    init(); 

    $cardBtn.forEach(function(btn, i){
        btn.innerHTML = 
            `<div>${card[i]}</div>
             <div class="cover"></div>`;

        btn.addEventListener('click',function(e){
            let test = this; 
            let cover = this.querySelector('.cover')
            

            if(!first){ // 첫번째 선택
                firstDiv = cover; 
                cover.className += ' open';
                first = test.firstChild.innerText; 
                return;
            } 
            
            if(first && !second){
                secondDiv = cover; 
                cover.className += ' open';
                second = test.firstChild.innerText;
            }

            if(first && second){
                if(first != second){
                    firstDiv.className = 'cover';
                    secondDiv.className = 'cover';
                } 
                first = false; 
                second = false; 
            }
        })
    })

    
    console.log(card);

    // 게임 세팅 
    function init(){
        // 번호 생성 
        card.forEach((elem,i) =>{
            if(i >= card.length/2 ){
                card[i] = i - card.length/2; 
                return; 
            }
            card[i] = i;
        });
        // 셔플 
        for(let i=0 ; i<2000; i++){
            let idx1 = Math.floor(Math.random()*4);
            let idx2 = Math.floor(Math.random()*4);
            var temp  = card[idx1]
            card[idx1] = card[idx2];
            card[idx2] = temp; 
        }
    }

    function eventControl(f){
        if(buttonFlag == true){
            setTimeout(function(){ console.log('실행중입니다.')}, 400);
            return; 
        }
        buttonFlag = true; 
        f(); 
        setTimeout(function(){
            buttonFlag = false;
        }, 200);
    }
    
}


