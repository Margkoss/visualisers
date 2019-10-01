let values = [];
let numbers = 80;

let i = 0;
let j = 0;

function setup(){
    createCanvas(windowWidth - 20, windowHeight -20 );

    for(let i = 0; i < numbers; i++){
        values.push(Math.floor(Math.random() * height));
    }
}

function draw(){

    drawRectangles();

    bubbleSort();
    
}

function bubbleSort(){
    let a = values[j];
    let b = values[j+1];
    if(a < b)
        swap(values, j, j+1);

    if(i < values.length){
        j++;
        if(j >= values.length - i - 1){
            j = 0;
            i++;
        }
    }else{
        console.log("done");
        noLoop();
    }
}

function drawRectangles(){
    clear();
    background(153);
    for(let i = 0; i < values.length; i++){
        rect(i * width/values.length, height, width/values.length, values[i] - height);
    }
}

function swap(array, a, b){
    let temp = array[a];

    array[a] = array[b];
    array[b] = temp;
}

function windowResized() {
    resizeCanvas(windowWidth -20, windowHeight -20);
  }