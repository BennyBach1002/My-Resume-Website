const submitbtn = document.getElementById("Submit")
const nameInput = document.getElementById('Name')
const emailInput = document.getElementById('E-mail')
const writeMoreInput = document.getElementById('Write-more')
const FormInput = document.getElementsByClassName("Submit-Form")



// FormInput.addEventListener('click', onSubmit);
   
submitbtn.addEventListener('click',onSubmit)

function onSubmit(e) {
    e.preventDefault();
    window.alert('Thanks for submiting')
}


const mySong = document.getElementById("mySong");
const onIcon = document.getElementById("on-icon")
const offnIcon = document.getElementById("off -icon")


onIcon.addEventListener('click',playMusic)
window. onload = playMusic
function playMusic(){
    if(mySong.paused){
        mySong.play();
        document.getElementById("on-icon").src="./sound.png";
    }else{
        mySong.pause();
        document.getElementById("on-icon").src="./mute.png";
    }
}