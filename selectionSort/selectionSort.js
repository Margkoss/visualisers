let values = [];
let numbers = 50;

let i = 0;
let j = i+1;
let min_idx = i;

function setup(){
    createCanvas(windowWidth - 20, windowHeight -20 );

    for(let i = 0; i < numbers; i++){
        values.push(Math.floor(Math.random() * height));
    }

}

function draw(){

    drawRectangles();

    selectionSort();
}

function selectionSort(){
    if(values[j] < values[min_idx])
        min_idx = j;
    j++;

    if(j >= values.length){
        swap(values, min_idx, i);
        i++;
        min_idx = i;
        j=i+1;
        if(i >= values.length)
            noLoop();
        console.log(values)
    }
}

function drawRectangles(){
    clear();
    background(153);
    for(let i = 0; i < values.length; i++){
        rect(i * width/values.length, height, width/values.length, -values[i]);
    }
}

function swap(values, a, b){
    let temp = values[a];

    values[a] = values[b];
    values[b] = temp;
}

function windowResized() {
    resizeCanvas(windowWidth -20, windowHeight -20);
  }