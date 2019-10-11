let array = [];
let numbers = 100;

let left = 0;
let right = numbers - 1;

function setup(){
    createCanvas(windowWidth - 20, windowHeight -20 );

    for(let i = 0; i < numbers; i++){
        array.push(Math.floor(Math.random() * height));
    }
    console.log(array)
    // frameRate(15);
    quickSort(array, 0, array.length - 1);
}

function draw(){
    drawRectangles();
}


function drawRectangles(){
    clear();
    background(153);
    for(let i = 0; i < array.length; i++){
        rect(i * width/array.length, height, width/array.length, -array[i]);
    }
}

async function quickSort(array, start, end){
    if(start >= end){
        return
    }

    let index = await partition(array, start, end);

    await Promise.all([quickSort(array, start, index - 1), quickSort(array, index + 1, end)]);
    
}

async function partition(array, start, end){
    let pivotIndex = start;
    let pivotValue = array[end];

    for(let i = start; i < end; i++){
        if(array[i] < pivotValue){
            await swap(array, i, pivotIndex);
            pivotIndex++;
        }
    }

    await swap(array, pivotIndex, end);
    return pivotIndex;
}

async function swap(array, a, b){
    await sleep(10);
    let temp = array[a];

    array[a] = array[b];
    array[b] = temp;
}

function windowResized() {
    resizeCanvas(windowWidth -20, windowHeight -20);
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms)); 
}