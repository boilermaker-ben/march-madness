// CREATE MENU
// Run this script first to delete any existing triggers and set up a trigger to create the menu as well as auto-complete the entries based on Final Four picks and also update scoring once winners are entered.
function runFirst() {
  var id = SpreadsheetApp.getActiveSpreadsheet().getId();
  var triggers = ScriptApp.getProjectTriggers();
  for (var i = 0; i < triggers.length; i++) {
    ScriptApp.deleteTrigger(triggers[i]);
  }
  ScriptApp.newTrigger('createMenu')
    .forSpreadsheet(id)
    .onOpen()
    .create();
  ScriptApp.newTrigger('autoComplete')
    .forSpreadsheet(id)
    .onEdit()
    .create();
  ScriptApp.newTrigger('enterWinner')
    .forSpreadsheet(id)
    .onEdit()
    .create();
  addMenu();
}

// 2023 - Created by Ben Powers
// ben.powers.creative@gmail.com
