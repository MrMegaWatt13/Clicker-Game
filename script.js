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

//ClickedButtonEffects & XP----------------------------------------------------------------------------------


var CBEffect = 0;

function StartUpCBE(number){
    CBEffect = CBEffect + number;
    document.getElementById("CBEffect").innerHTML = CBEffect;
};

var CBEffectXP = 0;

function StartUpCBEXP(number){
    CBEffectXP = CBEffectXP + number;
    document.getElementById("CBEffectXP").innerHTML = CBEffectXP;
};

var XP = 0;

function gainXP(number){
    XP = XP + number;
    document.getElementById("XP").innerHTML = XP;
};

var XPLVL = 0;

function gainXPLVL(number){
    XPLVL = XPLVL + number;
    document.getElementById("XPLVL").innerHTML = XPLVL;
};

function lvlxp() {
    var XPREQ= Math.floor(50 * Math.pow(1.2,XPLVL));
    if(XP >= XPREQ){
        XPLVL = XPLVL + 1;
        XP = XP - XPREQ,
        document.getElementById('XPLVL').innerHTML = XPLVL;    
        document.getElementById('XP').innerHTML = XP;          
    };
    var nextCost = Math.floor(50 * Math.pow(1.2,XPLVL));       
    document.getElementById('XPREQ').innerHTML = XPREQ;
};

window.setInterval(function(){
    
    lvlxp();
    
}, 10);

function CBE(){
    
    clicksClick(CBEffect);
    gainXP(CBEffectXP);
    
};

StartUpCBE(1);
StartUpCBEXP(1);

window.setInterval(function(){
    
    clicksClick(XPLVL);
    
}, 1000);

window.setInterval(function(){
    
    prestigepointClick(XPLVL);
    
}, 10000);

window.setInterval(function(){
    
    divinityClick(XPLVL);
    
}, 100000);

//PRESTIGE----------------------------------------------------------------------------------


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
        ResetPrestige();         
    };
    var nextCost = Math.floor(1000 * Math.pow(1.34,prestige));       
    document.getElementById('prestigeCost').innerHTML = nextCost;
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


//DIVINITY & LUNAR----------------------------------------------------------------------------------


var divinityPoint = 0
function divinityClick(number){
     divinityPoint = divinityPoint + number;
    document.getElementById("divinityPoint").innerHTML = divinityPoint;
};
var lunarPoint = 0
function lunarClick(number){
     lunarPoint = lunarPoint + number;
    document.getElementById("lunarPoint").innerHTML = lunarPoint;
};

var divinity = 0;

function gonnaDivinity(){
    var divinityCost= Math.floor(5 * Math.pow(1.2,divinity));        
    if(prestige >= divinityCost){                                                                  
        divinity = divinity + 1;                                                                       
        prestige = prestige - divinityCost,                                                      
        document.getElementById('divinity').innerHTML = divinity;    
        document.getElementById('prestige').innerHTML = prestige;
        ResetDivinity();            
    };
    var nextCost = Math.floor(5 * Math.pow(1.2,divinity));       
    document.getElementById('divinityCost').innerHTML = nextCost;
};

window.setInterval(function(){
    
    divinityClick(divinity);
    
}, 2500);

function ResetDivinity(){
   click = 0;
   autoclicker = 0;
   autoclickerCost = 10;
   autoclickerII = 0;
   autoclickerIICost = 150;
   goldenautoclicker = 0;
   goldenautoclickerCost = 50;
   prestigepoint = 0;
   prestige = 0;
   prestigeCost = 1000;
}
var click,autoclicker, autoclickerII, autoclickerCost, autoclickerIICost, goldenautoclicker, goldenautoclickerCost, prestigepoint, prestige, prestigeCost;
ResetDivinity();


//VORTEX----------------------------------------------------------------------------------


//end----------------------------------------------------------------------------------
