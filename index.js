canvas = document.getElementById('mycanvas');
ctx=canvas.getContext("2d");

nasa_mars_images_array = ["nasa_image_1.jpg","nasa_image_2.jpeg", "nasa_image_3.jpg","nasa_image_4.jpg"];
random_number=math.floor(math.random() * 4);
console.log(random_number);
rover_width="100";
rover_height="90";
background_Image = nasa_mars_images_array[random_number];
console.log("background_Image" = " +background_image");
rover_image = "rover.png";
rover_x = 10;
rover_y = 10;
fucntio add() {
    background_imageTag = new Image();
    background_imageTag.onLoad = uploadBackground;
    background_imageTag.src = background_Image;

    background_imageTag = new Image();
    background_imageTag.onLoad = uploadRover;
    background_imageTag.src = rover_image;
}
function uploadBackground() {
    ctx.drawImage(background_imageTag,0,0,canvas.width,canvas.height);
}
function uploadRover() {
    ctx.drawImage(rover_imageTag,rover_x,rover_y,rover_width,rover_height);
}
function my_keydown(e) {
keyPressed = e.Code;
console.log (keyPressed);
if (keyPressed == '38')
{
    up();
    console.log ("up");
}
if (keyPressed == '40')
{
    down();
    console.log ("down");
}
if (keyPressed == '37')
{
    left();
    console.log ("left");
}
if (keyPressed == '39')
{
    right();
    console.log ("right");
}
}
function up() {
 if (rover_y>=0) {
rover_y = rover_y - 10;
console.log("when up arraw is pressed, x= "+ rover_x +" y = "+ rover_y);
uploadBackground()
uploadRover()
 }
 function down()
 {
if (rover_y <=500)
{
rover_y = rover_y+10;
console.log("when up arraw is pressed, x= "+ rover_x +" y = "+ rover_y);
uploadBackground()
uploadRover()
}
function left()
{
if (rover_y <=500)
{
rover_y = rover_y-10;
console.log("when up arraw is pressed, x= "+ rover_x +" y = "+ rover_y);
uploadBackground()
uploadRover()
}
function right()
{
if (rover_y <=500)
{
rover_y = rover_y+10;
console.log("when up arraw is pressed, x= "+ rover_x +" y = "+ rover_y);
uploadBackground()
uploadRover()
}
 }
