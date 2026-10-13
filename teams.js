const STORAGE_KEY = 'sideline_assignment_teams_v1';
const DEFAULT_TEAMS = [
      { name: "Arsenal", city: "North London", sport: "Soccer", league: "Premier League", mark: "AFC", color: "#d82435" },
      { name: "Golden State Warriors", city: "San Francisco", sport: "Basketball", league: "NBA", mark: "GSW", color: "#244b9b" },
      { name: "New York Yankees", city: "The Bronx", sport: "Baseball", league: "MLB", mark: "NY", color: "#182b4b" },
      { name: "Barcelona", city: "Barcelona, Spain", sport: "Soccer", league: "La Liga", mark: "FCB", color: "#153b78" },
      { name: "Chicago Bulls", city: "Chicago, Illinois", sport: "Basketball", league: "NBA", mark: "CHI", color: "#c42b38" },
      { name: "Los Angeles Dodgers", city: "Los Angeles", sport: "Baseball", league: "MLB", mark: "LA", color: "#2671b9" },
      { name: "Liverpool", city: "Liverpool, England", sport: "Soccer", league: "Premier League", mark: "LFC", color: "#c92235" },
      { name: "Boston Celtics", city: "Boston, Massachusetts", sport: "Basketball", league: "NBA", mark: "BOS", color: "#176b49" },
      { name: "Seattle Mariners", city: "Seattle, Washington", sport: "Baseball", league: "MLB", mark: "SEA", color: "#155c5b" },
      { name: "Real Madrid", city: "Madrid, Spain", sport: "Soccer", league: "La Liga", mark: "RMA", color: "#647080" },
      { name: "New York Knicks", city: "New York City", sport: "Basketball", league: "NBA", mark: "NYK", color: "#e27132" },
      { name: "San Diego Padres", city: "San Diego, California", sport: "Baseball", league: "MLB", mark: "SD", color: "#70512e" }
    ];
function getTeams(){try{const raw=localStorage.getItem(STORAGE_KEY);const val=raw===null?DEFAULT_TEAMS:JSON.parse(raw);return Array.isArray(val)?val:DEFAULT_TEAMS}catch(e){return DEFAULT_TEAMS}}
function saveTeams(teams){localStorage.setItem(STORAGE_KEY,JSON.stringify(teams))}
function escapeHTML(value){return String(value).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]))}
