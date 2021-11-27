let img;
let cam;

function preload() {
  img=loadImage("cute.jpeg");
}

function setup() {
  createCanvas( 700, 700 );
  background(0);
}

function draw() {

  img.loadPixels();

  for (let y = 0; y < img.height; y+=4) {
    for (let x = 0; x < img.width; x+=4) {
      let index = (x + y * img.width) * 4;


      let r = 22;

      let g = 22;
      let b = 200;

      let avg = (r + g + b) / 3;

      img.pixels[index + 0] = avg; // R
      img.pixels[index + 1] = avg; // G
      img.pixels[index + 2] = avg; // B
      img.pixels[index + 3] = 255; // A

    }
  }
  img.updatePixels();
  image(img, 0, 0, 700, 700);
}
