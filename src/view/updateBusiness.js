stuffandthings.view.updateBusiness = {
    setupUserInterface: function(){
        var formEl = document.forms['Business'],
            saveButton = formEl.commit,
            selectBusinessEl = formEl.selectBusiness;
        var key = "", keys = [], business=null, optionEl=null, i=0;
        // load all the businesses    
        Business.loadAll();
        console.log("loaded")
        // populate the selection list with businesses
        keys = Object.keys(Business.instances);
        for(i=0; i < keys.length; i++){
            key = keys[i];
            business = Business.instances[key];
            optionEl = document.createElement("option");
            optionEl.text = business.name;
            optionEl.value = business.id;
            selectBusinessEl.add(optionEl, null)
        };
        // when a business is selected, fill the form with it's data
        selectBusinessEl.addEventListener("change", stuffandthings.view.updateBusiness.handleBusinessSelectionEvent);
        // set an event handler for the submit button
        saveButton.addEventListener("click", stuffandthings.view.updateBusiness.handleSaveButtonClickEvent);
        // handle the event when the browser window is closed
        window.addEventListener("beforeunload", Business.saveAll);
    },

    handleBusinessSelectionEvent: function(){
        var formEl = document.forms['Business'];
        var selectBusinessEl = formEl.selectBusiness,
            business=null, key = selectBusinessEl.value;
        if (key) {
        business = Business.instances[key];
        formEl.id.value = business.id;
        formEl.name.value = business.name;
        formEl.webaddress.value = business.webaddress;
        } else {
        formEl.reset();
        }
    },

    handleSaveButtonClickEvent: function(){
        var formEl = document.forms['Business'],
        selectBusinessEl = formEl.selectBusiness;
        var slots = { id: formEl.id.value, 
            name: formEl.name.value, 
            webaddress: formEl.webaddress.value
            };
        Business.update( slots);
        // update the selection list option
        selectBusinessEl.options[selectBusinessEl.selectedIndex].text = slots.title;
        formEl.reset();
    }
}