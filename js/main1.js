var active = 1;
function init(){
	console.log("hello world");
	document.onkeydown = function(e){
		if(active && (e.keyCode ==  37 || e.keyCode ==  38 || e.keyCode ==  39 || e.keyCode ==  40) )
		{
			console.log("hello world");
			active = 0;
		}
		
	}
	document.onkeyup = function(e){
		if(e.keyCode ==  37 || e.keyCode ==  38 || e.keyCode ==  39 || e.keyCode ==  40)
			active = 1;
	}

}
init();