var button=$("button:eq(0)"),p=$("p");button.click(function(a){$("div").addClass("divHide");time=totalTime;goldCaught=0;unactivation();activation();main();timeInterval=setInterval(tick,1E3)});function tick(){time--;0>time&&(clearInterval(timeInterval),cancelAnimationFrame(mainFrame),$("div").removeClass(),goldCaught>max&&(max=goldCaught),$("b:eq(0)").html(goldCaught),$("b:eq(1)").html(max),$("button:eq(0)").html("\u518d\u73a9\u4e00\u6b21"))}var canvas=document.createElement("canvas");
canvas.width=$(window).get(0).innerWidth;canvas.height=$(window).get(0).innerHeight-10;var ctx=canvas.getContext("2d");$("body").append(canvas);var catReady=!1,catImage=new Image;catImage.onload=function(){catReady=!0};catImage.src="images/cat.png";var goldReady=!1,goldImage=new Image;goldImage.onload=function(){goldReady=!0};goldImage.src="images/gold.png";var cat={speed:600,x:canvas.width/2},goldCaught=0,keysDown={};
addEventListener("touchstart",function(a){1==a.touches.length&&(a.touches[0].clientX>cat.x?keysDown.right=!0:keysDown.left=!0);startX=a.touches[0].clientX},!1);addEventListener("touchend",function(a){delete keysDown.left;delete keysDown.right;delete keysDown.move},!1);addEventListener("touchmove",function(a){a.preventDefault();endX=a.touches[0].clientX;moveX=endX-startX;cat.x+=moveX/15},!1);addEventListener("keydown",function(a){keysDown[a.keyCode]=!0},!1);
addEventListener("keyup",function(a){delete keysDown[a.keyCode]},!1);function rnd(a,b){return a+parseInt(Math.random()*(b-a))}
var update=function(a){if(37 in keysDown)cat.x-=cat.speed*a;if(39 in keysDown)cat.x+=cat.speed*a;for(a=0;a<poll.length;a++)poll[a].inUse&&(poll[a].move(),poll[a].isOut());for(a=0;a<size;a++)poll[a].inUse&&cat.x<=poll[a].x+32&&poll[a].x<=cat.x+50&&100>=canvas.height-poll[a].y&&poll[a].y<=canvas.height&&(goldCaught++,poll[a].clear())},render=function(){ctx.fillStyle="#ff9588";ctx.fillRect(0,0,canvas.width,canvas.height);if(goldReady)for(var a=0;a<poll.length;a++)poll[a].inUse&&
ctx.drawImage(goldImage,poll[a].x,poll[a].y);0>cat.x?cat.x=0:cat.x>canvas.width-75&&(cat.x=canvas.width-75);catReady&&ctx.drawImage(catImage,cat.x,canvas.height-100);ctx.fillStyle="black";ctx.font="24px Helvetica";ctx.textAlign="left";ctx.textBaseline="top";ctx.fillText("\u5f97\u5206",32,32);ctx.fillText("\u65f6\u95f4",canvas.width-132,32);ctx.fillStyle="white";ctx.font="40px Helvetica";ctx.fillText(goldCaught,85,25);ctx.fillText(time,canvas.width-75,25)},main=function(){var a=Date.now();update((a-
then)/1E3);render();then=a;mainFrame=requestAnimationFrame(main)};function Gold(){this.inUse=!1;this.x=rnd(0,canvas.width-50);this.y=-20;this.move=function(){this.y+=6};this.isOut=function(){return this.y>=canvas.height?(this.clear(),!0):!1};this.clear=function(){this.x=rnd(0,canvas.width-50);this.y=-20;this.inUse=!1}}function createGold(){for(var a=0;a<size;a++){var b=new Gold;poll.push(b)}}
function activation(){for(var a=0;a<size;a++)if(!poll[a].inUse){poll[a].inUse=!0;break}setTimeout(activation,rnd(500,1E3))}function unactivation(){for(var a=0;a<size;a++)poll[a].clear()}var w=window;requestAnimationFrame=w.requestAnimationFrame||w.webkitRequestAnimationFrame||w.msRequestAnimationFrame||w.mozRequestAnimationFrame;var then=Date.now(),poll=[],size=10,totalTime=30,time=totalTime,timeInterval,mainFrame,max=0,startX=0,endX=0,moveX=0;createGold();
