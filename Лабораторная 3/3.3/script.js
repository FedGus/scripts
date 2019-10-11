let my_arr =[4, 5, [32, [1, 2, 3], 867], 1];
let clone_arr = clone_deep(my_arr);

function clone_deep(arr){
    let clone = (arr instanceof Array)? [] : {};
      for (let i in arr) {
        if(typeof arr[i] === 'object'){
          clone[i] = clone_deep(arr[i]);
        } else {
          clone[i] = arr[i];
        }
      }
      return clone;
}

document.write(`Исходный массив: ${my_arr} <br>`);
document.write(`Клонированный массив: ${clone_arr}`);