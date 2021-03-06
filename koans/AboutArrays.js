describe("About Arrays", function() {

  //We shall contemplate truth by testing reality, via spec expectations.  
  it("should create arrays", function() {
    var emptyArray = [];
    expect(typeof(emptyArray)).toBe('object'); // FIX: an array is of type object
    expect(emptyArray.length).toBe(0); // FIX: length of an empty array is 0

    var multiTypeArray = [0, 1, "two", function () { return 3; }, {value1: 4, value2: 5}, [6, 7]];
    expect(multiTypeArray[0]).toBe(0); 
    // FIX: arr value at index 0 is 0
    expect(multiTypeArray[2]).toBe("two"); 
    // FIX: arr value at index 2 is "two"
    expect(multiTypeArray[3]()).toBe(3); 
    // FIX: arr value at index 3 is a fcn, fcn has been called so value is 3 
    expect(multiTypeArray[4].value1).toBe(4);
    // FIX: obj at index4, using dot notation -- 4 is value stored at "value1"
    expect(multiTypeArray[4]["value2"]).toBe(5);
    // same concept as above; instead using bracket notation to access value
    expect(multiTypeArray[5][0]).toBe(6); 
    // subarray at index 5 -- accessing value at index 0 of subarray
  });

  it("should understand array literals", function () {
    var array = [];
    expect(array).toEqual([]);
    
    array[0] = 1;
    expect(array).toEqual([1]);
    
    array[1] = 2;
    expect(array).toEqual([1, 2]);
    // FIX (fill in): index 1 value set equal to 2
    
    array.push(3);
    expect(array).toEqual([1, 2, 3]);
    // FIX (fill in): push method used to assign index 3 a value of 3
  });

  it("should understand array length", function () {
    var fourNumberArray = [1, 2, 3, 4];

    expect(fourNumberArray.length).toBe(4); 
    // FIX (fill in): array length is 4
    fourNumberArray.push(5, 6);
    expect(fourNumberArray.length).toBe(6);
    // FIX (fill in): two values pushed to array--length increased by 2

    var tenEmptyElementArray = new Array(10); 
    expect(tenEmptyElementArray.length).toBe(10);
    // FIX (fill in): length of array is 10

    tenEmptyElementArray.length = 5;
    expect(tenEmptyElementArray.length).toBe(5);
    // FIX (fill in): empty array length shortened to 5
  });

  it("should slice arrays", function () {
    var array = ["peanut", "butter", "and", "jelly"];
    
    // slice method: 
    // copies portion of array, returns new array populated w/copied elements
    // note: first index inclusive, last index exclusive
    expect(array.slice(0, 1)).toEqual(["peanut"]);
    expect(array.slice(0, 2)).toEqual(["peanut", "butter"]);
    expect(array.slice(2, 2)).toEqual([]);
    expect(array.slice(2, 20)).toEqual(["and", "jelly"]);
    expect(array.slice(3, 0)).toEqual([]);
    expect(array.slice(3, 100)).toEqual(["jelly"]);
    expect(array.slice(5, 1)).toEqual([]);
  });

  it("should know array references", function () {
    var array = [ "zero", "one", "two", "three", "four", "five" ];

    function passedByReference(refArray) {
      refArray[1] = "changed in function";
    }
    passedByReference(array);
    expect(array[1]).toBe("changed in function");

    var assignedArray = array;
    assignedArray[5] = "changed in assignedArray";
    expect(array[5]).toBe("changed in assignedArray");

    var copyOfArray = array.slice();
    copyOfArray[3] = "changed in copyOfArray";
    expect(array[3]).toBe("three");
  });

  it("should push and pop", function () {
    var array = [1, 2];
    // push method appends array with new value
    array.push(3);

    expect(array).toEqual([1, 2, 3]);
    
    // pop method removes and retuns last element in array
    var poppedValue = array.pop();
    expect(poppedValue).toBe(3);
    expect(array).toEqual([1, 2]);
  });

  it("should know about shifting arrays", function () {
    var array = [1, 2];

    // unshift adds element to beginning of array
    array.unshift(3);
    expect(array).toEqual([3, 1, 2]);
    
    // shift method removes and returns first element in array
    var shiftedValue = array.shift();
    expect(shiftedValue).toEqual(3);
    expect(array).toEqual([1, 2]);
  });  
});
