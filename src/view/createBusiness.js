stuffandthings.view.createBusiness = {
    setupUserInterface: function () {
      var saveButton = document.forms['Business'].commit;
      // load all business objects
      Business.loadAll();
      // Set an event handler for the save/submit button
      saveButton.addEventListener("click", 
          pl.view.createBusiness.handleSaveButtonClickEvent);
      window.addEventListener("beforeunload", function () {
          Business.saveAll(); 
      });
    },
    handleSaveButtonClickEvent: function () {
      var formEl = document.forms['Business'];
      var slots = { id: formEl.id.value, 
          name: formEl.name.value, 
          webaddress: formEl.webaddress.value};
      Business.add( slots);
      formEl.reset();
    }
  };