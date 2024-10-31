let x = 10;
let y = 10;
let r = 5;
let c = "#000000";

function setup() {
  createCanvas(400, 400);

  io().on("screen", function (message) {
    console.log(message);
    // 請寫作程式，將收到的message的x,y,r和c屬性分別指派給x, y, r, 和c變數

    x = message.x;
    y = message.y;
    r = message.r;
    c = message.c;
  });
}

function draw() {
  stroke(c);
  ellipse(x, y, r);
}
