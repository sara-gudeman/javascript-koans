describe("About Mutability", function() {

  it("should expect object properties to be public and mutable", function () {
    var aPerson = {firstname: "John", lastname: "Smith" };
    aPerson.firstname = "Alan";
    
    expect(aPerson.firstname).toBe("Alan");
    // objects are mutable--their properties can be change
  });

  it("should understand that constructed properties are public and mutable", function () {
    function Person(firstname, lastname)
    {
      this.firstname = firstname;
      this.lastname = lastname;
    }
    var aPerson = new Person ("John", "Smith");
    aPerson.firstname = "Alan";
    
    expect(aPerson.firstname).toBe("Alan");
    // objects derived from constructor functions are still mutable
  });

  it("should expect prototype properties to be public and mutable", function () {
    function Person(firstname, lastname)
    {
      this.firstname = firstname;
      this.lastname = lastname;
    }
    Person.prototype.getFullName = function () {
      return this.firstname + " " + this.lastname;
    };
    
    var aPerson = new Person ("John", "Smith");
    expect(aPerson.getFullName()).toBe("John Smith");
    
    aPerson.getFullName = function () {
      return this.lastname + ", " + this.firstname;
    };
    
    expect(aPerson.getFullName()).toBe("Smith, John");
    // prototypal properties can be created and/or changed
  });

  it("should know that variables inside a constructor and constructor args are private", function () {
    function Person(firstname, lastname)
    {
      var fullName = firstname + " " + lastname;
      
      this.getFirstName = function () { return firstname; };
      this.getLastName = function () { return lastname; };
      this.getFullName = function () { return fullName; };
    }
    var aPerson = new Person ("John", "Smith");
    // new person object instantiated

    aPerson.firstname = "Penny";
    aPerson.lastname = "Andrews";
    aPerson.fullName = "Penny Andrews";
    // new properties created in aPerson
    // firstname, lastname, fullName and assigned values
    
    expect(aPerson.getFirstName()).toBe("John");
    expect(aPerson.getLastName()).toBe("Smith");
    expect(aPerson.getFullName()).toBe("John Smith");
    // original values enclosed/wrapped in functions
    // remain unchanged by new property assignments, despite having same var names

    aPerson.getFullName = function () {
      return aPerson.lastname + ", " + aPerson.firstname;
    };
    
    expect(aPerson.getFullName()).toBe("Andrews, Penny");
    // getFullName function is reassigned and takes in new args (properties 
    // assigned earlier) for first/lastname
  });

});
