const BTN = document.querySelector('button');
const CONTENT = document.querySelector('#content');

BTN.addEventListener('click', function (){
    
    CONTENT.textContent = "Hello World";
});

const $hour = document.querySelector('.hour')
const interval = setInterval(setHour, 1000)

function setHour(){
    // On toggle la classe red_bold
    $hour.classList.remove('red_bold')
    // On défini les variables dont on a besoin
    const date = new Date()
    const hour = date.toLocaleTimeString('fr')

    const seconds = date.getSeconds()
    if(seconds % 3 === 0){
        $hour.classList.add('red_bold')
    }

    $hour.innerHTML = hour
}


// 1 - Vérifier que cette chaine de caractère contient un caractére
// 2 - Définir les heures 
// 3 - Définir les minutes
// 4 - Définir les secondes 
// 5 - Vérifier le format heures, minutes et secondes
// 6 - Décomposer les heures, les minutes et les secondes
// 7 - convertir les heures, les minutes et les secondes
// 8 - Vérifier que les heures sont comprises entre 0 et 23
// 9 - Vérifier que les minutes sont comprises entre 0 et 59





 