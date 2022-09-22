var prestigepoint = 0
function prestigepointClick(number){
     prestigepoint = prestigepoint + number;
    document.getElementById("prestigepoint").innerHTML = prestigepoint;
};

var prestige = 0;

function gonnaPrestige(){
    var prestigeCost= Math.floor(1000 * Math.pow(1.34,prestige));        
    if(click >= prestigeCost){                                                                  
        prestige = prestige + 1;                                                                       
        click = click - prestigeCost,                                                      
        document.getElementById('prestige').innerHTML = prestige;    
        document.getElementById('click').innerHTML = click;            
    };
    var nextCost = Math.floor(1000 * Math.pow(1.34,prestige));       
    document.getElementById('prestigeCost').innerHTML = nextCost;
    ResetPrestige();
};

window.setInterval(function(){
    
    prestigepointClick(prestige);
    
}, 1000);

function ResetPrestige(){
   click = 0;
   autoclicker = 0;
   autoclickerCost = 10;
   autoclickerII = 0;
   autoclickerIICost = 150;
}
var click,autoclicker, autoclickerII, autoclickerCost, autoclickerIICost;
ResetPrestige();

var goldenautoclicker = 0;

function buyGoldenAutoClicker(){
    var goldenautoclickerCost= Math.floor(50 * Math.pow(1.15,goldenautoclicker));        
    if(prestigepoint >= goldenautoclickerCost){                                                                  
        goldenautoclicker = goldenautoclicker + 1;                                                                       
        prestigepoint = prestigepoint - goldenautoclickerCost,                                                         
        document.getElementById('goldenautoclicker').innerHTML = goldenautoclicker;    
        document.getElementById('prestigepoint').innerHTML = prestigepoint;            
    };
    var nextCost = Math.floor(50 * Math.pow(1.15,goldenautoclicker));       
    document.getElementById('goldenautoclickerCost').innerHTML = nextCost;
};

window.setInterval(function(){
    
    clicksClick(goldenautoclicker);
    
}, 100);
