// Open the side tree view and see index.html.

let checkboxRect, checkboxCircle;

function setup() {
  createCanvas(400, 500);
  checkboxRect = document.getElementById('checkbox-rect');
  checkboxCircle = document.getElementById('checkbox-circle');
}

function draw() {
  background(255, 255, 0);
  if (checkboxRect.checked) {
    rectMode(CENTER);
    rect(100, 250, 150, 150);
  }
  if (checkboxCircle.checked) {
    ellipse(300, 250, 150, 150);


    circle(20,30,30);

  }
}

function keyPressed() {


  if(key == 'b')  {

    fill(255,0,0);
  }

  else {fill(255);}
}
