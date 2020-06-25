stuffandthings.view.listBusinesses = {
    setupUserInterface: function() {
        var tableBodyEl = document.querySelector("table#businesses>tbody");
        var i=0, keys=[], key="", row={};
        // load all business objects
        Business.loadAll();
        keys = Object.keys( Business.instances);
        // for each business, create a table row with a cell for each attribute
        for (i=0; i < keys.length; i++) {
            key = keys[i];
            row = tableBodyEl.insertRow();
            row.insertCell(-1).textContent = Business.instances[key].id;      
            row.insertCell(-1).textContent = Business.instances[key].name;  
            row.insertCell(-1).textContent = Business.instances[key].location;
            row.insertCell(-1).textContent = Business.instances[key].webaddress;
            row.insertCell(-1).textContent = Business.instances[key].hoursofop;
            row.insertCell(-1).textContent = Business.instances[key].contact;
            row.insertCell(-1).textContent = Business.instances[key].image;
            row.insertCell(-1).textContent = Business.instances[key].description;
        }
    }
}