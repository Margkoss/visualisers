let values = [];
let numbers = 300;

let left = 0;
let right = numbers - 1;

function setup(){
    createCanvas(windowWidth - 20, windowHeight -20 );

    for(let i = 0; i < numbers; i++){
        values.push(Math.floor(Math.random() * height));
    }

}

function draw(){

    drawRectangles();

    console.log(left,right);
    quickSort(values);
}


function quickSort(items) {
    let index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            right = index - 1;
        }
        if (index < right) { //more elements on the right side of the pivot
            left = index;
        }
    }
    return items;
}


function drawRectangles(){
    clear();
    background(153);
    noStroke();
    for(let i = 0; i < values.length; i++){
        rect(i * width/values.length, height, width/values.length, -values[i]);
    }
}

function swap(values, a, b){
    let temp = values[a];

    values[a] = values[b];
    values[b] = temp;
}

function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], 
        i       = left, 
        j       = right; 
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); 
            i++;
            j--;
        }
    }
    return i;
}

function windowResized() {
    resizeCanvas(windowWidth -20, windowHeight -20);
  }