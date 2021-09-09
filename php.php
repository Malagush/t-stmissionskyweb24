<?php
	$txt = $_POST['i'];                         //получаем номер дня  
    $write = fopen('saves.txt', 'a+');    //открываем файл для записи в конец
	fwrite($write, "\n".$txt);             //записываем номер дня
	fclose($write);                       //закрываем файл
?>