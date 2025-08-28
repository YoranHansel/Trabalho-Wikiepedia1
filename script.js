const descricoes = [
    "A imagem é uma foto real do fenômeno da aurora boreal",
    "Nesta imagem podemos ver os animais caindo do céu como uma chuva e uma garota se protegendo com o guarda chuva.",
    "Na imagem mostra o relâmpago eterno do catatumbo, como podemos ver, há muitos raios caindo na região ao mesmo tempo.",
    "Aqui podemos observar a maré vermelha, onde a água está com a cor avermelhada.",
    "A imagem mostra uma água viva de regiões profundas brilhando, mostrando a bioluminescência."
];

const botoes = document.querySelectorAll(".botao");
 
botoes.forEach((botao, index) => {
    botao.addEventListener("click", () => {
        alert(descricoes[index]);
    });
});
