function Business(attributes){
    this.name = attributes.name,
    this.location = attributes.location,
    this.webaddress = attributes.webaddress,
    this.hoursofop = attributes.hoursofop,
    this.contact = attributes.contact,
    this.imageurl = attributes.imageurl,
    this.description = attributes.description
};

Business.convertRow2Obj = function (businessRow){ 
    var business = new Business (businessRow);
    return business;
}

//      LOAD ALL BUSINESSES INSTANCES                                                       
Business.loadAll = function() {
    var i = 0, key = "", keys=[], businessTableString="", businessTable = {};
    try {
        if(localStorage["businessTable"]){
            businessTableString = localStorage["businessTable"]
        }
    } catch (err) {
        alert("Error reading from Local Storage/n" + err)
    }
    if(businessTableString){
        businessTable = JSON.parse(businessTableString)      // "deserialization"
        keys = Object.keys (businessTable)
        console.log( keys.length + " businesses loaded")
        for(i = 0; i<keys.length; i++){
            key= keys[i]
            Business.instance[key] = Business.convertRow2Obj( businessTable[key])
        }
    }
}

//      SAVE ALL BUSINESS INSTANCES

//      CREATE AND STORE A NEW BUSINESS INSTANCE

//      UPDATE AN EXISTING BUSINESS INSTANCE

//      DELETE A BUSINESS INSTANCE

//      CREATE A FEW EXAMPLE INSTANCES TO USE AS TEST DATA





const blackpineapple = new Business({
    name: 'The Black Pineapple',
    webaddress: 'http://www.theblackpineappleco.com/',
    contact: 'theblackpineapplecandles@gmail.com',
    description: 'Small Batch Hand Poured Natural Soy Wax Candles'
});

