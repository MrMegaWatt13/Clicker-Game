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
        prestige = prestige - divinitiyCost,                                                      
        document.getElementById('divinity').innerHTML = divinity;    
        document.getElementById('prestige').innerHTML = prestige;            
    };
    var nextCost = Math.floor(5 * Math.pow(1.2,divinity));       
    document.getElementById('divinityCost').innerHTML = nextCost;
    ResetDivinity();
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
