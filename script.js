
let ShowNum = document.getElementById("CurrentNumber");


let CurrentNumber = 5;

function IncreaseNumber(){
    if(CurrentNumber < 10){
        CurrentNumber ++;
        updateNumber();
        document.getElementById("Decrease").textContent = "Decrease Me"
        updateNumber();
    }else{
        document.getElementById("Increase").textContent = "You've reached the top"
    }
}

function DecreaseNumber(){
    if(CurrentNumber > 0){
        CurrentNumber --; 
        updateNumber();
        document.getElementById("Increase").textContent = "Increase Me"
        updateNumber();
    }else{
        document.getElementById("Decrease").textContent = "You've reached the bottom"
    }
    
}
function updateNumber(){
    ShowNum.textContent = CurrentNumber;
    

}