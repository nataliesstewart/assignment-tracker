/* global chrome */
var text;

function add(event) {
  if (event.selectionText) {
    alert("Added to Assignment Tracker: \n\n" + event.selectionText);

    chrome.storage.sync.get("data", function(object) {
      text = object.data;

      if (text === "undefined") newtext = event.selectionText;
      else newtext = event.selectionText + "\n\n" + text;

      chrome.storage.sync.set({ "data" : newtext }, function() {
      if (chrome.runtime.error) console.log("Runtime error.");
      });
    });
	};
};

browser.contextMenus.create({
  title :"Add to Assignment Tracker",
  contexts: [ "editable", "selection" ],
  onclick: add
});
