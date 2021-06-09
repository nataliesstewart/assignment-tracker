// Saves options to browser.storage
function save_options() {
  var backgroundColor = document.getElementById('backgroundColor').value;
  var foregroundColor = document.getElementById('foregroundColor').value;
  var headerText = document.getElementById('headerText').value;
  browser.storage.sync.set({
    "backgroundColor" : backgroundColor,
    "foregroundColor" : foregroundColor,
    "headerText"      : headerText,
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function default_val(val, def) {
  if(val == "[object Object]")  return def;
  else                          return val;
}

// Restores select box and checkbox state using the preferences
// stored in browser.storage.
function restore_options() {
  browser.storage.sync.get({
    "backgroundColor" : backgroundColor,
    "foregroundColor" : foregroundColor,
    "headerText"      : headerText,
  }, function(items) {
    document.getElementById('backgroundColor').value  = default_val(items.backgroundColor, "#ffffff");
    document.getElementById('foregroundColor').value  = default_val(items.foregroundColor, "#000000");
    document.getElementById('headerText').value       = default_val(items.headerText,      "Assignment tracker++");
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
