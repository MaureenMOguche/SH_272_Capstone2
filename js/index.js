
// mobile menu

const mobileMenu = document.getElementById("mobile-menu");
const topNav = document.getElementById("topnav");


mobileMenu.addEventListener('click', ()=>{

    if (topNav.classList.contains("not-display")){
        topNav.classList.remove("not-display");
        topNav.classList.add("display");
        mobileMenu.innerHTML = "X";
    }
    else if (topNav.classList.contains("display")){
        topNav.classList.remove("display");
        topNav.classList.add("not-display");
        mobileMenu.innerHTML = "&#9776";
    }
    
})




// form validation 

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2"); 
const errorText = document.getElementsByClassName("error-text");
const errorIcon = document.getElementsByClassName("error-icon");
const successIcon = document.getElementsByClassName("success-icon");
const genders = document.getElementsByName("gender");


form.addEventListener('submit',(e)=> {

    e.preventDefault();


    if (username.value === ""){
        errorText[0].textContent = "Please enter valid username";
        errorIcon[0].style.opacity = "1";
    }
    else {
        errorText[0].textContent = "";
        errorIcon[0].style.opacity = "0";
        successIcon[0].style.opacity = "1";
    }


    if (email.value === ""){
        errorText[1].textContent="Please enter email";
        errorIcon[1].style.opacity = "1";
    }
    else{
        errorText[1].textContent = "";
        errorIcon[1].style.opacity = "0";
        successIcon[1].style.opacity = "1";
        
    }

    if (phone.value === ""){
        errorText[2].textContent="Please enter phone number";
        errorIcon[2].style.opacity = "1";
    }
    else{
        errorText[2].textContent = "";
        errorIcon[2].style.opacity = "0";
        successIcon[2].style.opacity = "1";
        
    }

    if (password.value === ""){
        errorText[3].textContent="Please enter password";
        errorIcon[3].style.opacity = "1";
    }
    else{
        errorText[3].textContent = "";
        errorIcon[3].style.opacity = "0";
        successIcon[3].style.opacity = "1";
        
    }

    if (password2.value === ""){
        errorText[4].textContent="Please confirm password";
        errorIcon[4].style.opacity = "1";
    }
    else{
        errorText[4].textContent = "";
        errorIcon[4].style.opacity = "0";
        successIcon[4].style.opacity = "1";       
    }

    if (genders[0].checked == true){
        successIcon[5].style.opacity = "1";
        errorIcon[5].style.opacity = "0";
        errorText[5].textContent = "";
    }
    else if (genders[1].checked == true){
        successIcon[5].style.opacity = "1";
        errorIcon[5].style.opacity = "0";
        errorText[5].textContent = "";
    }
    else {
        successIcon[5].style.opacity = "0";
        errorIcon[5].style.opacity = "1";
        errorText[5].textContent = "Please select gender";
    }
    
})



// eye display password

const seePassword = document.getElementsByClassName("bi-eye");
const closePassword = document.getElementsByClassName("bi-eye-slash");



seePassword[0].addEventListener('click',()=>{
    const type = seePassword[0].getAttribute("type")
    type = 'text';
    
})


