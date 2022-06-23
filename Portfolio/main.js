const submitbtn = document.getElementById("Submit")
const nameInput = document.getElementById('Name')
const emailInput = document.getElementById('E-mail')
const writeMoreInput = document.getElementById('Write-more')
const FormInput = document.getElementsByClassName("Submit-Form")



// FormInput.addEventListener('click', onSubmit);
   
submitbtn.addEventListener('click',onSubmit)

function onSubmit(e) {
    e.preventDefault();
    
    if(nameInput == "" || emailInput == ""){
        console.log('Please fill name and email ');
    }else{

        console.log(nameInput.value + emailInput)
    } 
}
