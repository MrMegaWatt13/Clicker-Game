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


//CPS

setInterval(() => {
    if(started) {
        ms += 10;
        cps = Math.round(click / (ms / 1000));
        update();
}, 10)

var cps = 0;
var ms = 0;
var started = false;

function update() {
    document.getElementById("cps").innerhtml = "Your cps:" "+cps;
}

window.onclick = function(){
    if(!started)
    started = true;
    return;
}
