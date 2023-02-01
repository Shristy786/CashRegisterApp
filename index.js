const billAmount=document.querySelector('#bill-amount');
const cashGiven=document.querySelector('#cash-given');
const checkButton=document.querySelector("#check-button");
const errorMessage=document.querySelector(".error-message");
const noOfNotes=document.querySelectorAll(".no-of-notes");

const availableNotes=[2000,500,100,20,10,5,1];


checkButton.addEventListener('click',function validateCashAndBillAmount(){
      
    errorMessage.style.display='none';
    if(billAmount.value>0)
    {
        if(cashGiven.value>=billAmount.value)
        {
             const amounttobeReturned=cashGiven.value-billAmount.value;
             calculateChange( amounttobeReturned);

        }
        else{
            showErrorMessage("Do you wanna wash plates???");
        }
    }
    else
    {
        showErrorMessage("Enter A valid Bill Amount");
    }



});

function calculateChange( amounttobeReturned)
{
    for(let i=0;i<availableNotes.length;i++)
    {
        const numberOfNotes=Math.trunc(amounttobeReturned/availableNotes[i]);

        amounttobeReturned=amounttobeReturned%availableNotes[i];
        noOfNotes[i].innerHTML=numberOfNotes;
    }
    

}
 
function showErrorMessage(message)
{
    errorMessage.style.display='block';
            errorMessage.innerHTML=message;
}