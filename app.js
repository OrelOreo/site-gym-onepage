const btns = document.querySelectorAll('.btn-modale');
const modaleEquipement = document.querySelector('.bloc-modale');
const fermetureModale = document.querySelector('.fermeture-modale');
const imgIndex = document.querySelector('.bloc-modale img');


// Si on est au dessus de 850px ça retourne true, dès qu'on est en dessous retourne false
// Donc au dessus de 850px on va pouvoir cliquer sur les images, en dessous de 850px on va plus pouvoir
if(window.matchMedia("(min-width: 850px)").matches) {
    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
    
            imgIndex.src = `ressources/img${e.target.getAttribute('data-index')}-equip.jpg`;
            modaleEquipement.classList.add('active-modale');
    
        })
    })
    
    modaleEquipement.addEventListener('click', () => {
        modaleEquipement.classList.remove('active-modale');
    })
}

// Anim nav

const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {

    if(window.scrollY > 30) {
        nav.classList.add('anim-nav')
    } else {
        nav.classList.remove('anim-nav')
    }

})