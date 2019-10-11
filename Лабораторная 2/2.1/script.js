let i;
let j;
let arr = []; 

for(i = 0; i < 10; i++){
    arr[i] = [];
    for(j = 0; j < 10; j++){
        arr[i][j] = (i*j);     
    }
}
console.log(arr[6][7]);