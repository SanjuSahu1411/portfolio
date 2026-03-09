// Dark/Light Mode
function toggleMode(){
  document.body.classList.toggle("light");
}

// Typing Effect
// Typing Effect (Type Once and Stop)

const text = "Computer Application Student | Web Developer";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing").textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}

typeEffect();

// Scroll Animation
const observer = new IntersectionObserver(entries =>{
  entries.forEach(entry =>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".hidden").forEach(el=>{
  observer.observe(el);
});

/* Qualification Section */
function toggleDetails(id){
  const element = document.getElementById(id);

  if(element.style.display === "block"){
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
}

// Fake Form Submit
function submitForm(){
  alert("Message Sent Successfully!");
  return false;
}

// Initialize EmailJS
emailjs.init("wp8GO3ns9MQRh79qm");

document.getElementById("contact-form")
.addEventListener("submit", function(e){

e.preventDefault();

emailjs.sendForm(
"service_g0207hg",
"template_antye7j",
this
).then(function(){

alert("Message Sent Successfully!");

}, function(error){

alert("Failed to send message");

});

});
