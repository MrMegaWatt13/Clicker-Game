//1
//2
//3
function update(){

   document.getElementById("click").innerHTML = click;
   document.getElementById("clicksMultiplier").innerHTML = clicksMultiplier;
   document.getElementById("autoclicker").innerHTML = autoclicker;
   document.getElementById("autoclickerII").innerHTML = autoclickerII;
   document.getElementById("autoclickerIICost").innerHTML = autoclickerIICost;
   document.getElementById("autoclickerIII").innerHTML = autoclickerIII;
   document.getElementById("autoclickerIIICost").innerHTML = autoclickerIIICost;
   document.getElementById("solidbuttons").innerHTML = solidbuttons;
   document.getElementById("solidbuttonsCost").innerHTML = solidbuttonsCost;
   document.getElementById("goldenautoclicker").innerHTML = goldenautoclicker;
   document.getElementById("goldenautoclickerCost").innerHTML = goldenautoclickerCost;
   document.getElementById("metalbuttons").innerHTML = metalbuttons;
   document.getElementById("metalbuttonsCost").innerHTML = metalbuttonsCost;
   document.getElementById("multipliedClicks").innerHTML = multipliedClicks;
   document.getElementById("multipliedClicksCost").innerHTML = multipliedClicksCost;

};

var clicksMultiplier = 1;

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

var autoclickerIII = 0;

function buyAutoClickerIII(){
    var autoclickerIIICost= Math.floor(1000 * Math.pow(1.2,autoclickerIII));        
    if(click >= autoclickerIIICost){                                                                  
        autoclickerIII = autoclickerIII + 1;                                                                       
        click = click - autoclickerIIICost,                                                         
        document.getElementById('autoclickerIII').innerHTML = autoclickerIII;    
        document.getElementById('click').innerHTML = click;            
    };
    var nextCost = Math.floor(1000 * Math.pow(1.2,autoclickerII));       
    document.getElementById('autoclickerIIICost').innerHTML = nextCost;
};

var solidbuttons = 0;

function buysolidbuttons(){
    var solidbuttonsCost= Math.floor(250 * Math.pow(1.15,solidbuttons));        
    if(click >= solidbuttonsCost){                                                                  
        solidbuttons = solidbuttons + 1; 
        ce = ce + 1;                                                                      
        click = click - solidbuttonsCost,                                                         
        document.getElementById('solidbuttons').innerHTML = solidbuttons;    
        document.getElementById('click').innerHTML = click;            
    };
    var nextCost = Math.floor(250 * Math.pow(1.15,solidbuttons));       
    document.getElementById('solidbuttonsCost').innerHTML = nextCost;
};


//PRESTIGE----------------------------------------------------------------------------------


var prestigepoint = 0;

function prestigepointClick(number){
    prestigepoint = prestigepoint + number;
    document.getElementById("prestigepoint").innerHTML = prestigepoint;
};

var prestige = 0;

function gonnaPrestige(){
    var prestigeCost= Math.floor(1000 * Math.pow(1.64,prestige));        
    if(click >= prestigeCost){                                                                  
        prestige = prestige + 1;                                                                       
        click = click - prestigeCost,                                                      
        document.getElementById('prestige').innerHTML = prestige;    
        document.getElementById('click').innerHTML = click;   
        ResetPrestige();         
    };
    var nextCost = Math.floor(1000 * Math.pow(1.64,prestige));       
    document.getElementById('prestigeCost').innerHTML = nextCost;
};


function ResetPrestige(){
   ce = 1;
   click = 0;
   autoclicker = 0;
   autoclickerCost = 10;
   autoclickerII = 0;
   autoclickerIICost = 150;
   solidbuttons = 0;
   solidbuttonsCosts = 250;
}
var ce, click, autoclicker, autoclickerII, autoclickerCost, autoclickerIICost, solidbuttons, solidbuttonsCost;
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

var metalbuttons = 0;

function buymetalbuttons(){
    var metalbuttonsCost= Math.floor(100 * Math.pow(1.25,metalbuttons));        
    if(prestigepoint >= metalbuttonsCost){                                                                  
        metalbuttons = metalbuttons + 1; 
        cep = cep + 5;                                                                      
        prestigepoint = prestigepoint - metalbuttonsCost,                                                         
        document.getElementById('metalbuttons').innerHTML = metalbuttons;    
        document.getElementById('prestigepoint').innerHTML = prestigepoint;            
    };
    var nextCost = Math.floor(100 * Math.pow(1.25,metalbuttons));       
    document.getElementById('metalbuttonsCost').innerHTML = nextCost;
};

var multipliedClicks = 0;

function buymultipliedClicks(){
    var multipliedClicksCost= Math.floor(200 * Math.pow(1.89,multipliedClicks));        
    if(prestigepoint >= multipliedClicksCost){                                                                  
        multipliedClicks = multipliedClicks + 1; 
        clicksMultiplier = clicksMultiplier + 0.2;                                                                     
        prestigepoint = prestigepoint - multipliedClicksCost,                                                         
        document.getElementById('multipliedClicks').innerHTML = multipliedClicks;    
        document.getElementById('prestigepoint').innerHTML = prestigepoint;            
    };
    var nextCost = Math.floor(200 * Math.pow(1.89,refinedautoclicker));       
    document.getElementById('multipliedClicksCost').innerHTML = nextCost;
};


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
   ce = 1;
   cep = 0;
   click = 0;
   autoclicker = 0;
   autoclickerCost = 10;
   autoclickerII = 0;
   autoclickerIICost = 150;
   solidbuttons = 0;
   solidbuttonsCost = 250;
   goldenautoclicker = 0;
   goldenautoclickerCost = 50;
   metalbuttons = 0;
   metalbuttonsCost = 100;
   refinedautoclicker = 0;
   refinedautoclickerCost = 100;
   prestigepoint = 0;
   prestige = 0;
   prestigeCost = 1000;
}
var ce, cep, click, autoclicker, autoclickerII, autoclickerCost, autoclickerIICost, solidbuttons, solidbuttonsCost, goldenautoclicker, goldenautoclickerCost, metalbuttons, metalbuttonsCost, prestigepoint, prestige, prestigeCost;
ResetDivinity();


//VORTEX----------------------------------------------------------------------------------


//ClickedButtonEffects----------------------------------------------------------------------------------

var cep = 0;

var ce = 0;

function cef(number){
    ce = ce + number;
};

function ceEffect(){   
    c();
}; 

function c(){

    clicksClick(ce);

    clicksClick(cep);

};

cef(1);


//Auto Effects----------------------------------------------------------------------------------

//clicks

window.setInterval(function(){
    
    click = click + autoclicker*1*clicksMultiplier;
    click = click + autoclickerII*3*clicksMultiplier; 
    click = click + autoclickerIII*10*clicksMultiplier;
    click = click + goldenautoclicker*10*clicksMultiplier; 
  //click = click + divinityclicker*25*clicksMultiplier;
  //click = click + darkclicker*100*clicksMultiplier; 
    update();   
 
}, 1000);

//prestige

window.setInterval.(function(){
    
    prestigepoint = prestigepoint + prestige*1;
    
}, 1000);

//divinity

/*window.setInterval.(function(){

}, 1000);*/
