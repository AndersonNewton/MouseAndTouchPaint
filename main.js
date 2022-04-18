Canvas=document.getElementById("canvas_1");
Context=Canvas.getContext("2d");

color="red";
width_line=3;

var last_pos_x;
var last_pos_y

var last_pos_touch_x;
var last_pos_touch_y;
var new_width = screen.width-70;
var new_height = screen.height-315;
var width = screen.width;

if(width < 992){

document.getElementById("canvas_1").width=new_width;
document.getElementById("canvas_1").height=new_height;
document.body.style.overflow="hidden";

}

Canvas.addEventListener("touchstart", my_touch_start);

function my_touch_start(e){

    
    last_pos_touch_x = e.touches[0].clientX - Canvas.offsetLeft;
    last_pos_touch_y = e.touches[0].clientY - Canvas.offsetTop;

    color = document.getElementById("color").value;
    
    width_line = document.getElementById("width_of_line").value;
    
}


Canvas.addEventListener("touchmove",my_touch_move);

function my_touch_move(e){

    current_pos_touch_x = e.touches[0].clientX - Canvas.offsetLeft;
    current_pos_touch_y = e.touches[0].clientY - Canvas.offsetTop;
    
    
        
        Context.beginPath();
        Context.strokeStyle="blue";
        Context.lineWidth=5;
        Context.moveTo(last_pos_touch_x, last_pos_touch_y);
        Context.lineTo(current_pos_touch_x, current_pos_touch_y);
        Context.stroke();


        last_pos_touch_x = current_pos_touch_x;
        last_pos_touch_y = current_pos_touch_y;


        
    

}






Canvas.addEventListener("mousedown",my_mouse_down);

function my_mouse_down(e){

    mouse_event="mouseDown";

    last_pos_x = e.clientX - Canvas.offsetLeft;
    last_pos_y = e.clientY - Canvas.offsetTop;

    color = document.getElementById("color").value;
    
    width_line = document.getElementById("width_of_line").value;
    
}

Canvas.addEventListener("mouseup",my_mouse_up);

function my_mouse_up(e){
    
mouse_event="mouseUp";

}

Canvas.addEventListener("mouseleave",my_mouse_leave);

function my_mouse_leave(e){
    
mouse_event="mouseLeave";

}


Canvas.addEventListener("mousemove",my_mouse_move);

function my_mouse_move(e){

    current_pos_x = e.clientX - Canvas.offsetLeft;
    current_pos_y = e.clientY - Canvas.offsetTop;
    
    if(mouse_event == "mouseDown"){
        
        Context.beginPath();
        Context.strokeStyle="blue";
        Context.lineWidth=5;
        Context.moveTo(last_pos_touch_x, last_pos_touch_y);
        Context.lineTo(current_pos_touch_x, current_pos_touch_y);
        Context.stroke();

        last_pos_x = current_pos_x;
        last_pos_y = current_pos_y;


        
    }

}



function clearArea(){

    Context.clearRect(0,0,Canvas.width,Canvas.height);

}