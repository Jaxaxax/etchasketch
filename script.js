let color = 'black';
let click = false;

document.addEventListener("DOMContentLoaded", function(){});

document.getElementById("sizerbutton").addEventListener("click", getSize, false);

document.querySelector(".drawingboard").addEventListener("click", () => {
	click = !click;
});	

sizeBoard(16);

document.getElementById("eraser").addEventListener("click", clearColor, false);

document.getElementById("drawbutton").addEventListener("click", setColor, false);

document.getElementById("eraseAll").addEventListener("click", clearBoard, false);
  

function getSize(){
	let input = prompt("Please enter desired size (1-100):");
	if (input == null){
	}
	else if(isNaN(input) || (!input.trim().length)){
		window.alert("Please try again with 1-100.");
	}
	else if(input < 0 || input > 100){
		window.alert("Please try again with 1-100.");
	}
	else{
		sizeBoard(input);
	}
}

function sizeBoard(size){
	let board = document.querySelector(".drawingboard");
	let numDivs = size * size;

	board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  	board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
	
	for(let i = 0; i < numDivs; i++){
		let drawDiv = document.createElement("div");
		drawDiv.setAttribute("class", "pixel");
		drawDiv.style.backgroundColor = "white";
		board.insertAdjacentElement("beforeend", drawDiv);
		drawDiv.addEventListener("mouseover", drawColor);
	}
}

function clearBoard(){
	let pixels = document.querySelectorAll(".pixel");
	
	pixels.forEach((div) => {div.style.backgroundColor = "white";})
}


function drawColor(){

	if (click){
		this.style.backgroundColor = color;
	}

}

function setColor(){
	color = "black";
}

function clearColor(){
	color = "white";
}
