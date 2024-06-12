//Les variables dont on a besoin

let sp, btn_start, btn_stop, t, ms, s, mn, h;

//fonction pour initialiser les variables quand la page se charge
window.onload = function(){
    sp = document.getElementsByTagName('span');
    btn_start = document.getElementById('start');
    btn_stop = document.getElementById('stop');
    t;
    ms = 0, s = 0, mn = 0, h = 0;
}

//mettre en place le compteur

function update_chrono(){
    ms+=1;
    if(ms == 10){
        ms = 1;
        s += 1;
    }
    if(s == 60){
        s = 0;
        mn += 1;
    }
    if(mn == 60){
        mn = 0;
        h =+ 1;
    }
    //insertion des valeurs dans les spans 
    //[0] permet de selectionner le premier span
    //[1] permet de selectionner le deuxième, etc...
    sp[0].innerHTML = h + "h";
    sp[1].innerHTML = mn + "min";
    sp[2].innerHTML = s + "s";
    sp[3].innerHTML = ms + "ms";
}

//mettre en place la fonction du bouton start

function start(){
    //cette ligne de code execute la function update_chrono() tous les 100 ms
    t = setInterval(update_chrono, 100) 
    btn_start.disabled = true;
}

// arrêter le chronomètre

function stop(){
    clearInterval(t); //suppression de l'interval t que nous avons créé
    btn_start.disabled = false;
}

// Initialiser les valeurs du compteur

function reset(){
    clearInterval(t);
    btn_start.disabled = false;
    ms = 0, s = 0, mn = 0, h = 0;
    //insérer ces nouvelles valeurs dans les spans
    sp[0].innerHTML = h + "h";
    sp[1].innerHTML = mn + "min";
    sp[2].innerHTML = s + "s";
    sp[3].innerHTML = ms + "ms";
}

/*Référence FaizDev https://www.youtube.com/watch?v=hNwGsyjfTL4&list=PLuMW20nBgcbpUuBu8DUMvBN3rXtHDHGGz&index=1*/