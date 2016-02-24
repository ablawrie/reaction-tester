//Color Value
function getRandomColor(){
	var rgb = [0, 0, 0];
	for(var  i = 0; i < 3; i++){
		rgb[i] = Math.floor((Math.random() * 255) + 1);
	}
	var color = "rgb("+rgb[0]+","+rgb[1]+","+rgb[2]+")";
	return color;
}
//Shape
function getCircle(){
	if (Math.random() > 0.5){
		return "100px";
	} else {
		return "0";
	}
}
var createdTime,
	clickedTime,
	reactionTime;
function makeShape(){
	var s = document.getElementById("shape");
	//Timestamp
	var x = Math.random();
	x = x * 5000;
	//Change Position
	var py = Math.random();
	py = py * 720;
	var px = Math.random();
	px = px * 1280;
	//Shape Creation
	setTimeout(function(){ 
		s.style.display = "block";
		createdTime = Date.now();
		s.style.borderRadius = getCircle();
		s.style.backgroundColor = getRandomColor();
		s.style.top = py+"px";
		s.style.left = px+"px";
	}, x);
}
document.getElementById("shape").onclick=function(){
	clickedTime = Date.now();
	reactionTime = (clickedTime - createdTime) / 1000;
	document.getElementById("time").innerHTML = reactionTime;
	this.style.display="none";
	makeShape();
}
makeShape();
