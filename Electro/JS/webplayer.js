const body = document.querySelector('body'),
barralateral = body.querySelector('nav'),
toggle = body.querySelector(".toggle"),
searchBtn = body.querySelector(".search-box"),
modeSwitch = body.querySelector(".toggle-switch"),
modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
barralateral.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
barralateral.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
body.classList.toggle("dark");

if(body.classList.contains("dark")){
modeText.innerText = "Blanquear";
}else{
modeText.innerText = "Ennegrecer";

}
});