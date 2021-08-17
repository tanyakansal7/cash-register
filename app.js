const billAmount= document.getElementById("bill-amount");
const cashGiven=document.getElementById("cash-given");
const checkButton=document.getElementById("check-button");
const message= document.getElementById("error-message");
const availableNotes=[2000,500,200,100,50,20,10,5];
const noOfNotes=document.querySelectorAll(".no-of-notes")
checkButton.addEventListener("click",function validateBillAndCashAmount() {
   hideMessage();
    if(billAmount.value>0){
if(cashGiven.value >= billAmount.value){
const amountToBeReturned=cashGiven.value-billAmount.value;
calculateChange(amountToBeReturned);
}else{
  showMessage("Do your wanna wash plates");
}
    }else{
       showMessage("Invalid Bill Amopunt Entered.");
    }

});
function hideMessage() {
    message.style.display="none";
}
function calculateChange(amountToBeReturned) {
    for(let i=0;i<availableNotes.length;i++){
        const numberOfNotes= Math.trunc(amountToBeReturned/availableNotes[i]);
        amountToBeReturned=amountToBeReturned%availableNotes[i];
        noOfNotes[i].innerText=numberOfNotes;
    }
}
function showMessage(msg) {
    message.style.display="block";
    message.innerText=msg;
}