let str = prompt('Введите адрес');

function url(str){
  if(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?$/.test(str)) {
    document.write('Это url');
  } 
  else {
    document.write('Это не url');
  }
}

url(str); 