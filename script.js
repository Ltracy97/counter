let value = 0;

function updatecounter(){

const count = document.getElementById("counter");

count.textContent = value;

if(value>0){

    count.className = "positive";
}
else if(value<0){

    count.className = "negative";
}
else{
    count.className = "num";
}
}


function increment(){

    value++;

    updatecounter();
}

function deincrement(){

    value--;

    updatecounter();
}

function reset(){
    value = 0;

    updatecounter();

}

document.querySelector("button.increment").addEventListener('click', increment);

document.querySelector("button.deincrement").addEventListener('click', deincrement);

document.querySelector("button.reset").addEventListener('click', reset);

