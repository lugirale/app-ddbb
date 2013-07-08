(function(e){
	var tabGroup = Ti.UI.createTabGroup(),
	    win1 = require('ui/win1'),
	    win2 = require('ui/win2'),
	    tab1 = Ti.UI.createTab({
	    	title: 'Acciones',
	    	window: new win1()
	    }),
	    tab2 = Ti.UI.createTab({
	    	title: 'Listado',
	    	window: new win2()
	    });
	    
	    tabGroup.addTab(tab1);
	    tabGroup.addTab(tab2);
	    tabGroup.open();
})();
