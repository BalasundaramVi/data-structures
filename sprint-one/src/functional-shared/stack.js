var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.count = 0;
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.count++;
    this.storage[this.count] = value;
  },

  pop: function() {
    var popValue = this.storage[this.count];
    if (this.count !== 0) {
      this.count--;
    }
    return popValue;
  },
  size: function() {
    return this.count;
  }

};


