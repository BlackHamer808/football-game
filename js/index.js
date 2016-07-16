var Teams = [
"<img src=../assets/SEahwks.jpg> Seahawks", 
"<img src=../assets/Pats.jpeg> Patriots", 
"<img src=../assets/Giants.jpeg> NY Giants",
"<img src=../assets/Rams.jpg> LA Rams", 
"<img src=../assets/Cowboys.jpg> Dallas Cowboys", 
"<img src=../assets/Eagles.jpeg> Philly Eagles", 
"<img src=../assets/Browns.jpeg> Cleavland Brown", 
"<img src=../assets/Colts.jpg Colts", 
"<img src=../assets/SD Chargers", 
"<img src=../assets/Oakland Raiders",
"<img src=../assets/Chicago Bears", 
"<img src=../assets/GB Packers", 
"<img src=../assets/Detroit Lions", 
"<img src=../assets/Pitt Steelers", 
"<img src=../assets/Houston Texans",
"<img src=../assets/SF 49ers", 
"<img src=../assets/<img src=../assets/<img src=../assets/Jacksonville Jaguars", 
"<img src=../assets/<img src=../assets/Wasinghton Redskins", 
"<img src=../assets/Carolina Panthers",
"Minn Vikings", 
"Baltimore Ravens", 
"NYJ", 
"Cinn Bengals", 
"Miami Dolphins", 
"Buff Bills",
"Ari Cardinals", 
"Tampa Bucs", 
"Atlanta Falcons", 
"KC Chiefs", 
"NO Saints", 
"Tenn Titans", 
"Denver Broncos"
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
	Teams[teamNumber]+ "vs." +Teams[teamNumber2];
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
