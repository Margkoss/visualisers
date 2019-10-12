let array = [];
let numbers = 300;

function setup(){
    createCanvas(windowWidth - 20, windowHeight -20 );

    for(let i = 0; i < numbers; i++){
        array.push(Math.floor(Math.random() * height));
    }

    mergeSort(array, 0, array.length)
}

function draw(){
    drawRectangles();
}


async function mergeSort(arr, left, right){
    if(left >= right)
        return

    let med = parseInt((left + right) / 2);

    await Promise.all([mergeSort(arr, left, med), mergeSort(arr, med+1, right)]);
    await merge(arr, left, med, right);
}

async function merge(arr, left, med, right){
    let lengthLeft = med-left+1;
    let lengthRight = right-med;
    let L = [];
    let R = [];

    for(let i = 0; i < lengthLeft; i++)
        L[i] = arr[left + i];
    for(let i = 0; i < lengthRight; i++)
        R[i] = arr[med + i + 1];

    let i = 0,
        j = 0,
        k = left;

    while(i < lengthLeft && j < lengthRight){
        if (L[i] <= R[j]) 
        { 
            await sleep(5);
            arr[k] = L[i]; 
            i++; 
        } 
        else
        { 
            await sleep(5);
            arr[k] = R[j]; 
            j++; 
        } 
        k++;
    }

    /* Copy remaining elements of L[] if any */
    while (i < lengthLeft) 
    { 
        arr[k] = L[i]; 
        i++; 
        k++; 
    } 

    /* Copy remaining elements of R[] if any */
    while (j < lengthRight) 
    { 
        arr[k] = R[j]; 
        j++; 
        k++; 
    } 
}

function drawRectangles(){
    clear();
    background(153);
    for(let i = 0; i < array.length; i++){
        rect(i * width/array.length, height, width/array.length, -array[i]);
    }
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