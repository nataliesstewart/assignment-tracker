var text;

document.body.onload = function() {
  chrome.storage.sync.get("data", function(object) {
    if (object.hasOwnProperty("data")) {
      text = object.data;
    }
    else text = "";
    
    var backgroundColor;
    var foregroundColor;
    var headerText;
    chrome.storage.sync.get("backgroundColor", function(items){
        document.getElementById("html-body").style["backgroundColor"] = items.backgroundColor;
        document.getElementById("body").style["backgroundColor"]      = items.backgroundColor;
        document.getElementById("textArea").style["backgroundColor"]  = items.backgroundColor;
    });
    chrome.storage.sync.get("foregroundColor", function(items){
        document.getElementById("html-body").style["color"] = items.foregroundColor;
        document.getElementById("body").style["color"]      = items.foregroundColor;
        document.getElementById("textArea").style["color"]  = items.foregroundColor;
    });
    chrome.storage.sync.get("headerText", function(items){
      if(items.hasOwnProperty("headerText"))
        document.getElementById("headerTitle").innerHTML = items.headerText;
    });
    
    document.getElementById("textArea").value = text;
    console.log("textarea updated:");
    console.log(text);
  });

  window.setInterval(function() {
    if (text !== document.getElementById("textArea").value) {
      saveText();
      text = document.getElementById("textArea").value;
    }
  }, 3000);

  chrome.storage.onChanged.addListener(function(changes, namespace) {
    for (key in changes) {
      var storageChange = changes[key];
      document.getElementById("textArea").value = storageChange.newValue;
    };
  });
};



var saveText = function() {
  text = document.getElementById("textArea").value;
  chrome.storage.sync.set({ "data" : text }, function() {
    if (chrome.runtime.error) console.log("Runtime error.");
  });
};
