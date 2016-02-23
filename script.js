var createdTime,
	clickedTime,
	reactionTime;

function makeBox(){
	var s = document.getElementById("box");
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
	//Get Screen Size
	var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;
	//Change Position
	s.style.left = Math.floor((Math.random() * x) + 1)+"px";
	s.style.top = Math.floor((Math.random() * y) + 1)+"px";
	//Shape Creation
	s.style.backgroundColor = color;
	setTimeout(function(){ s.style.display = "block";}, x);
}

document.getElementById("box").onclick=function(){
	clickedTime = Date.now();
	reactionTime = (clickedTime - createdTime) / 1000;
	document.getElementById("time").innerHTML = reactionTime;
	this.style.display="none";
	makeBox();
}

makeBox();
