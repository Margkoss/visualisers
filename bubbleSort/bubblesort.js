let array = [];
let numbers = 80;

let i = 0;
let j = 0;

function setup(){
    createCanvas(windowWidth - 20, windowHeight -20 );

    for(let i = 0; i < numbers; i++){
        array.push(Math.floor(Math.random() * height));
    }

    bubbleSort(array);
}

function draw(){

    drawRectangles();
    
}

async function bubbleSort(arr){
    
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - i - 1; j++){
            if(arr[j] > arr[j+1]){
                await swap(arr, j, j+1);
            }
        }
    }
}

function drawRectangles(){
    clear();
    background(153);
    for(let i = 0; i < array.length; i++){
        rect(i * width/array.length, height, width/array.length, -array[i]);
    }
}

async function swap(arr, a, b){
    await sleep(10)
    let temp = arr[a];

    arr[a] = arr[b];
    arr[b] = temp;
}

function windowResized() {
    resizeCanvas(windowWidth -20, windowHeight -20);
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms)); 
}