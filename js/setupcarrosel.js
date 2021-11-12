const carrosel = document.querySelector('.glider__slides');

new Glider(carrosel, {
    slidesToShow: 6, 
    slidesToScroll: 2, 
    draggable: true, //abilidade a possibilidade de click e arrastar
    dragVelocity: 1, //velocidade do movimento ao drag
    duration: 3, //velocidade de movimento
    rewind:true,//quando chegar no final do loop o proximo click joga para o inicio.
   //dots: ".glider-dots", //bolinhas para selecionar posicao do carrosel.
    arrows: {
      prev: ".prev",
      next: ".next",
    },
    
});

