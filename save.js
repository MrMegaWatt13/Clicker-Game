var savegame = JSON.parse(localStorage.getItem("Clicker GameSave"))
if (savegame !== null) {
  gameData = savegame
}
var saveGameLoop = window.setInterval(function() {
  localStorage.setItem('Clicker GameSave', JSON.stringify(gameData))
}, 15000
