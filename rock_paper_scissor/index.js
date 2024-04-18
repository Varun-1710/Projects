const obj = {"rock" : {"rock" : "draw","paper" : "loss","scissor" : "win"},
            "paper" : {"rock" : "win","paper" : "draw","scissor" : "losss"},
            "scissor" : {"rock" : "loss", "paper": "win","scissor" : "draw"}};


const text = {"win" : ["You win <br> against PC","Play Again"],
            "loss" : ["You lost <br> against PC","Play Again"],
            "draw" : ["Tie Up","Replay"]};

const arr = ["rock","paper","scissor"];

const color = {"rock" : "#0074B6","paper" : "#FFA943" , "scissor" : "#BD00FF"};

let myScore = 0;
let pcScore = 0;

const updateScore = () => {
  document.getElementById('myScore').textContent = myScore;
  document.getElementById('pcScore').textContent = pcScore;

  localStorage.setItem('myScore', myScore.toString());
  localStorage.setItem('pcScore', pcScore.toString());
};

let myChoice;
let pcChoice = arr[Math.floor(Math.random() * arr.length)];

const img_array = document.getElementsByClassName('click');

for(let i=0;i<img_array.length;i++){
    img_array[i].addEventListener('click',(evt)=>{

        
        myChoice = evt.target.alt;
        pcChoice = arr[Math.floor(Math.random() * arr.length)];

        document.getElementById('main').style.display = 'none';
        document.getElementById('game').style.display = 'flex';

        document.getElementById('myImage').setAttribute('src',`images/${myChoice}.png`);
        document.getElementById('pcImage').setAttribute('src',`images/${pcChoice}.png`);

       const arr_border = document.querySelectorAll(".img_container .Image");

       
        let index = obj[myChoice][pcChoice];
        document.getElementById('res').innerHTML = text[index][0].toUpperCase();
        document.getElementById('btn').innerText = text[index][1].toUpperCase();

        arr_border[0].style.borderColor = color[myChoice];
        arr_border[1].style.borderColor = color[pcChoice];

        arr_border[0].classList.remove('glowing-box');
        arr_border[1].classList.remove('glowing-box');

        if (index == 'win') {
            document.getElementById('next').style.display = 'block';
            myScore++;
            arr_border[0].classList.add('glowing-box');
        } else if (index == 'loss') {
            document.getElementById('next').style.display = 'none';
            pcScore++;
            arr_border[1].classList.add('glowing-box');
        } else {
            document.getElementById('next').style.display = 'none';
        }

        


        updateScore();

    })
}

window.onload = () => {
    const savedMyScore = localStorage.getItem('myScore');
    const savedPcScore = localStorage.getItem('pcScore');

    if (savedMyScore) {
      myScore = parseInt(savedMyScore);
    }

    if (savedPcScore) {
      pcScore = parseInt(savedPcScore);
    }

    updateScore();
  };

document.getElementById('btn').addEventListener('click',()=>{
    document.getElementById('main').style.display = 'flex';
    document.getElementById('game').style.display = 'none';
})


document.getElementById('rules').addEventListener('click',()=>{
    document.getElementById('rule_box').style.display = 'flex';
    document.getElementById('cross').style.display = 'block';
});

document.getElementById('cross').addEventListener('click',()=>{
    document.getElementById('rule_box').style.display = 'none';
    document.getElementById('cross').style.display = 'none';
});