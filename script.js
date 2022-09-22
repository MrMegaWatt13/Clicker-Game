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

var prestigepoint = 0
function prestigepointClick(number){
     prestigepoint = prestigepoint + number;
    document.getElementById("prestigepoint").innerHTML = prestigepoint;
};

var prestige = 0;

function gonnaPrestige(){
    var prestigeCost= Math.floor(1000 * Math.pow(2.34,prestige));        
    if(click >= prestigeCost){                                                                  
        prestige = prestige + 1;                                                                       
        click = click - prestigeCost, 
        autoclicker = autoclicker - prestigeCost,
        autoclickerCost = autoclickerCost - prestigeCost,
        autoclickerII = autoclickerII - prestigeCost,
        autoclickerCost = autoclickerCost - prestigeCost,                                                      
        document.getElementById('prestige').innerHTML = prestige;    
        document.getElementById('click').innerHTML = click;            
    };
    var nextCost = Math.floor(1000 * Math.pow(2.34,prestige));       
    document.getElementById('prestigeCost').innerHTML = nextCost;
};

window.setInterval(function(){
    
    prestigepointClick(prestige);
    
}, 1000);

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
