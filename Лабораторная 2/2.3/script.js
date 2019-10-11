
let str_krl = 'а б в г д е ё ж з и й к л м н о п р с т у ф х ц ч ш щ ъ ы ь э ю я';
let str_lat = 'a b v g d e yo zh z i j k l m n o p r s t u f h c ch sh shh `` y` ` e` yu ya';

let arr_krl = [];
let arr_lat = [];

let n = false;
let m = false;

while (!n || str_krl == '' || str_krl.indexOf(' ') == -1 ) {
    if (str_krl != null && str_krl != '') {
        n = true;
        arr_krl = str_krl.split(' ');
    }
}

while (!m || str_lat == '' || str_lat.indexOf(' ') == -1 ) {
    if (str_lat != null && str_lat != '') {
        m = true;
        arr_lat = str_lat.split(' ');
    }
}

let str = '';
let strTrans = '';

while (str == '') {
    str = window.prompt('Введите кириллическую строку для транслитерации', ''); 
}

for (let i = 0; i < str.length; i++){
	for (let j = 0; j < arr_krl.length; j++){
    if (str[i] == arr_krl[j]){
        strTrans += arr_lat[j];
		}
	}             
}
console.log(strTrans); 
document.writeln(strTrans);