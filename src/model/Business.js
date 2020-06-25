function Business(attributes){
    this.id = attributes.id,
    this.name = attributes.name,
    this.location = attributes.location,
    this.webaddress = attributes.webaddress,
    this.hoursofop = attributes.hoursofop,
    this.contact = attributes.contact,
    this.image = attributes.image,
    this.description = attributes.description
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
    Book.instances["012345"] = new Business({id: "012345", name: "The Black Pineapple", webaddress: "http://www.theblackpineappleco.com/", contact: "theblackpineapplecandles@gmail.com", description: "Small Batch Hand Poured Natural Soy Wax Candles"});
    Book.instances["012346"] = new Business({id: "012346", name: "Neckjuice", location: "6719 W. Colfax Ave, Lakewood, Colorado 80214", webaddress: "https://www.neckjuicedrips.com/", contact: "josiahgee@neckjuicedrips.com", description: 'Small Batch Hand Poured Natural Soy Wax Candles'});
};

//      DELETE ALL DATA FROM LOCAL STORAGE (!!! ONLY USE FOR TESTING !!!)
Business.clearData = function() {
    if(confirm("Are you sure you want to delete all the businesses in the database?")) {
        localStorage["bookTable"] = "{}";
    }
};


