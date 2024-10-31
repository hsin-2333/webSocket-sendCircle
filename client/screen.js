let x = 10;
let y = 10;
let r = 5;
let c = "#000000";

function setup() {
  createCanvas(400, 400);

  // 待處理:建立 WebSocket 連接並監聽事件
}

function draw() {
  stroke(c);
  ellipse(x, y, r);
}
