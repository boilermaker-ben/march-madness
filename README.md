# March Madness Google Sheet Template and Scripts
## Run your own group of March Madness picks among friends, family, or coworkers

-------------------------

**Welcome!** I've created a sheet that has an associated set of scripts to deposit picks once entered in a bracket format into a table for a group of individuals. The user would then be able to manually enter the actual winners from each round of the baskeball tournament and a tiebreaker. There is a sheet for customized weighting per round as well. 

# **A. Setup Instructions**

1. [Make a copy of this sheet](https://docs.google.com/spreadsheets/d/1CHypFdCeLU8C6dRzbg4fHUUezas_1TPtpveYhnKD8Ns/edit?usp=sharing)

2. **Select “Extensions” > “Apps Script”**

<p align="center">
<img src="https://benpowerscreative.com/wp-content/uploads/2023/03/googlesheets-picks-instructions01.png" width="600" alt="Apps Script Menu">
</p>

3. In the tab that opens, you should see a set of script files with a *.gs extension on the right pane (not shown in this image). **Ensure that ‘runFirst’ is the selected function** from the function dropdown

<p align="center">
<img src="https://benpowerscreative.com/wp-content/uploads/2023/03/googlesheets-picks-instructions04.png" width="770" alt="Select runFirst">
</p>

4. **Click “Run”** button to start initial setup

<p align="center">
<img src="https://benpowerscreative.com/wp-content/uploads/2023/03/googlesheets-picks-instructions05.png" width="770" alt="Run script">
</p>

5. After 5-10 seconds, a “Authorization required” box will appear, **click “Review permissions”**

<p align="center">
<img src="https://benpowerscreative.com/wp-content/uploads/2023/03/googlesheets-picks-instructions06.png" width="600" alt="Review Permissions">
</p>

6. **Select your preferred Google account** for managing the spreadsheet and form

<p align="center">
<img src="https://benpowerscreative.com/wp-content/uploads/2023/03/googlesheets-picks-instructions07.png" width="400" alt="Select Google Account">
</p>

7. "App isn't verified" pops up, **click “Advanced” on bottom left**

<p align="center">
<img src="https://benpowerscreative.com/wp-content/uploads/2023/03/googlesheets-picks-instructions08.png" width="400" alt="Advanced verification">
</p>

8. **Click “Go to March Madness Scripts (unsafe)”** on bottom left

<p align="center">
<img src="https://benpowerscreative.com/wp-content/uploads/2023/03/googlesheets-picks-instructions09.png" width="400" alt="Got to project (unsafe) prompt">
</p>

9. Review permissions, scroll down and **click “Allow”**

<p align="center">
<img src="https://benpowerscreative.com/wp-content/uploads/2023/03/googlesheets-picks-instructions10.png" width="400" alt="Allow script to run">
</p>

10. The initial script will run. It’s going to make a Google Form (image below of how I customized mine) and do a lot more. **Go back to the spreadsheet to answer prompts--and be patient.**

<p align="center">
<img src="https://benpowerscreative.com/wp-content/uploads/2023/03/googlesheets-picks-instructions11.png" width="600" alt="Form Template image">
</p>

11. You should now be ready to start running the march madness group. **More detailed usage below. Cheers!**

-------------------------

# **B. Usage**

The sheet is fairly simple to use, and mainly is just increasing the efficiency of entering brackets and the results of the tournament--with nice formatting.

1. Be sure to update the "BRACKET" tab with correct teams if this is a new year (currently done for 2023).

2. Add all participants to the "NAMES" tab to make their name selectable on the "ENTRIES" tab.

3. Adjust weighting of the tournament rounds as desired.

4. Begin entering brackets for members across the top of the "ENTRY BRACKET" sheet:
  a. Name
  b. Final Four teams
  c. Championship game teams
  d. Champion
  d. Tiebreaker
  
5. If you have the script enabled correctly, the Final Four teams should be pre-populated and you'll simply need to click through creating the rest of the bracket entry with the drop-down selection tool for each of the four regions.

6. Once the bracket is complete, go to the menu option at the top of the file called "Bracket Tools" and run "Import Picks". This script will pull the values from the sheet and deposit them in a row on the "ENTRIES" sheet for tabulation later. The script should prompt to clear the bracket for you, if not, run the "Clear Bracket" function from the "Bracket Tools" menu.

7. Repeat steps 4-6 for as many members as you have.

8. As winners are determined, enter their names in the "RESULTS BRACKET" sheet and they will be automatically populated across the top of the "ENTRIES" sheet and scoring will be applied, which can be viewed on the "OVERVIEW" sheet.

-------------------------

Feel free to ask me any questions or make suggestions for improvements!







