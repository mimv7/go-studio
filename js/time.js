
time();
function time() {
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;
    if (hourNow > 19) {
        greeting = 'К сожалению Мы закрыты. Перезвоните с утра!';
    }
    else if (hourNow > 11) {
        greeting = 'Добрый день!';
    }
    else if (hourNow > 7) {
        greeting = 'Доброе утро!';
    }
    else {
        greeting = 'К сожалению Мы закрыты. Перезвоните с утра!';
    }
    document.write('<h3 class= jsGreeting>' + greeting + '</h3>');
}

