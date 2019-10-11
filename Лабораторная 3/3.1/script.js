let str = 'А роза упала на лапу Азора';

function plndrstr(str) {
    let orig_str = str.toLowerCase().replace(/\s/g, '');
    document.write(orig_str);
    let reverse_str = str.split('').reverse().join('').toLowerCase().replace(/\s/g, '');
    document.write(reverse_str);
    if (reverse_str === orig_str) {
        document.write('Это палиндром');
    } else {
        document.write('Увы, это не палиндром');;
    }
}
plndrstr(str);