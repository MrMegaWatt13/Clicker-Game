var click = 0; 

function clicksClick(number){
    click = click + number;
    document.getElementById("click").innerHTML = click;
};

var autoclicker = 0;

function buyAutoClicker(){
    var autoclickerCost= Math.floor(10 * Math.pow(1.1,autoclicker));        
    if(click >= autoclickerCost){                                                                  
        autoclicker = autoclicker + 1;                                                                       
        click = click - autoclickerCost,                                                         
        document.getElementById('autoclicker').innerHTML = autoclicker;    
        document.getElementById('click').innerHTML = click;            
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,autoclicker));       
    document.getElementById('autoclickerCost').innerHTML = nextCost;
};

window.setInterval(function(){
    
    clicksClick(autoclicker); 
    
}, 1000);

var autoclickerII = 0;

function buyAutoClickerII(){
    var autoclickerIICost= Math.floor(150 * Math.pow(1.15,autoclickerII));        
    if(click >= autoclickerIICost){                                                                  
        autoclickerII = autoclickerII + 1;                                                                       
        click = click - autoclickerIICost,                                                         
        document.getElementById('autoclickerII').innerHTML = autoclickerII;    
        document.getElementById('click').innerHTML = click;            
    };
    var nextCost = Math.floor(150 * Math.pow(1.15,autoclickerII));       
    document.getElementById('autoclickerIICost').innerHTML = nextCost;
};

window.setInterval(function(){
    
    clicksClick(autoclickerII);
    
}, 333);

/*setTimeout(function(){
   window.location.reload(1);
}, 1000);*/

//save

function loadGame() {
    var savedGame = JSON.parse(localStorage.getItem("gameSave"));
    if (typeof savedGame.click !== "undefined") click = savedGame.click;
    if (typeof savedGame.prestigePoint !== "undefined") prestigePoint = savedGame.prestigePoint;
    if (typeof savedGame.divinityPoint !== "undefined") divinityPoint = savedGame.divinityPoint;
    if (typeof savedGame.lunarPoint !== "undefined") lunarPoint = savedGame.lunarPoint;
    if (typeof savedGame.autoclicker !== "undefined") autoclicker = savedGame.autoclicker;
    if (typeof savedGame.autoclickerCost !== "undefined") autoclickerCost = savedGame.autoclickerCost;
    if (typeof savedGame.autoclickerII !== "undefined") autoclickerII = savedGame.autoclickerII;
    if (typeof savedGame.autoclickerIICost !== "undefined") autoclickerIICost = savedGame.autoclickerIICost;
    if (typeof savedGame.goldenautoclicker !== "undefined") goldenautoclicker = savedGame.goldenautoclicker;
    if (typeof savedGame.goldenautoclickerCost !== "undefined") goldenautoclickerCost = savedGame.goldenautoclickerCost;
    if (typeof savedGame.prestige !== "undefined") prestige = savedGame.prestige;
    if (typeof savedGame.prestigeCost !== "undefined") prestigeCost = savedGame.prestigeCost;
    if (typeof savedGame.divinity !== "undefined") divinity = savedGame.divinity;
    if (typeof savedGame.divinityCost !== "undefined") divinityCost = savedGame.divinityCost;   
}

function saveGame() {
    var gameSave = {
        click: click,
        prestigePoint: prestigePoint,
        divinityPoint: divinityPoint,
        lunarPoint: lunarPoint,
        autoclicker: autoclicker,
        autoclickerCost: autoclickerCost,
        autoclickerII: autoclickerII,
        autoclickerCostII: autoclickerCostII, 
        goldenautoclicker: goldenautoclicker,
        goldenautoclickerCost: goldenautoclickerCost, 
        prestige: prestige,
        prestigeCost: prestigeCost,
        divinity: divinity,
        divinityCost: divinityCost
     };
     localStorage.setItem("gameSave", JSON.stringify(gameSave)); 
} 

window.onload = function(){ 
    loadGame();
    document.getElementById('click').innerHTML = click;    
    document.getElementById('prestigePoint').innerHTML = prestigePoint;
    document.getElementById('divinityPoint').innerHTML = divinityPoint;    
    document.getElementById('lunarPoint').innerHTML = lunarPoint;
    document.getElementById('autoclicker').innerHTML = autoclicker;    
    document.getElementById('autoclickerCost').innerHTML = autoclickerCost;
    document.getElementById('autoclickerII').innerHTML = autoclickerII;    
    document.getElementById('autoclickerIICost').innerHTML = autoclickerIICost;
    document.getElementById('goldenautoclicker').innerHTML = goldenautoclicker;    
    document.getElementById('goldenautoclickerCost').innerHTML = goldenautoclickerCost;
    document.getElementById('prestige').innerHTML = prestige;    
    document.getElementById('prestigeCost').innerHTML = prestigeCost;
    document.getElementById('divinity').innerHTML = divinity;    
    document.getElementById('divinityCost').innerHTML = divinityCost;
};

setInterval(function() {
    saveGame();
}, 1000);   
