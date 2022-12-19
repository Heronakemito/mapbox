
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY >75)
})

var tab=document.querySelectorAll(".bloc");
var fleche1=document.querySelector("#fleche_gauche");
var fleche2=document.querySelector("#fleche_droite");
var slide=document.querySelector(".slide");
var indice_element_active=0;
function augmenter(variable) {
    variable.style="z-index:2;transform:scale(1.2);width;calc(2*100%)";
}
function dimunier(variable) {
    variable.style="z-index:1;transform:scale(1)";
}
window.onload=()=>{
    augmenter(tab[indice_element_active]);
}
fleche1.onclick=()=>{
if (indice_element_active!=1) {
    diminuer(tab[indice_element_active]);
augmenter(tab[indice_element_active-1]);
slide.scrollBy(-210,0);
indice_element_active=indice_element_active-1;

}
}
fleche2.onclick=()=>{
    if (indice_element_active!=5) {
        diminuer(tab[indice_element_active]);
    augmenter(tab[indice_element_active+1]);
    slide.scrollBy(210,0);
    indice_element_active=indice_element_active+1;
    
    }
}