//Adiciona o Event Listner ao Botão Mais Informações e ao Botão Voltar No Painel
const btnMaisInformacoes = document.getElementById('mais_informacoes'); 


btnMaisInformacoes.addEventListener('click', () => {

    btnMaisInformacoes.disabled = true;

    handleMaisinfor();

    const btnVoltarInMaisInformacoes = document.getElementById('voltarInInfor');
    
    btnVoltarInMaisInformacoes.addEventListener('click', () => {
        handleVoltarInfor();
    });

});

//Cria o Frame.
function handleMaisinfor(){
    
    const containerMaisInfor = document.createElement('div');
    containerMaisInfor.className = 'container-maisinfor';
    const header = document.querySelector('header');

    containerMaisInfor.innerHTML = `<div class="assistir">
    
    <h2>HOUSE OF CARDS</h2>
    <h3>Trailer</h3>
    <iframe id="frame_video" width="560" height="315" src="https://www.youtube.com/embed/8QnMmpfKWvo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
    <div class="prologo">
        <h3>Prólogo</h3>
        <p class="texto-prologo">
        A série começa com o congressista Francis Underwood a exibir o seu pragmatismo implacável ao matar um cão de estimação em sofrimento com as próprias mãos, enquanto explica ao público que existem momentos em que é necessário que alguém faça algo muito desagradável, mas extremamente necessário. Ao longo da temporada, seguimos Francis "Frank" Underwood, um congressista democrata da Carolina do Sul, sedento de poder, que após assegurar a eleição do presidente Garrett Walker, com o objetivo de vir a ser nomeado secretário de Estado, fica devastado por descobrir que está a ser preterido. A Chefe de Gabinete Linda Vasquez revela a Frank que o presidente quer que ele promova a sua agenda no Congresso e, por isso, não vai honrar o acordo. "A ferver por dentro", Frank controla a raiva e esconde a decepção, para se apresentar como um tenente útil para o presidente e a sua agenda. Contudo, na verdade, Frank Underwood inicia um plano elaborado "nas costas do presidente", com o objetivo final de ganhar poder para si mesmo.

A esposa de Frank, Claire, dirige uma ONG, denominada Clean Water Initiative (Iniciativa para Água Limpa), mas as suas intenções não são explícitas. Ela aparenta usar a organização para cultivar o seu próprio poder e influência, mas o seu objetivo final permanece desconhecido. No primeiro episódio, ela considera que a sua organização bem-sucedida tem um impacto muito limitado. Ávida pela notoriedade internacional, ela decide mudar o foco da sua organização para o apoio na criação de poços no estrangeiro. Esta opção é recebida com grande desconfiança pela funcionária responsável pelo escritório. Em seguida, Claire pede-lhe para demitir metade dos funcionários da organização e, no final do dia, informa-a que ela também está despedida. É óbvio, desde o início da série, que Claire partilha tanto o pragmatismo implacável como o desejo de poder, com o marido.

Underwood engendra um plano altamente complexo para obter uma posição no gabinete, através da aquisição de peões que ele pode manipular em favor do seu jogo de poder. Ele começa uma relação simbiótica e, também, sexual, com Zoe Barnes, uma jovem repórter política muito ambiciosa, e, em seguida, faz um acordo com ela: ela vai publicar histórias prejudiciais sobre os rivais políticos dele. Enquanto isso, ele manipula Peter Russo, um congressista conturbado da Pensilvânia, para o ajudar a minar a escolha de Walker para o cargo de secretário de Estado, o senador Michael Kern. Underwood consegue assim que Kern seja substituído pela sua escolha, a senadora Catherine Durant. Underwood também usa Russo num plano para acabar com uma greve de professores e passar uma lei de educação, o que melhora a sua posição junto do presidente Walker. 
        </p>
    </div>
    <button id="voltarInInfor" class="botao">Voltar</button>
</div>`; 

    document.body.insertBefore(containerMaisInfor, header);
}

//Remove o Frame
function handleVoltarInfor(){
    
    const containerMaisInfor = document.getElementsByClassName('container-maisinfor');
    containerMaisInfor[0].remove();

    btnMaisInformacoes.disabled = false;   
}    