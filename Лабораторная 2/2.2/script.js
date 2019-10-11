let str='';
let bool=false;

while ((str == '') || (str === null) || (bool == false)) {
    str = prompt('Введите строку с разделителем `;`');
    bool = false;
    if (str != null){
        for (let i=0; i < str.length; i++) {
            if (str[i]==';') bool=true;                                
                                        }
                }                 }
let arr=(str.split(';'));
for (let i=0; i < arr.length;i++){
    document.write(`${arr[i]}<br>`);
}