let displaysTime = [];
let displaysDate = [];

let displaysSecs = [];

const canvasWidth = 1200;
const canvasHeight = 250;
function setup() {
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position((windowWidth / 2) - (canvasWidth / 2), (windowHeight / 2) - (canvasHeight / 2));

  for (let i = 0 ; i < 8 ; i++) {
    let xPos = 150 * i;
    let display = new Display(xPos, 150, canvasHeight);
    displaysTime.push(display);
  }
  /*for (let i = 0 ; i < 10 ; i++) {
    let xPos = 120 * i;
    let display = new Display(xPos, 120, canvasHeight);
    displaysDate.push(display);
  }*/
  /*for (let i = 0 ; i < 10 ; i++) {
    let xPos = 120 * i;
    let display = new Display(xPos, 120, canvasHeight);
    displaysSecs.push(display);
  }*/
}

function draw() {
  background(220);

  let day = new Date();

  let secs = day.getSeconds();
  secsOne = secs.toString().length === 2 ? secs.toString()[1] : secs;
  secsTen = secs.toString().length === 2 ? secs.toString()[0] : 0;
  let mins = day.getMinutes();
  minsOne = mins.toString().length === 2 ? mins.toString()[1] : mins;
  minsTen = mins.toString().length === 2 ? mins.toString()[0] : 0;
  let hrs = day.getHours();
  hrsOne = hrs.toString().length === 2 ? hrs.toString()[1] : hrs;
  hrsTen = hrs.toString().length === 2 ? hrs.toString()[0] : 0;

  let times = [hrsTen, hrsOne, null, minsTen, minsOne, null, secsTen, secsOne];
  displaysTime.forEach((display, index) => display.showSegments(times[index]));

  /*let year = day.getFullYear().toString();
  let month = (day.getMonth() + 1).toString();
  monthZero = month.length === 2 ? month[0] : 0;
  monthOne = month.length === 2 ? month[1] : month;
  let date = day.getDate().toString();
  dayZero = date.length === 2 ? date[0] : 0;
  dayOne = date.length === 2 ? date[1] : date;

  let dates = [year[0], year[1], year[2], year[3], null, monthZero, monthOne, null, dayZero, dayOne];
  displaysDate.forEach((display, index) => display.showSegments(dates[index]));

  let secs = Math.floor((day.getTime() / 1000)).toString();
  for (let i = 0 ; i < secs.length ; i++) {
    displaysSecs[i].showSegments(secs[i]);
  }*/
}