let slider;
let angle;

function setup() {
   createCanvas(500, 500);
   slider = createSlider(0, PI, PI / 4, 0.01);
}
 
function draw() {
   background(50);
   stroke(255);
   angle = slider.value();
   translate(width / 2, height);
   branch(120);
}

function branch(len) {
   line(0, 0, 0, -len);
   translate(0, -len);
   
   if (len > 4) {
      if (len > 20) {
         stroke(255);
      }

      else {
         stroke(162, 242, 116);
      }

      push();
      rotate(angle);
      line(0, 0, 0, -len * 0.67);
      branch(len * 0.67);
      pop();

      push();
      rotate(-angle);
      line(0, 0, 0, -len * 0.67);
      branch(len * 0.67);
      pop();
   }
}