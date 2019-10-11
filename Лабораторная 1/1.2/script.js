let name = "";
let answer = false;
let flag = false;

while (!flag || !answer || name == "") {

    name = prompt("Введите имя");

    if (name != null && name != "") {
        flag = true;
		answer = confirm(`Ты точно ${name}?`);
    }

}
alert(`Приветствую тебя, ${name}!`);