let dayToBD = function () {
    let todayDate = new Date();
    let bDate = new Date(2020, 5, 28, 0, 0, 0);
    let timer = (bDate - todayDate);
    let day;
    let hour;
    let sec;
    if (todayDate < bDate) {
        //Вычисляем сколько осталось дней до даты отсчета.
        //Для этого количество миллисекунд до даты отсчета делим
        //на количество миллисекунд в одном дне
        day = parseInt(timer / (1000 * 60 * 60 * 24));
        //если полученное число меньше 10 прибавляем 0
        if (day < 10) {
            day = '0' + day;
        }

        //Вычисляем сколько осталось часов до даты отсчета.
        //Для этого переменную timer делим на количество
        //миллисекунд в одном часе и отбрасываем дни
        hour = parseInt(timer / (60 * 60 * 1000)) % 24;
        //если полученное число меньше 10 прибавляем 0
        if (hour < 10) {
            hour = '0' + hour;
        }

        //Вычисляем сколько осталось минут до даты отсчета.
        //Для этого переменную timer делим на количество
        //миллисекунд в одной минуте и отбрасываем часы
        min = parseInt(timer / (1000 * 60)) % 60;
        //если полученное число меньше 10 прибавляем 0
        if (min < 10) {
            min = '0' + min;
        }

        //Вычисляем сколько осталось секунд до даты отсчета.
        //Для этого переменную timer делим на количество
        //миллисекунд в одной минуте и отбрасываем минуты
        sec = parseInt(timer / 1000) % 60;
        //если полученное число меньше 10 прибавляем 0
        if (sec < 10) {
            sec = '0' + sec;
        }

    }
    document.getElementsByClassName('days-value')[0].innerText = day;
    document.getElementsByClassName('hours-value')[0].innerText = hour;
    document.getElementsByClassName('minutes-value')[0].innerText = min;
    document.getElementsByClassName('seconds-value')[0].innerText = sec;
}
dayToBD();
//Периодически вызываем созданную функцию, 
//интервал вызова одна секунда(1000 милли секунд)
setInterval(function () {
    dayToBD()
}, 1000)