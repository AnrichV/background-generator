var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.createElement("button")

random.innerHTML = "Random"

function initColors(){
	var c1 = document.getElementById("c1");
	var c2 = document.getElementById("c2");
	color1.value = c1.value;
	color2.value = c2.value;
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function ranomize(){
	const randomColor = Math.floor(Math.random()*16777215).toString(16);
	const randomColor2 = Math.floor(Math.random()*16777215).toString(16);
	color1.value = "#" + randomColor;
	color2.value = "#" + randomColor2;
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

document.querySelector("body").appendChild(random);
random.addEventListener("click", ranomize);


initColors();
setGradient();
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);