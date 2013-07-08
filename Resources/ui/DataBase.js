function DataBase(req, name){
    switch(req){
        case 'create': {
            var db = Ti.Database.open('bbddname');
            db.execute('CREATE TABLE IF NOT EXISTS data ( id INTEGER PRIMARY KEY, name TEXT);');
            db.close();
            Ti.API.info('created!');
  	    }
  	    break;
        case 'insert': {
            var db = Ti.Database.open('bbddname');
            db.execute('INSERT INTO DATA(name) VALUES ("'+name+'");');
            db.close();
            Ti.API.info('inserted!');
  	    }
  	    break;
        case 'delete': {
            var db = Ti.Database.open('bbddname');
            db.execute('DELETE FROM data WHERE name=?', name);
            db.close();
            Ti.API.info('deleted!');
  	    }
  	    break;
        case 'query': {
            var db = Ti.Database.open('bbddname'),
            allData = db.execute('SELECT * FROM data'),
            data = [];
            while(allData.isValidRow()){
            	data.push(allData.fieldByName('name'));
            	allData.next()
            }
            db.close();
            Ti.API.info('selected!');
            return data;
  	    }
  	    break;  	  
    }  	  	  
}

module.exports = DataBase;