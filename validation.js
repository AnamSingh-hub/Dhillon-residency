document.addEventListener("DOMContentLoaded", function () {

document.getElementById("contactForm").addEventListener("submit", function(e){

let error = false;

let name = document.getElementById("name").value.trim();
let phone = document.getElementById("phone").value.trim();
let email = document.getElementById("email").value.trim();

document.querySelectorAll(".error").forEach(el => el.style.display = "none");
if(name === ""){
    document.getElementById("nameError").style.display = "block";
    document.getElementById("name").focus();
    error = true;
}

if(!/^\d{10}$/.test(phone)){
    document.getElementById("phoneError").style.display = "block";
    error = true;
}

if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    document.getElementById("emailError").style.display = "block";
    error = true;
}

if(error) e.preventDefault();

});
});