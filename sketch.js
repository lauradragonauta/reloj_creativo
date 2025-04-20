let numCols = 5;
let numRows = 7;
let circleSize = 20;

let digitPatterns = [];
let randomColors;

function setup() {
  
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('sketch-holder');

  frameRate(1);

  // Inicializar digitPatterns
  for (let d = 0; d < 10; d++) {
    digitPatterns[d] = [];
    for (let i = 0; i < numRows; i++) {
      digitPatterns[d][i] = [];
    }
  }

  // Colores
  randomColors = [
    color(255, 214, 0),   // amarillo
    color(0, 149, 92),    // verde
    color(255, 99, 164),  // rosa
    color(44, 138, 220),  // azul
    color(255, 28, 31)    // rojo
  ];

  fPatterns(); // define los patrones
}

function draw() {
  background(0);

  let h_dec = floor(hour() / 10);
  let h_uni = hour() % 10;

  let m_dec = floor(minute() / 10);
  let m_uni = minute() % 10;

  let s_dec = floor(second() / 10);
  let s_uni = second() % 10;

  let secondZero = (second() === 0);
  let staticTime = secondZero;

  drawNumber(h_dec, 0, staticTime, 0);
  drawNumber(h_uni, 1, staticTime, 1);
  drawNumber(m_dec, 2, staticTime, 2);
  drawNumber(m_uni, 3, staticTime, 3);
  drawNumber(s_dec, 4, secondZero, 4);
  drawNumber(s_uni, 5, secondZero, 5);
}

function drawNumber(number, position, isStatic, offset) {
  let xStart = (position + offset * 1.5) * (circleSize * 2.5) + 40;
  let yStart = height / 2 - (numRows * circleSize) / 2;

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      if (digitPatterns[number][i][j] === 1) {
        let x = xStart + j * circleSize;
        let y = yStart + i * circleSize;

        noStroke();
        if (isStatic) {
          fill(255);
        } else {
          fill(randomColors[int(random(randomColors.length))]);
        }
        ellipse(x, y, circleSize, circleSize);
      }
    }
  }
}

function fPatterns() {
  digitPatterns[0] = [
    [0,1,1,1,0],
    [0,1,0,1,0],
    [0,1,0,1,0],
    [0,1,0,1,0],
    [0,1,0,1,0],
    [0,1,0,1,0],
    [0,1,1,1,0],
  ];
  digitPatterns[1] = [
    [0,0,1,0,0],
    [0,1,1,0,0],
    [1,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,1,1,1,0],
  ];
  digitPatterns[2] = [
    [0,1,1,1,0],
    [0,0,0,1,0],
    [0,0,0,1,0],
    [0,1,1,1,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,1,1,0],
  ];
  digitPatterns[3] = [
    [0,1,1,1,0],
    [0,0,0,1,0],
    [0,0,0,1,0],
    [0,0,1,1,0],
    [0,0,0,1,0],
    [0,0,0,1,0],
    [0,1,1,1,0],
  ];
  digitPatterns[4] = [
    [0,1,0,1,0],
    [0,1,0,1,0],
    [0,1,0,1,0],
    [0,1,1,1,0],
    [0,0,0,1,0],
    [0,0,0,1,0],
    [0,0,0,1,0],
  ];
  digitPatterns[5] = [
    [0,1,1,1,0],
    [0,1,0,0,0],
    [0,1,1,1,0],
    [0,0,0,1,0],
    [0,0,0,1,0],
    [0,0,0,1,0],
    [0,1,1,1,0],
  ];
  digitPatterns[6] = [
    [0,1,1,1,0],
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,1,1,1,0],
    [0,1,0,1,0],
    [0,1,0,1,0],
    [0,1,1,1,0],
  ];
  digitPatterns[7] = [
    [0,1,1,1,0],
    [0,0,0,1,0],
    [0,0,0,1,0],
    [0,0,1,1,1],
    [0,0,0,1,0],
    [0,0,0,1,0],
    [0,0,0,1,0],
  ];
  digitPatterns[8] = [
    [0,1,1,1,0],
    [0,1,0,1,0],
    [0,1,0,1,0],
    [0,1,1,1,0],
    [0,1,0,1,0],
    [0,1,0,1,0],
    [0,1,1,1,0],
  ];
  digitPatterns[9] = [
    [0,1,1,1,0],
    [0,1,0,1,0],
    [0,1,0,1,0],
    [0,1,1,1,0],
    [0,0,0,1,0],
    [0,0,0,1,0],
    [0,1,1,1,0],
  ];
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
