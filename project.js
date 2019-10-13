let buttons = document.getElementsByClassName('btn');
let screen = document.getElementById('display');
let a = 0;
let b = 0;
let operator = "";
	
//преобразование объекта в массив
let buttonsArray = [];
for (let i=0; i<buttons.length; i++) {
	buttonsArray.push(buttons[i]);
};

// запускаем функцию для каждого элемента массива
 buttonsArray.forEach(function(button) {
	button.onclick = function() {
		console.log (button.outerText);
		if (button.outerText == "C") {
			screen.value = "0";
			
		} else if (button.outerText == "+") {
			a = parseFloat(screen.value);
			screen.value = "";
			operator =  "+";
			
		} else if (button.outerText == "-") {
			a = parseFloat(screen.value);
			screen.value = "";
			operator =  "-";
			
		} else if (button.outerText == "×") {
			a = parseFloat(screen.value);
			screen.value = "";
			operator =  "×";
			
		} else if (button.outerText == "÷") {
			a = parseFloat(screen.value);
			screen.value = "";
			operator =  "÷";
		
		} else if (button.outerText == "=") {
			b = parseFloat(screen.value);
			
			if (operator == "+") {
				screen.value = a + b;
			}
			
			if (operator == "-") {
				screen.value = a - b;
			}
			
			if (operator == "×") {
				screen.value = a * b;
			}
			
			if (operator == "÷") {
				screen.value = a / b;
			}
		} else {
			
			if (screen.value == "0" && button.outerText != ".") {
				screen.value = button.outerText;
			} else {
				screen.value = screen.value + button.outerText;
			};
		}
	}
 });
 
 

 
 