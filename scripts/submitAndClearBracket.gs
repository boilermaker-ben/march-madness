function submitAndClearBracket() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var ui = SpreadsheetApp.getUi();

  var fillableSheet = ss.getSheetByName("ENTRY BRACKET");
  var entriesSheet = ss.getSheetByName("ENTRIES");

  var name = ss.getRangeByName('Name').getValue();
  if (name == null || name == '') {
    var nameCheck = ui.alert("No name provided, enter a name and try again.",ui.ButtonSet.OK);
  } else {
    var namedRanges = [
      'Name','Round2_1','Round2_2','Round2_3','Round2_4',
      'SweetSixteen1','SweetSixteen2','SweetSixteen3','SweetSixteen4',
      'EliteEight1','EliteEight2','EliteEight3','EliteEight4',
      'FinalFour1','FinalFour2','FinalFour3','FinalFour4','Championship1','Championship2','Champion','Tiebreaker'];
    
    var entryData = [];
    var rule;

    for (var a = 0; a < namedRanges.length; a++) {
      entryData = entryData.concat(ss.getRangeByName(namedRanges[a]).getValues().flat());
    }
    var valuesToKeep = [1, // Name
                        1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1, // Round2_1
                        1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1, // Round2_2
                        1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1, // Round2_3
                        1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1, // Round2_4
                        1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1, // SweetSixteen1
                        1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1, // SweetSixteen2
                        1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1, // SweetSixteen3
                        1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1, // SweetSixteen4
                        1,1,1,1,1,1,1,1, // EliteEight1, EliteEight2, EliteEight3, EliteEight4, 
                        1,1,1,1,1,1,1,1]; // FinalFour1, FinalFour2, FinalFour3, FinalFour4, Championship1, Championship2, Champion, Tiebreaker
    var count = 0;
    var finalEntry = [];
    for (a = 0; a <= valuesToKeep.length; a++) {
      if ( valuesToKeep[a] > 0 ) {
        finalEntry.push(entryData[a])
        if (entryData[a].length != '') {
          count++;
        }
      }
    }
    if (count != 65) {
      var check = ui.alert("Check entries, not all values entered for " + name + "\r\n\r\n Values Entered: " + count + " \r\nValues Needed: 65\r\n\r\nContinue?" ,ui.ButtonSet.YES_NO);
    } 
    if ( check == "YES" || count == 65 ) {
      var error = false;
      var roundNames = ['','Championship','Final Four','Elite Eight','Sweet Sixteen','Round Two'];
      var firstRound = ['Round1_1','Round1_2','Round1_3','Round1_4'];
      var secondRound = ['Round2_1','Round2_2','Round2_3','Round2_4'];
      var thirdRound = ['SweetSixteen1','SweetSixteen2','SweetSixteen3','SweetSixteen4'];
      var fourthRound = ['EliteEight1','EliteEight2','EliteEight3','EliteEight4'];
      var fifthRound = ['FinalFour1','FinalFour2','FinalFour3','FinalFour4'];
      var sixthRound = ['Championship1','Championship2']
      var seventhRound = ['Champion'];
      var rounds = [seventhRound,sixthRound,fifthRound,fourthRound,thirdRound,secondRound,firstRound];
      var thisRoundArr = [];
      var thisRoundArrTeams = [];
      var previousRoundArr = [];
      var previousRoundArrTeams = [];
      var regionMap = [1,4,2,3];
      ss.toast("Checking Champion");
      thisRoundArr = rounds[0][0];
      thisRoundArrTeams = ss.getRangeByName(thisRoundArr).getValues().flat()
      previousRoundArr = rounds[1][0];
      previousRoundArrTeams = ss.getRangeByName(previousRoundArr).getValues().flat();
      previousRoundArr = rounds[1][1];
      previousRoundArrTeams = previousRoundArrTeams.concat(ss.getRangeByName(previousRoundArr).getValues().flat());
      Logger.log("thisRoundArrTeams:" + thisRoundArrTeams)
      Logger.log("previousRoundArrTeams:" + previousRoundArrTeams)
      if (previousRoundArrTeams.indexOf(thisRoundArrTeams[0]) == -1) {
        ui.alert("Error with Champion team " + thisRoundArrTeams[0])
        error = true;
      }
      ss.toast("Checking Championship Teams");
      thisRoundArr = rounds[1][0];
      thisRoundArrTeams = ss.getRangeByName(thisRoundArr).getValues().flat()
      previousRoundArr = rounds[2][0];
      previousRoundArrTeams = ss.getRangeByName(previousRoundArr).getValues().flat();
      previousRoundArr = rounds[2][1];
      previousRoundArrTeams = previousRoundArrTeams.concat(ss.getRangeByName(previousRoundArr).getValues().flat());
      Logger.log("thisRoundArrTeams:" + thisRoundArrTeams)
      Logger.log("previousRoundArrTeams:" + previousRoundArrTeams)      
      if (previousRoundArrTeams.indexOf(thisRoundArrTeams[0]) == -1) {
        ui.alert("Error with Championship team " + thisRoundArrTeams[0])
        error = true;
      }
      thisRoundArr = rounds[1][1];
      thisRoundArrTeams = ss.getRangeByName(thisRoundArr).getValues().flat()
      previousRoundArr = rounds[2][2];
      previousRoundArrTeams = ss.getRangeByName(previousRoundArr).getValues().flat();
      previousRoundArr = rounds[2][3];
      previousRoundArrTeams = previousRoundArrTeams.concat(ss.getRangeByName(previousRoundArr).getValues().flat());
      Logger.log("thisRoundArrTeams:" + thisRoundArrTeams)
      Logger.log("previousRoundArrTeams:" + previousRoundArrTeams)      
      if (previousRoundArrTeams.indexOf(thisRoundArrTeams[0]) == -1) {
        ui.alert("Error with Championship team " + thisRoundArrTeams[0])
        error = true;
      }
      for (var regions = 0; regions < 4; regions++) {
        ss.toast("Checking Region " + regionMap[regions]);
        for (a = 2; a < (rounds.length-1); a++) { // need to perform one fewer iteration, as it offsets forward one element in the check process
          thisRoundArr = rounds[a][regions]
          Logger.log(thisRoundArr);
          thisRoundArrTeams = ss.getRangeByName(thisRoundArr).getValues().flat()
          Logger.log(thisRoundArrTeams);
          previousRoundArr = rounds[a+1][regions];
          Logger.log(previousRoundArr);
          previousRoundArrTeams = ss.getRangeByName(previousRoundArr).getValues().flat();
          Logger.log(previousRoundArrTeams);
          for (var b = 0; b < thisRoundArrTeams.length; b++) {
          Logger.log(thisRoundArrTeams[b] + ' and ' + previousRoundArrTeams);
            if (thisRoundArrTeams[b] != '' && thisRoundArrTeams[b] != null && previousRoundArrTeams.indexOf(thisRoundArrTeams[b]) == -1) {
              ui.alert("Error in region " + regionMap[regions] + ", in the " + roundNames[a] + " with " + thisRoundArrTeams[b])
              error = true;
            }
          }
        }
      }
      if ( error == true ) {
        ui.alert("Correct the picks that resulted in errors, then resubmit");
      } else {
        var confirm = ui.alert("All picks entered correctly.\r\n\r\nProceed with submission for " + name + "?",ui.ButtonSet.OK_CANCEL);
        if (check == "YES" || (count == 65 && confirm == "OK")) {
          try {
            var lastEntry = entriesSheet.getLastRow();
            var newEntry = entriesSheet.getRange(lastEntry + 1,1,1,65);
            newEntry.setValues([finalEntry]);
            var erase = ui.alert("Values copied successfully, clear entries?",ui.ButtonSet.YES_NO);
            if (erase == "YES") {
              for (a = 0; a < namedRanges.length; a++) {
                ss.getRangeByName(namedRanges[a]).clearContent();
                Logger.log(namedRanges[a]);
              }
            }
          }
          catch (e) {
            var ui = SpreadsheetApp.getUi();
            ui.alert('Error: ' + e ); 
            Logger.log(e);
          }
        }
      }
    }
  }
}

// 2023 - Created by Ben Powers
// ben.powers.creative@gmail.com
