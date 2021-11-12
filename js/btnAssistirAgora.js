
//Adiciona o Event Listner ao Botão Assistir e ao Botão Voltar No Painel Assistir Agora
const btnAssitir = document.getElementById('assitir_agora'); 

btnAssitir.addEventListener('click', () => {
    btnAssitir.disabled = true;
    
    handleAssitir();

    const btnVoltarInAssistir = document.getElementById('voltar');
    
    btnVoltarInAssistir.addEventListener('click', () => {
        handleVoltarPrincipal();
    });

});

//Cria o Frame com os episodios.
function handleAssitir(){
    
    const containerAssistir = document.createElement('div');
    containerAssistir.className = 'container-assistir';
    const header = document.querySelector('header');

    containerAssistir.innerHTML = `<div class="assistir">
    
    <h2>HOUSE OF CARDS</h2>
    <iframe id="frame_video" width="560" height="315" src="https://www.youtube.com/embed/8QnMmpfKWvo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
    <div class="episodios">
        <h3>Episodios</h3>
        <a href="" class="episodio" value="https://www.youtube.com/embed/8QnMmpfKWvo">01 - Pilot</a>
        <a href="" class="episodio">02 - Era uma vez o 2 Episodio</a>
        <a href="" class="episodio">03 - Era uma vez o 3 Episodio</a>
        <a href="" class="episodio">04 - Era uma vez o 4 Episodio</a>
        <a href="" class="episodio">05 - Era uma vez o 5 Episodio</a>
        <a href="" class="episodio">06 - Era uma vez o 6 Episodio</a>
        <a href="" class="episodio">07 - Era uma vez o 7 Episodio</a>
        <a href="" class="episodio">08 - Era uma vez o 8 Episodio</a>
        <a href="" class="episodio">09 - Era uma vez o 9 Episodio</a>
        <a href="" class="episodio">10 - Era uma vez o 10 Episodio</a>
    </div>
    <button id="voltar" class="botao">Voltar</button>
</div>`; 

    document.body.insertBefore(containerAssistir, header);
}

//Remove o Frame dos Episodios
function handleVoltarPrincipal(){
    
    const containerAssistir = document.getElementsByClassName('container-assistir');
    containerAssistir[0].remove();

    btnAssitir.disabled = false;   
}    