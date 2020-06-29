stuffandthings.view.createBusiness = {
    setupUserInterface: function () {
      var saveButton = document.forms['Business'].commit;
      // load all business objects
      Business.loadAll();
      // Set an event handler for the save/submit button
      saveButton.addEventListener("click", 
          stuffandthings.view.createBusiness.handleSaveButtonClickEvent);
      window.addEventListener("beforeunload", function () {
          Business.saveAll(); 
      });
    },
    handleSaveButtonClickEvent: function () {
      var formEl = document.forms['Business'];
      var newBusi = { id: formEl.id.value, 
          name: formEl.name.value, 
          webaddress: formEl.webaddress.value};
      Business.add(newBusi);
      formEl.reset();
    }
  };