var trotteuse = document.querySelector(".trotteuse");
var minute = document.querySelector(".minute");
var heure = document.querySelector(".heure");

var date1 = document.querySelector(".Date"); 
var mois = document.querySelector(".Mois");
var jour = document.querySelector(".Jour");
var annee = document.querySelector(".Annee");

var affichage = document.querySelectorAll(".section");
var times=[];

var jours = ['DIM.','LUN.', 'MAR.', 'MER.', 'JEU.', 'VEN.', 'SAM.'];
var mois12 = ['JAN.','FEV.','MAR.','AVR.','MAI','JUIN','JUIL.','AOUT','SEPT.','OCT.','NOV.','DEC.'];


var c_heure, c_minute, c_seconde;
var angle_h, angle_m, angle_s;

var time_act = new Date();

var heure_actuelle = time_act.getHours();
var minute_actuelle = time_act.getMinutes();
var sec_actuelle = time_act.getSeconds();
var aujourdhui = time_act.getUTCDate();
var jour_aujourdhui = time_act.getUTCDay();
var mois_actuel = time_act.getMonth();

date1.innerText = aujourdhui;
jour.innerText = jours[jour_aujourdhui];
mois.innerText = mois12[mois_actuel];
annee.innerText = time_act.getFullYear();


setInterval(function(){
    angle_s = sec_actuelle*6;
    angle_m = minute_actuelle*6;
    angle_h = heure_actuelle*30;

    secondeAffiche = enleve60(sec_actuelle);
    minuteAffiche = enleve60(minute_actuelle);
    heureAffiche = enleve24(heure_actuelle);


    trotteuse.style.transform = "rotateZ("+angle_s+"deg)";
    minute.style.transform = "rotateZ("+angle_m+"deg)";
    heure.style.transform = "rotateZ("+(angle_h + minuteAffiche/2)+"deg)";
    

    times[0] = heureAffiche;
    times[1] = minuteAffiche;
    times[2] = secondeAffiche;
    

    for(i=0;i<3;i++){
        if(times[i]<10){
            affichage[i].innerText = '0'+times[i];
        }
        else{
            affichage[i].innerText = times[i];
        }
    }


    sec_actuelle++;
    if(sec_actuelle%60 == 0){
        minute_actuelle++;
	if(minute_actuelle%60 == 0){
        	heure_actuelle++;
    	}
    }
},1000)



function enleve60(x){
    while(x>=60){
        x-=60;
    }
    return x;
}
function enleve24(x){
    while(x>=24){
        x-=24;
    }
    return x;
}



