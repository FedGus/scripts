let str = prompt('Введите адрес');

function email(str){
  if(/^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/.test(str)) {
    document.write('Это email');
  } 
  else {
    document.write('Это не email');
  }
}

email(str);