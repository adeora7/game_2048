var active = 1;
var grid = [];
function init(){
	console.log("%cyou are awesome", 'color: #EC644B; font-weight: bold; font-size: 20px;');
	document.onkeydown = function(e){
		if(active && (e.keyCode ==  37 || e.keyCode ==  38 || e.keyCode ==  39 || e.keyCode ==  40) )
		{	
				active = 0;
				if(e.keyCode == 37)
					moveLeft();
				else if(e.keyCode == 38)
					moveUp();
				else if(e.keyCode == 39)
					moveRight();
				else
					moveDown();
		}
		
	}
	document.onkeyup = function(e){
		if(e.keyCode ==  37 || e.keyCode ==  38 || e.keyCode ==  39 || e.keyCode ==  40)
			active = 1;
	}

	let rows = document.getElementsByClassName("gameRow");
	for (let i = 0; i < rows.length; i++) {
		let columns = rows[i].getElementsByClassName("gameColumn");
		let arrColumns = [];
		for (let j = 0; j < columns.length; j++) {
			arrColumns.push(columns[j]);
		}
		grid.push(arrColumns);
	}

	var one = Math.floor(Math.random() * 16);
	var two = Math.floor(Math.random() * 16);
	while(one == two)
	{
		two = Math.floor(Math.random() * 16);		
	}
	grid[Math.floor(one/4)][one%4].innerHTML = '2';
	grid[Math.floor(two/4)][two%4].innerHTML = '2';

}

function readNumber(row, column)
{
	if(grid[row][column].innerHTML.trim() == "")
		return 0;
	else
		return parseInt(grid[row][column].innerHTML);
}

function moveLeft(){
	for(let i = 0; i< grid.length; i++)
	{
		let slow = 0;
		for(let fast = 0; fast< grid[i].length; fast++)
		{
			if(readNumber(i, fast)>0)
			{
				grid[i][slow].innerHTML = grid[i][fast].innerHTML;
				if(fast!=slow)
					grid[i][fast].innerHTML = "";
				slow++;
			}
		}
	}//some error here... fill empty space


	for (var i = 0; i < grid.length; i++) {
		for(var j = 0;j< grid[i].length-1; j++)
		{
			if(readNumber(i,j) == readNumber(i,j+1) && readNumber(i,j) != 0)
			{
				grid[i][j].innerHTML = readNumber(i,j)*2;
				for(var k=j+1; k< grid[i].length-1; k++)
				{
					grid[i][k].innerHTML = grid[i][k+1].innerHTML;
				}
				grid[i][grid[i].length-1].innerHTML = "";
			}
		}
	}
	addNumber();
}

function moveRight(){
	console.log("Right");

	addNumber();
}

function moveUp(){
	console.log("Up");

	addNumber();
}

function moveDown(){
	console.log("Down");

	addNumber();
}

function addNumber()
{
	var empty = [];
	for (var i = 0; i < grid.length; i++) {
		for (var j = 0; j < grid[i].length; j++) {
			if(grid[i][j].innerHTML.trim() == "")
				empty.push(grid[i][j]);
		}
	}
	if(empty.length == 0)
	{
		console.log("%cGame Over", 'color: #EC644B; font-weight: bold; font-size: 20px;');
	}
	else
	{
		var next = Math.floor(Math.random() * empty.length);
		empty[next].innerHTML = '2';
	}
}
init();