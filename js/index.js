var Teams = ["Seahawks  ", "Patriots", "NY Giants", "LA Rams", "Dallas Cowboys", 
"Philly Eagles", "Cleavland Brown", "Colts", "SD Chargers", "Oakland Raiders",
"Chicago Bears", "GB Packers", "Detroit Lions", "Pitt Steelers", "Houston Texans",
"SF 49ers", "Jacksonville Jaguars", "Wasinghton Redskins", "Carolina Panthers",
"Minn Vikings", "Baltimore Ravens", "NYJ", "Cinn Bengals", "Miami Dolphins", "Buff Bills",
"Ari Cardinals", "Tampa Bucs", "Atlanta Falcons", "KC Chiefs", "NO Saints", "Tenn Titans", "Denver Broncos"]

var teamNumber;
var teamNumber2;
var team1Score;
var team2Score;
var userRecord = [];
 var userchoice;
var winingteam;
function seeteam(){
	teamNumber = Math.floor(Math.random()*Teams.length);
	teamNumber2 = Math.floor(Math.random()*Teams.length);
	document.getElementById("FootballTeams").innerHTML =  
	Teams[teamNumber]+" vs. "+Teams[teamNumber2];
}



function seescore(){
	var teamNumber = Math.floor(Math.random(0
	)*Teams.length);
	var teamNumber2 = Math.floor(Math.random()*Teams.length);
	var team1Score = Math.floor(Math.random()*70);
	var team2Score = Math.floor(Math.random()*70);
    	document.getElementById('FootballTeams').innerHTML = 
	Teams[teamNumber] + ": " + team1Score + " vs. " +
	Teams[teamNumber2] + ": " + team2Score;
}

function guessOne(){
	 userchoice = teamNumber  
} 
function guessTwo(){
	userchoice = teamNumber2
	
	if (team1Score > team2Score) {
		document.getElementById('winner').innerHTML = Teams[teamNumber] + " wins";
		if (teamNumber==userchoice){
			userRecord.push("win")
		}
		 else {
			userRecord.push("lose")
		}
	}
	if (team2Score > team1Score) {

		document.getElementById('winner').innerHTML = Teams[teamNumber2] + " wins";
	}
 	document.getElementById('FootballTeams').innerHTML =
 	 Teams[teamNumber] + ": " + team1Score + " vs. " + Teams[teamNumber2] + ": " + team2Score;


}