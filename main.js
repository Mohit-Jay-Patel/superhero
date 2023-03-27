var canvas= new fabric.Canvas("myCanvas");

var block_width=30;
var block_height=30;

var player_x=10;
var player_y=10;

var player_object="";
var block_object="";

function player_update(){
    fabric.Image.fromURL("Chris_Hemsworth_as_Thor.jpg", function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}
function New_object(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_object=Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object);
    });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    if(e.shiftKey==true && keypressed=='80'){
        console.log("p shift pressed");
        block_width=block_width+10;
        block_height=block_height+10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }
    if(e.shiftKey==true && keypressed=='77'){
        console.log("m shift pressed");
        block_width=block_width-10;
        block_height=block_height-10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
    }
    keypressed=e.keyCode;
    console.log(keypressed);
if(keypressed=='70'){
    New_object('ironman_face.png');
    console.log("f");
}
if(keypressed=='66'){
    New_object('spiderman_body.png');
    console.log("b");
}
if(keypressed=='76'){
    New_object('hulk_legs.png');
    console.log("l");
}
if(keypressed=='82'){
    New_object('thor_right_hand.png');
    console.log("r");
}
if(keypressed=='72'){
    New_object('captain_america_left_hand.png');
    console.log("h");
}
if(keypressed=='38'){
    up();
    console.log("up");
}
if(keypressed=='37'){
    left();
    console.log("left");
}
if(keypressed=='39'){
    right();
    console.log("right");
}
if(keypressed=='40'){
    down();
    console.log("down");
}
}
function up(){
    if(player_y >=15){
        player_y=player_y - block_height;
        console.log("block_height="+ block_height);
        console.log("When up arrow key is pressed, X= "+ player_x + ",Y="+ player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if(player_y <=700){
        player_y=player_y + block_height;
        console.log("block_height="+ block_height);
        console.log("When down arrow key is pressed, X= "+ player_x + ",Y="+ player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if(player_x >=0){
        player_x=player_x - block_width;
        console.log("block_width="+ block_width);
        console.log("When left arrow key is pressed, X= "+ player_x + ",Y="+ player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if(player_x <=1040){
        player_x=player_x + block_width;
        console.log("block_width="+ block_width);
        console.log("When right arrow key is pressed, X= "+ player_x + ",Y="+ player_y);
        canvas.remove(player_object);
        player_update();
    }
}
