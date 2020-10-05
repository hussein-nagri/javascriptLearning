

const json = `{ 
  { "home": "Toronto Raptors", "away": "Cleveland Cavaliers", "homeScore" : 99, awayScore: "winner": "Toronto Raptors" }, 
  { "home": "Denver Nuggets",  "away": "Miami heat", "winner": "Denver Nuggets"},
  { "home": "Toronto Raptors", "away": "Miami heat", "winner": "Miami heat" } 
}`

function parseResults(json) {

  const data = JSON.parse(json);
  let teamInformation = {};


  data.map(gameResult => {
    teamInformation[gameResult.winner].wins++;

    if (teamInformation[gameResult.winner] == gameResult.home) {
      teamInformation[gameResult.away].losses++;
    } else {
      teamInformation[gameResult.home].losses++;
    }
  });


  return teamInformation;
}

// -----


const json = `{ 
  { "home": "Toronto Raptors", "away": "Cleveland Cavaliers", "winner": "tie" }, 
  { "home": "Denver Nuggets",  "away": "Miami heat", "winner": "Denver Nuggets"},
  { "home": "Toronto Raptors", "away": "Miami heat", "winner": "Miami heat" },
  { "home": "Miami heat", "away": "Cleveland Cavaliers", "winner": "tie" }, 
  { "home": "Denver Nuggets",  "away": "Cleveland Cavaliers", "winner": "Denver Nuggets"},
  { "home": "Toronto Raptors", "away": "Denver Nuggets", "winner": "Toronto Raptors" }  
}`

function parseResults(json) {

  const data = JSON.parse(json);
  let teamInformation = {};


  data.map(gameResult => {

    if (teamInformation[gameResult.winner] == "tie") {
      teamInformation[gameResult.away].tie++;
      teamInformation[gameResult.home].tie++;
    }
    else if (teamInformation[gameResult.winner] == gameResult.home) {
      teamInformation[gameResult.away].losses++;
      teamInformation[gameResult.home].wins++;
    } else {
      teamInformation[gameResult.away].wins++;
      teamInformation[gameResult.home].losses++;
    }
  });


  return teamInformation;
}