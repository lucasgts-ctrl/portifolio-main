function escrevendoLetra(){
    function ativaLetra(elemento){
        const arrayTexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrayTexto.forEach((letra, i) => {
            setTimeout(() => {
                elemento.innerHTML += letra;
            }, 75 * i);
        });
    }

    const titulo = document.querySelector('.digitando');
    if (titulo){
        ativaLetra(titulo);
    }
}
window.onload = function (){
    escrevendoLetra();
};
const AtivaMenu = document.querySelector('.fa-bars');

AtivaMenu.addEventListener('click', () => {
    AtivaMenu.classList.toggle('fa-bars');
    AtivaMenu.classList.toggle('fa-x');
});