let signupBtn=document.querySelector(".signupBtn");
let loginSlider=document.querySelector(".loginSlider");
let singnupSlider=document.querySelector(".singnupSlider");
let mainDataInpSec=document.querySelector(".mainDataInpSec");

signupBtn.addEventListener("click", ()=>{
    loginSlider.classList.add("aniLeftToRight");
    
    setTimeout(() => {
    loginSlider.classList.add("pause");
    loginSlider.classList.add("hider");
    singnupSlider.classList.remove("hider");
    singnupSlider.classList.add("mar");
    }, 900);
    loginSlider.classList.remove("pause");
    
});

let loginBtn=document.querySelector(".loginBtn");

loginBtn.addEventListener("click", ()=>{
    singnupSlider.classList.add("aniRighttoLeft");
    
    setTimeout(() => {
        singnupSlider.classList.add("pause");
        singnupSlider.classList.add("hider");
        loginSlider.classList.remove("hider");
        singnupSlider.classList.remove("mar");
    }, 900);
    singnupSlider.classList.remove("pause");
});



// Responsie side
let responsiveJumperLogin=document.querySelector(".responsiveJumperLogin");

responsiveJumperLogin.addEventListener("click", ()=>{
    loginSlider.classList.add("hider");
    singnupSlider.classList.remove("hider");
});

let responsiveJumperSignup=document.querySelector(".responsiveJumperSignup");

responsiveJumperSignup.addEventListener("click", ()=>{
    loginSlider.classList.remove("hider");
    singnupSlider.classList.add("hider");
});


// Form Validation
let email=document.querySelector(".email");
let name=document.querySelector(".name");
let name2=document.querySelector(".name2");
let password=document.querySelector(".password");
let password2=document.querySelector(".password2");
let form=document.querySelector(".form");

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});