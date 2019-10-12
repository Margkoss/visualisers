let array = [];
let numbers = 100;

function setup(){
    createCanvas(windowWidth - 20, windowHeight -20 );

    for(let i = 0; i < numbers; i++){
        array.push(Math.floor(Math.random() * height));
    }

    insertionSort(array);
}

function draw(){
    drawRectangles();
}

async function insertionSort(arr){

    for(let i = 0; i < arr.length; i++){
        let key = arr[i];
        let j = i - 1;

        while(j >= 0 && arr[j] > key){
            await sleep(5);
            arr[j + 1] = arr[j]; 
            j = j - 1
        }

        arr[j+1] = key;
    }

}

function drawRectangles(){
    clear();
    background(153);
    for(let i = 0; i < array.length; i++){
        rect(i * width/array.length, height, width/array.length, -array[i]);
    }
}

function windowResized() {
    resizeCanvas(windowWidth -20, windowHeight -20);
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms)); 
}