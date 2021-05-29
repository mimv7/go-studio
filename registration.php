<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    $subject = 'запись';
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $date = $_POST['date'];
    $msg = 'клиент ' . $name .  '( ' . $phone . ' )' . 'записался ' . $data ; 
    $send = mail('rapyan1997@mail.ru', 'запись', $msg);
    if($send){
        echo 'запрос отправлен';
    }else{
        echo 'ошибка';
    }
    ?>
</body>
</html>