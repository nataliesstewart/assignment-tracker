var text;

document.body.onload = function() {
  browser.storage.sync.get("data", function(object) {
    if (!browser.runtime.error) text = object.data;
    else text = "";
    var backgroundColor;
    var foregroundColor;
    browser.storage.sync.get("backgroundColor", function(items){
        document.getElementById("html-body").style["backgroundColor"] = items.backgroundColor;
        document.getElementById("body").style["backgroundColor"]      = items.backgroundColor;
        document.getElementById("textArea").style["backgroundColor"]  = items.backgroundColor;
    });
    browser.storage.sync.get("foregroundColor", function(items){
        document.getElementById("html-body").style["color"] = items.foregroundColor;
        document.getElementById("body").style["color"]      = items.foregroundColor;
        document.getElementById("textArea").style["color"]  = items.foregroundColor;
    });
    document.getElementById("textArea").value = text;
  });

  window.setInterval(function() {
    if (text !== document.getElementById("textArea").value) {
      saveText();
      text = document.getElementById("textArea").value;
    }
  }, 3000);

  browser.storage.onChanged.addListener(function(changes, namespace) {
    for (key in changes) {
      var storageChange = changes[key];
      document.getElementById("textArea").value = storageChange.newValue;
    };
  });
};



var saveText = function() {
  text = document.getElementById("textArea").value;
  browser.storage.sync.set({ "data" : text }, function() {
    if (browser.runtime.error) console.log("Runtime error.");
  });
};
