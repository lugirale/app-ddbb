function Win2(){
	var win = Ti.UI.createWindow({
		backgroundColor: 'white'
	}),
	dataBase = require('ui/DataBase'),
	table = Ti.UI.createTableView({
		
	});
	win.add(table);
	
	// *Eventos
	win.addEventListener('focus', function(e){
		var databaseObj = new dataBase('query', null),
		    data = []; 
		for(var i in databaseObj ){
			var row = Ti.UI.createTableViewRow({
				title: databaseObj[i]
			});
			data.push(row);
		};
	    table.data = data;
	});
	// Fin Eventos*
	
	return win;
}

module.exports = Win2;