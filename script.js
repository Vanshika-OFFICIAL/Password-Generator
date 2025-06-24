let inputSlider=document.getElementById("inputSlider");
let sliderValue=document.getElementById('sliderValue');
let lowercase=document.getElementById("lowercase");
let uppercase=document.getElementById("uppercase");
let numbers=document.getElementById("numbers");
let password=document.getElementById("password");
let symbols=document.getElementById("symbols");
let genBtn=document.getElementById("genBtn");
let copyIcon=document.getElementById("copyIcon");



//input sliding value updation
sliderValue.textContent=inputSlider.value;//to show slider value before event happening  
inputSlider.addEventListener('input',()=>{
    sliderValue.textContent=inputSlider.value;
});

genBtn.addEventListener('click',()=>{
    password.value=generatePassword();
});

const lowerChars="abcdefghijklmnopqrstuvwxyz";
const upperChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberSet="0123456789";
const symbolSet="!@#$%^&*";

//Function to generate password
function generatePassword(){
    let genPassword="";
    let allChars="";

    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += numbers.checked ? numberSet : "";
    allChars += symbols.checked ? symbolSet : "";
    
let i=0;
while(i<inputSlider.value){
    genPassword+=allChars.charAt(Math.floor( Math.random()*allChars.length)) ;
    i++; 
}
   
    return genPassword;
}
 
//copy the password
copyIcon.addEventListener('click',()=>{
    if(password.value.trim() !==""){
    navigator.clipboard.writeText(password.value);
    copyIcon.innerText="check";
    copyIcon.title="Password Copied!";
    setTimeout(() => {
        copyIcon.innerText="content_copy";
        copyIcon.title="Copy Password";
    }, 2000);
    }
   
})