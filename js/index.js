var Teams = [
"Seahawks", "Patriots", "NY Giants", "LA Rams", "Dallas Cowboys", 
"Philly Eagles", "Cleavland Brown", "Colts", "SD Chargers", "Oakland Raiders",
"Chicago Bears", "GB Packers", "Detroit Lions", "Pitt Steelers", "Houston Texans",
"SF 49ers", "Jacksonville Jaguars", "Wasinghton Redskins", "Carolina Panthers",
"Minn Vikings", "Baltimore Ravens", "NYJ", "Cinn Bengals", "Miami Dolphins", "Buff Bills",
"Ari Cardinals", "Tampa Bucs", "Atlanta Falcons", "KC Chiefs", "NO Saints", "Tenn Titans", "Denver Broncos"
];


var teamNumber;
var teamNumber2;
var team1Score;
var team2Score;
var userwins = 0;
var userloses = 0;
var userchoice;
var winingteam;

function seeteam(){
	teamNumber = Math.floor(Math.random()*Teams.length);
	teamNumber2 = Math.floor(Math.random()*Teams.length);
	document.getElementById("FootballTeams").innerHTML =  
	Images[teamNumber]+Teams[teamNumber]+" vs. "+Images[teamNumber2]+Teams[teamNumber2];
}



function seescore(){
	var team1Score = Math.floor(Math.random()*70);
	var team2Score = Math.floor(Math.random()*70);
    document.getElementById('FootballTeams').innerHTML = Teams[teamNumber] + ": " + team1Score + " vs. " +Teams[teamNumber2] + ": " + team2Score;

	if (team1Score > team2Score) {
		document.getElementById('winner').innerHTML = Teams[teamNumber] + " wins";
		if (teamNumber==userchoice){
			document.getElementById("You guessed right.");
			userwins++;
			document.getElementById("You have won ")+userwins+" times.";
		}
		 else {
		 	document.getElementById("you guessed wrong.");
			userloses++;
			document.getElementById("You have lost ")+userloses+" times.";

		}
	}
	if (team2Score > team1Score) {
		document.getElementById('winner').innerHTML = Teams[teamNumber2] + " wins"

	}
}

function guessOne(){
	 userchoice = teamNumber 
} 
function guessTwo(){
	userchoice = teamNumber2
}
