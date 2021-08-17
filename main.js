var canvas=new fabric.canvas('myCanvas');
block_image_width=30;
block_image_height=30;
player_x=10;
player_y=10;
var player_object="";
function player_update(){
    fabric.image.fromURL("Player.png", function (Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToheight(140);
        player_object.scaleToWidth({
            top:player_y,
            left:player_x,
        });
        canvas.add(player_object);

    });
}

function new_image(get_image){
    fabric.image.fromURL(get_image, function(Img){
        block_object=Img;
        block_object.scaleToWidth(block_image_width);
        block_object.scaleToheight(block_image_height);
        block_object.set({
            top:player_y,
            left:player_x,
            
        });
        canvas.add(block_object);

    });
}