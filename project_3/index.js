let data = document.getElementById("main");

let press = (event) =>{
    let val = event.target.textContent;

    if(data.innerText == "0"){
        if(val != "/" || val != "+" || val != "*"){
            data.innerText = val;
        }  
    }

    else{
        data.innerText += val;
    }

    
    
};


const operators = document.getElementsByClassName("op");

for(let i=0;i<operators.length;i++){
    operators[i].addEventListener('click',press);
}



let del = () =>{
    if(data.innerText.length == 1){
        data.innerText = "0";
    }

    else{
        data.innerText = data.innerText.substring(0,data.innerText.length-1);
    }
}

let reset = () =>{
    data.innerText = "0";
}

let equate = ()=>{
    let x = eval(data.innerText);
    data.innerText = x.toFixed(3);
}



