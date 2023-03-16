// CREATE MENU
function addMenu() {
  var menu = SpreadsheetApp.getUi().createMenu('Bracket Tools')
   
  menu.addItem('Import Picks', 'submitAndClearBracket')
      .addSeparator()
      .addItem('Clear Bracket', 'clearBracket')
      .addToUi();
      
}

// 2023 - Created by Ben Powers
// ben.powers.creative@gmail.com
