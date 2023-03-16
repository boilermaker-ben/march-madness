function autoComplete() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  if ( sheet.getName() == "ENTRY BRACKET" ) {
    var row = ss.getActiveCell().getRow();
    var col = ss.getActiveCell().getColumn();
    if ( (row == 2 || row == 3) && col > 3 && col < 16 && ss.getActiveCell().getDataValidation() != null ) {
      var team = ss.getActiveCell().getValue();
      var teams = ss.getRangeByName("TEAM_NAMES").getValues().flat();
      var teamSeeds = ss.getRangeByName("TEAM_SEEDS").getValues().flat();
      var teamRegions = ss.getRangeByName("TEAM_REGIONS").getValues().flat();
      var region = teamRegions[teams.indexOf(team)];
      var seed = teamSeeds[teams.indexOf(team)];
      
      var ui = SpreadsheetApp.getUi();
      var seedOrder = [1,16,8,9,5,12,4,13,6,11,3,14,7,10,2,15];
      var regionMap = [1,4,2,3];
      region = regionMap.indexOf(Number(region))+1;

      var match = Math.ceil((seedOrder.indexOf(Number(seed))+1)/2)
      var roundTwoIndices = [1,2,0,0,0,0,0,0,3,4,0,0,0,0,0,0,5,6,0,0,0,0,0,0,7,8];
      var roundTwoIndex = roundTwoIndices.indexOf(match);
      var range = ss.getRangeByName("Round2_"+region);
      var roundTwo = range.getValues();
      roundTwo[roundTwoIndex][0] = team;
      range.setValues(roundTwo);
      
      var match = Math.ceil(match/2);
      var roundThreeIndices = [1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,4];
      var roundThreeIndex = roundThreeIndices.indexOf(match);
      range = ss.getRangeByName("SweetSixteen"+region);
      var roundThree = range.getValues();
      roundThree[roundThreeIndex][0] = team;
      range.setValues(roundThree);

      var match = Math.ceil(match/2);
      var roundFourIndices = [1,2];
      var roundFourIndex = roundFourIndices.indexOf(match);
      range = ss.getRangeByName("EliteEight"+region);
      var roundFour = range.getValues();
      roundFour[roundFourIndex][0] = team;
      range.setValues(roundFour);
    }
  }  
}

// 2023 - Created by Ben Powers
// ben.powers.creative@gmail.com
