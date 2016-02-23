var createdTime,
	clickedTime,
	reactionTime;

function makeBox(){
	//Timestamp
	createdTime = Date.now();
	var x = Math.random();
	x = x * 5000;
	//Color Value
	var rgb = [0, 0, 0];
	for(var  i = 0; i < 3; i++){
		rgb[i] = Math.floor((Math.random() * 255) + 1);
	}
	var color = "rgb("+rgb[0]+","+rgb[1]+","+rgb[2]+")";
	//Shape Creation
	document.getElementById("box").style.backgroundColor = color;
	setTimeout(function(){ document.getElementById("box").style.display = "block";}, x);
}

document.getElementById("box").onclick=function(){
	clickedTime = Date.now();
	reactionTime = (clickedTime - createdTime) / 1000;
	document.getElementById("time").innerHTML = reactionTime;
	this.style.display="none";
	makeBox();
}

makeBox();
