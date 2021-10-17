mes=" Добро пожаловать в игру Камень-Ножницы-Бумага";
alert(mes);

let user1;
let user2;
function userNumb() {
user = parseInt(prompt("Введите ЦЕЛОЕ число от 1 до 3, где 1 - Ножницы, 2 - Камень, 3 - Бумага; 0 - Выход из игры"));
         while(isNaN(user) || user <0 || user >3){
           alert("ОШИБКА! Повторите ввод");
         user = parseInt(prompt("Введите целое число от 1 до 3, 0 - Выход"));
         if (user == 0){
         
        break
         }
        }
    {
    return(user)
    }
}

user1 = userNumb(user1);
if (user1 !== 0) {
    user2 = userNumb(user2);}
if ((user2 !==0)&&(user1 !==0)){
    alert("ПРИСТУПИМ");
  //alert(typeof user1);
//alert(typeof(user2));
//alert (элемент массива ${winners [user1][user2]});
//win = winners [user1][user2];
    if(user1 == user2){
  
      mes= "Ничья"
}

     else if(user1 ==2&& user2 ==3|| user1 ==1&& user2==2||user1==3&& user2 ==1)
{
             mes="выйграл user1";
 }
     else
{
            mes= "выйграл user2";
}
     alert(mes);
     alert("Спасибо за игру. Будем рады поиграть ещё!");
      }
else {
alert("Спасибо за игру. Будем рады поиграть ещё!");}