$('td').click( function() {		//функция обработки нажатия на дату(выделяем зеленым и показываем кнопку)
    $(this).toggleClass('on');
    document.getElementById("button").style.display = "block";
    
});

function SaveBr() {				//функция сохранения данных в файл
	for (var i = 0; i < 30; i++) {		//цикл перебора всех дат
		if ($("#"+i).hasClass("on"))  {		//проверка выбрана ли дата
			$.ajax({							//отправка запроса в php файл на сервере, передаем номер даты(id элемента таблицы)
				url: "php.php",
				type : "POST",
				data : {'i':i}});
				document.getElementById("text").style.display = "block";			//вывод сообщения о бронировании

		}
	}
}


  
  


window.onload= function  podgruzka(){					//функция подгрузки занятых дат с сервера
	var status;												//содержит номера занятых дат
	document.getElementById("button").style.display = "none";
	document.getElementById("text").style.display = "none";
	var rawFile = new XMLHttpRequest();
	rawFile.open("GET", "saves.txt?"+Math.random(), false);	//загружаем список дат из файла, выполняя действие не из кеша, а каждый раз с сервера
	rawFile.onreadystatechange = function ()
		{
			status = rawFile.responseText;
				
		}
	rawFile.send(null);
		
	
	let splitStatus=status.split('\n')				//сплитим список дат 
	for(let i=0;i<splitStatus.length;i++){
		let line=splitStatus[i];
		document.getElementById(line).className = "tablered notClick";		//на даты из списка занятых вешаем классы заливки и отключения кликабельности
	}


}
