var speed=60;
var earthRotSun;
var sunRotAxis;
var earthRotAxis;
var moonRotSun;
var orbitDis=150;
var moonOrbital=100;
var moonRotAxis;
function setup() {
    createCanvas(900, 600);
  
    rectMode(CENTER);
}

function draw() {
    background(255);
    //drawing the sun and moving the skitch to center of the page 
    translate(width/2,height/2)
    SunDesign(100,sunRotAxis,second(),speed,50);
    //drawing earth in separate entity
   push();
    noFill()
    ellipse(0,0,300);  //earth orbital 
    //segement that control the rotation speeds of whole program
    earthRotSun=map(frameCount/100,0,speed,0,360); 
    rotate(radians(earthRotSun));            //rotate earth around sun 
    planet(orbitDis,25,earthRotSun,12);
   
    MoonDesign(moonOrbital,earthRotSun,15);
    //any non fractional number will gurantee dark side always away
    // either covered by the another moon or directed away from earth 
    MoonDesign(1.4*moonOrbital,2*earthRotSun,20);
    //second planet
    planet(1.03*orbitDis,45,0.9*earthRotSun,22.5);
    MoonDesign(moonOrbital,earthRotSun,25);
    pop(); // elimenates the effect of planet push of second one 
    pop(); // this pop the first planet push effetct
}
//combination is (planet+ any number of moons then next planet pop third planet.....)
function planet(orbitdis,size,earthsun,linn)
{
    push(); // can`t pop inside function as moon location depend on this translat
    translate(0,-orbitdis); 
    fill(0,0,255);           //drawing earth
    ellipse(0,0,size);
    fill(0);
    push();
    strokeWeight(3);
    stroke(0);
        rotate(radians(earthsun));   //rotate earth around itself
        line(0,0,0,linn);
    pop();


}
function MoonDesign(monorb,earthrotsun,siz)
{
push();
    noFill();
    rotate(radians(-2*earthrotsun)); //rotation in opposite direction 
    translate(0,-0.5*monorb);
    fill(255);
    ellipse(0,0,siz);
    push();
       rotate(radians(-earthrotsun));   //rotate moon around itself (ensure dark side )
       line(0,0,0,7);
    pop();
pop();

}
function SunDesign(size,sunrot,second,sped,lin)
{
    fill(255,178,0);
    ellipse(0,0,size);
    sunrot=map(second,0,3*sped,0,360);
    rotate(radians(sunrot));
    line(0,0,0,-lin);
}