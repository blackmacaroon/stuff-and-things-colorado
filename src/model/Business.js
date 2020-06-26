function Business(attributes){
    this.id = attributes.id,
    this.name = attributes.name,
    this.webaddress = attributes.webaddress
};

Business.convertRow2Obj = function(businessRow) { 
    var business = new Business (businessRow);
    return business;
};

//      LOAD ALL BUSINESSES INSTANCES                                                       
Business.loadAll = function() {
    var i = 0, key = "", keys=[], businessTableString="", businessTable = {};
    try {
        if(localStorage["businessTable"]){
            businessTableString = localStorage["businessTable"];
        }
    } catch(err) {
        alert("Error reading from Local Storage\n" + err);
    }
    if(businessTableString){
        businessTable = JSON.parse(businessTableString);      // "deserialization" = converting the string into a map
        keys = Object.keys (businessTable);
        console.log( keys.length + " businesses loaded");
        for(i = 0; i<keys.length; i++){
            key= keys[i];
            Business.instance[key] = Business.convertRow2Obj( businessTable[key]);
        }
    }
};

//      SAVE ALL BUSINESS INSTANCES
Business.saveAll = function() {
    var bookTableString = "", error=false, numOfBusinesses = Object.keys( Business.instances).length;
    try {
        bookTableString = JSON.stringify( Business.instances);      // "serialization" = converting the map into a string
        localStorage["businessTable"] = businessTableString;
    } catch(err){
        alert("Error writing to local storage\n" + err);
        error = true;
    }
};

//      CREATE AND STORE A NEW BUSINESS INSTANCE
Business.add = function(newBusi) {
    var business = new Business[newBusi];
    Business.instances[newBusi.id] = business;
    console.log(newBusi.name + " created");
};

//      UPDATE AN EXISTING BUSINESS INSTANCE
Business.update = function(updatedBusi) {
    var business = Business.instances[updatedBusi.id];
    if(business.name !== updatedBusi.name) {business.name = updatedBusi.name};
    if(business.webaddress !== updatedBusi.webaddress) {business.webaddress = updatedBusi.webaddress};
    console.log("Business "+ updatedBusi.id + " modified successfully");
     
};

//      DELETE A BUSINESS INSTANCE
Business.destroy = function(id) {
    if(Business.instances[id]){
        delete Business.instance[id]
        console.log("Business " + id + " deleted" )
    } else {
        console.log("There is no business with ID " + id + " in the database")
    }
};

//      CREATE A FEW EXAMPLE INSTANCES TO USE AS TEST DATA
Business.createTestData = function() {
    Business.instances['012345'] = new Business({id: "012345", name: "The Black Pineapple", webaddress: "http://www.theblackpineappleco.com/"});
    Business.instances['012346'] = new Business({id: "012346", name: "Neckjuice", webaddress: "https://www.neckjuicedrips.com/"});
    Business.saveAll();
    console.log("test data created")
};

//      DELETE ALL DATA FROM LOCAL STORAGE (!!! ONLY USE FOR TESTING !!!)
Business.clearData = function() {
    if(confirm("Are you sure you want to delete all the businesses in the database?")) {
        localStorage["businessTable"] = "{}";
    }
};


