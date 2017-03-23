// debugger
 // it is not possible to change any Number, String, or Boolean attribute of the input within the function,
 // but it is possible to change attributes in nested objects.
var MyModel = Backbone.Model.extend({

    validate: function(attribs) {
        if (attribs.hasOwnProperty('myString')) {
            // Maybe trim it by default?
            // or replace swear words?
            attribs.myString = attribs.myString.trim();
            // do validation here...
        }
        if (attribs.hasOwnProperty('myNumber')) {
            // I don't really see a use for it, but it won't change.
            attribs.myNumber = 43;
            //validation
        }
        if (attribs.hasOwnProperty('myBoolean')) {
            // again, no use case, but it won't change
            attribs.myBoolean = false;
            //validation
        }
        if (attribs.hasOwnProperty('myObject')) {
            // WILL change, since _.extend is not a deep copy
            attribs.myObject.foo = "baz";
            //validation
        }
    }
});

//try and set our attribs using `set`
var someInstance = new MyModel();

var attribs = {
    myString: "  Is an untrimmed String  ",
    myNumber: 42,
    myBoolean: true,
    myObject: {
        foo: "bar"
    }
};

someInstance.set(attribs, {validate: true});

console.log(someInstance.get('myString')); // outputs '  Is an untrimmed string  ', should be trimmed
console.log(someInstance.get('myNumber')); // outputs 42, should be 43
console.log(someInstance.get('myBoolean')); //outputs true, should be false
console.log(someInstance.get('myObject').foo); //outputs "baz" !

function modifiesObject(obj) {
    // bah hasOwnProperty checks.
    obj.myString = obj.myString.trim();
    obj.myNumber = 43;
    obj.myBoolean = false;
    obj.myObject.foo = "baztopia";
}

modifiesObject(attribs); //does what we want: change the object
console.log(attribs.myString); //outputs "Is a untrimmed String"
console.log(attribs.myNumber); //outputs 43
console.log(attribs.myBoolean); //outputs "false"
console.log(attribs.myObject.foo); //outputs "baztopia"
