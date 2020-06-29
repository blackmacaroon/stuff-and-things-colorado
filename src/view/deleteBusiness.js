/****************************
Methods for deleting a record
****************************/
stuffandthings.view.deleteBusiness = {
    setupUserInterface: function(){
        var deleteButton = document.forms['Business'].commit;
        var selectEl = document.forms['Business'].selectBusiness;
        var key="", keys=[], business=null, optionEl=null, i=0;
        // load all business objects
        Business.loadAll();
        keys = Object.keys(Business.instances);
        // populate the selection list with businesses
        for (i=0; i < keys.length; i++) {
            key = keys[i];
            business = Business.instances[key];
            optionEl = document.createElement("option");
            optionEl.text = business.name;
            optionEl.value = business.id;
            selectEl.add(optionEl, null);
        };
        // Set an event handler for the submit/delete button
        deleteButton.addEventListener("click",
            stuffandthings.view.deleteBusiness.handleDeleteButtonClickEvent);
        // Set a handler for the event when the browser window/tab is closed
        window.addEventListener("beforeunload", Business.saveAll);
    },

    handleDeleteButtonClickEvent: function(){
        var selectEl = document.forms['Business'].selectBusiness;
        var isbn = selectEl.value;
        if (isbn) {
        Business.destroy( isbn);
        // remove deleted business from select options
        selectEl.remove( selectEl.selectedIndex);
        }
    }
};