var canvas = new fabric.Canvas('minceraft');   //calling the canvas and that too a fabric.js lib

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object= "";
var block_image_object= "";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img) {
    player_object = Img;

    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add(player_object);

    });
}
function block_update(get_image)
{
    fabric.Image.fromURL(get_image, function(Img) {
  block_img_object = Img;

  block_image_object.scaleToWidth(block_image_width);
  block_image_object.scaleToHeight(block_image_height);
  block_image_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add(block_image_object);

    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(e.shiftKey == true && keyPressed == "81")
{
    console.log("q and shift pressed together");
    block_image_width = block_image_width + 10;
    block_image_height = block_image_height + 10;
    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_height").innerHTML = block_image_height;   
}
if(e.shiftKey == true && keyPressed == "74")
{
    console.log("j and shift pressed together");
    block_image_width = block_image_width - 10;
    block_image_height = block_image_height - 10;
    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_height").innerHTML = block_image_height;   
}

    if(keyPressed == "38")
    {
        up();
        console.log("up");
    }
    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }
    if(keyPressed == "37")
    {
        left();
        console.log("left");
    }
    if(keyPressed == '39')
    {
        right();
        console.log("right");
    }

    
    if(keyPressed == '78')
    {
        block_update('1.13_netherack.jpg'); 
        console.log("n");
    }
    if(keyPressed == '66')
    {
        block_update("brick.jpg"); 
        console.log("b");
    }
    if(keyPressed == '71')
    {
        block_update('glowstone.png'); 
        console.log("g");
    }
    if(keyPressed == "68")
    {
        block_update('grass'); 
        console.log("d");
    }
    if(keyPressed == '79')
    {
        block_update('log.jpg'); 
        console.log("o");
    }
    if(keyPressed == '84')
    {
        block_update('green_terracotta.png'); 
        console.log("t");
    }
    if(keyPressed == '76')
    {
        block_update('lime_terracotta.png'); 
        console.log("l");
    }
    if(keyPressed == '67')
    {
        block_update('modded_brick.png'); 
        console.log("c");
    }
    if(keyPressed == '83')
    {
        block_update('stone.jpg'); 
        console.log("s");
    }
}

function up()
    {
      if(player_y >=0)
      {
          player_y=player_y-block_image_height;
          console.log("block image height = " + block_image_height);
           console.log("When Up arrow key is pressed, X = " + player_x + " , Y = "+player_y);
         canvas.remove(player_object);
         player_update();
      }

    }

    function down()
    {
      if(player_y <=500)
      {
          player_y=player_y+block_image_height;
          console.log("block image height = " + block_image_height);
           console.log("When Up arrow key is pressed, X = " + player_x + " , Y = "+player_y);
         canvas.remove(player_object);
         player_update();
      }

    }



    function left()
    {
      if(player_x >=0)
      {
          player_x=player_x-block_image_width;
          console.log("block image width = " + block_image_width);
           console.log("When Up arrow key is pressed, X = " + player_x + " , Y = "+player_y);
         canvas.remove(player_object);
         player_update();
      }

    }

    function right()
    {
      if(player_x <=850)
      {
          player_x=player_x+block_image_width;
          console.log("block image width = " + block_image_width);
           console.log("When Up arrow key is pressed, X = " + player_x + " , Y = "+player_y);
         canvas.remove(player_object);
         player_update();
      }

    }
