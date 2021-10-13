mes=" Добро пожаловать в игру Камень-Ножницы-Бумага";
alert(mes);
let user1;
let user2;
function userNumb() {
user = parseInt(prompt("Введите ЦЕЛОЕ число от 1 до 3, где 1 - Ножницы, 2 - Камень, 3 - Бумага; 0 - Выход из игры"));
      
  while (isNaN(user) || user <1 || user >3 ) {
         alert("ОШИБКА! Повторите ввод");
	       user = parseInt(prompt("Введите целое число от 1 до 3, 0 - Выход"));
         }
		 
    {
		return(user);
		}
}

user1 = userNumb(user1) ;
user2 = userNumb(user2) ;

alert("ПРИСТУПИМ");
//alert(typeof user1);
//alert(typeof(user2));
//alert (`элемент массива ${winners [user1][user2]}`);
if (user1 == user2){
		mes = "Ничья"
}
else if (user1==1&&user2==2||user1==3&&user2==3 || user1==3&&user2==1) {

mes = "Выиграл Игрок 1"}
else {
	mes = "Выиграл Игрок 2"
}

alert(mes);
alert("Спасибо за игру. Будем рады поиграть ещё!");