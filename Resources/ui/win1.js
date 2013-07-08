function Win1(){
	var win = Ti.UI.createWindow({
		backgroundColor: 'white'
	}),
	    dataBase = require('ui/DataBase'),
		buttonCreate = Ti.UI.createButton({
			title: 'Create',
			height: 60,
			width: 120,
			top: 10
		}),
		textField = Ti.UI.createTextField({
			borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
			width: 200,
			top: 54
		}),
		buttonInsert = Ti.UI.createButton({
			title: 'Insert',
			width: 120,
			height: 60,
			left: 50,
			top: 124
		}),
		buttonIDelete = Ti.UI.createButton({
			title: 'delete',
			width: 120,
			height: 60,
			right: 50,
			top: 124
		});
	
	win.add(buttonCreate);
	win.add(textField);
	win.add(buttonInsert);
	win.add(buttonIDelete);
	
	// *Eventos
	buttonCreate.addEventListener('click', function(e){
		dataBase('create', null);
	});
	buttonInsert.addEventListener('click', function(e){
		dataBase('insert', textField.value );
	});
	buttonIDelete.addEventListener('click', function(e){
		dataBase('delete', textField.value );
	});
	// Fin Eventos*
	
	return win;
}

module.exports = Win1;
