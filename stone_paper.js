mes=" Добро пожаловать в игру Камень-Ножницы-Бумага";
alert(mes);
var winners = [
  [2, 1, 0],
  [0, 2, 1],
  [1, 0, 2]
];
let user1;
let user2;
function userNumb() {
user = parseInt(prompt("Введите ЦЕЛОЕ число от 1 до 3, где 1 - Ножницы, 2 - Камень, 3 - Бумага; 0 - Выход из игры"));
         while(isNaN(user) || user <1 || user >3){
           alert("ОШИБКА! Повторите ввод");
	       user = parseInt(prompt("Введите целое число от 1 до 3, 0 - Выход"));
        }
		{
		return(user)
		}
}

user1 = userNumb(user1) - 1;
user2 = userNumb(user2) - 1;

alert("ПРИСТУПИМ");
//alert(typeof user1);
//alert(typeof(user2));
//alert (`элемент массива ${winners [user1][user2]}`);
win = winners [user1][user2];
alert(win);
if(win == 0)
{
  mes="выйграл user2";
  }
   else if(win == 1)
{
  mes="выйграл user1";
 }
else
{
  mes="Ничья";
}
alert(mes);
alert("Спасибо за игру. Будем рады поиграть ещё!");