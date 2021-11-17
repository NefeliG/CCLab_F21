let x, y;
let checkbox1, checkbox2;


function setup() {
  createCanvas(1000, 1000);
  x = width/2;
  y = height/2;
  checkbox1 = document.getElementById('checkbox-1');
  checkbox2 = document.getElementById('checkbox-2');
}

function draw() {
  background(26, 82, 118);

  push();
 fill(255);
 textAlign(CENTER);
 textSize(45);
 text("Penguin Family", width/2,50);
pop();

  translate(x, height/2);
  x = x - 1;
  if (x < 0) {
    x = width;
  }
  drawPengy(); // father
  push();
  translate(10,-120);
  scale(0.5);
  if (checkbox1.checked) {
    drawPengy();
    push();
   fill(255);
   textAlign(CENTER);
   textSize(45);
   text("One child policy", 0,-100);
  pop(); //baby
  }
  pop();


  push();
  translate(80,90);
  scale(0.5);
  if (checkbox2.checked) {
    drawPengy();
    push();
   fill(255);
   textAlign(LEFT);
   textSize(45);
   text("After one child policy", 90,20);
  pop(); // baby
  }
  pop();
  //drawPenguin(x, y-50, 0, 0.5);
  //drawPenguin(x, y+50, 0, 0.5);
  let t = frameCount / 60; // update time
  push();
  translate(180,0);
  scale(0.8);
  drawPengy();



 //mom
  pop();

}


function drawPengy() {
  drawBody(0, 0, 0, 1.0);
  drawArm(-78, 5, PI * 2.7, 0.6);
  drawArm(78, 5, PI * 2.25, 0.6);
  drawLeg(55,90,0,1.3);
  drawLeg(-55,90,0,1.3);

}

function drawBody(x, y, a, s) {
  push();
  translate(x, y);
  fill(0);
  rotate(a);
  scale(s);
  ellipse(0, 0, 150, 200);
  push();
  fill(255);
  scale(0.85);
  ellipse(0, 20, 150, 200);
  pop();
  ellipse(-20, -30, 5, 5);
  ellipse(20, -30, 5, 5);
  fill(255,255,0)
  triangle(-20,0,20,0,0,-20)
  pop();
  console.log(mouseX + ' ' + mouseY);
}

function drawArm(x, y, a, s) {
  push();
  fill(0);
  translate(x, y);
  rotate(a);
  scale(s);
  ellipse(40, 0, 100, 20);
  ellipse(0, 0, 5, 5);
  pop();
}

function drawLeg(x, y, a, s) {
  push();
  fill(255,255,0)
  translate(x,y);
  rotate(a);
  scale(s);
  ellipse(0,0,30,15);
  pop();




}
