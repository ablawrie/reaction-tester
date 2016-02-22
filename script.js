function makeBox(id){
	var x = Math.random();
	x = x * 5000;
	setTimeout(function(){ document.getElementById("box").style.display = "block";}, x);
}

document.getElementById("box").onclick=function(){
	this.style.display="none";
	makeBox();
}

makeBox();
