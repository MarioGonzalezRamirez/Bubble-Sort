let values = [];

let i = 0;

let selectSort = false;
let bubbleSort = true;

var counter = 0;


function startBoi(){
  var selectionType = document.getElementById("selectionType").value;

  if(selectionType == "0"){
    selectSort = false;
    bubbleSort = true;
  }

  if(selectionType == "1"){
    selectSort = true;
    bubbleSort = false;
  }

  loop();

}


function stopBoi(){
  noLoop();
}

function resetBoi(){
  window.location.reload();
}


function setup() {
  createCanvas(windowWidth, windowHeight);

  values = new Array(windowWidth);

  makeRandom();

  noLoop();

}

function makeRandom(){
  for (let w = 0; w < values.length; w++) {
    values[w] = random(height);
    // values[i] = noise(i/100.0)*height;
  }

}



function draw(){
console.log(selectionType);

background('RED');

let swapped = new Array();
var len = values.length;


  // Run Bubble Sort
if(bubbleSort){
  if (i < values.length) {
    for (let j = 0; j < values.length - i - 1; j++) {
      let a = values[j];
      let b = values[j + 1];
      if (a > b) {
        swap(values, j, j + 1);
        counter++;
        swapped.push(j)
      }
    }
  } else {
    console.log("finished");
    console.log("Number of Swaps" + counter);

    noLoop();
  }

}



if(selectSort){
  //Run Selection Sort
  if (i < values.length) {
    var d_min = i;
    for (var d = i + 1; d < len; d++) {
        if (values[d] < values[d_min]) {
            d_min = d;
            swapped.push(d)
        }
    }
    if (d_min !== i) {
        swap(values, i, d_min);
    }
  } else {
    console.log("finished");

    noLoop();
  }

}

i++;

for (let i = 0; i < values.length; i++) {
  let a = values[i];
  let b = values[i + 1];
  if (a > b) {
    stroke('blue');
  }
    rect(i,height - values[i], 1, -height)

    strokeWeight(1);
}
fill("white")
textSize(40);
text('Bubble Sort',20,100);

text('Amount of Numbers Sorted : ' + values.length, 20,200);

text('Number of Swaps: ' + counter,20,300);



}



function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
