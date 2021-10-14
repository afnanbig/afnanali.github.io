canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent="empty";
var lastx=0;
var lasty=0;
color="black";
widthofline=1;
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e)
{
    mouseEvent="mousedown";
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e)
{
    mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e)
{
    mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e)
{
    mouseEvent="mousemove";
    currentx=e.clientX-canvas.offsetLeft;
    currenty=e.clientY-canvas.offsetTop; 
    if(mouseEvent=="mousedown")
    {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=widthofline;
        ctx.moveTo(lastx,lasty);
        ctx.lineTo(currentx,currenty);
        ctx.stroke();
    }
}
