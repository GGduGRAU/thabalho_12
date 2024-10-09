let hero = {
    name: "Valente",
    vida: 100,
    forca: 15,
    recurso: 50,
    magia: 20,
};

function start() {
    console.log(`Bem-vindo à aventura, ${hero.name}!`);
    console.log(`Vida: ${hero.vida}, Força: ${hero.forca}, Recurso: ${hero.recurso}, Magia: ${hero.magia}`);
    for (let i = 1; i <= 5; i++) { // 5 rodadas
        if (!round(i)) break; // Se o herói morrer, termina o jogo
    }
}

function round(roundNumber) {
    console.log(`\n--- Rodada ${roundNumber} ---`);
    
    let desafio = Math.floor(Math.random() * 3); // 0, 1 ou 2
    let resultado = "";

    switch (desafio) {
        case 0:
            resultado = lutar();
            break;
        case 1:
            resultado = encontrarTesouro();
            break;
        case 2:
            resultado = encontrarPocao();
            break;
    }

    console.log(resultado);
    console.log(`Status: Vida: ${hero.vida}, Força: ${hero.forca}, Recurso: ${hero.recurso}, Magia: ${hero.magia}`);

    // Verifica se o herói ainda está vivo
    if (hero.vida <= 0) {
        console.log("Você foi derrotado! Fim do jogo.");
        return false; // Para o jogo se o herói morreu
    }
    return true; // Continua o jogo
}

function lutar() {
    let inimigoVida = Math.floor(Math.random() * 50) + 30; // Vida do inimigo entre 30 e 80
    console.log(`Você encontrou um inimigo com ${inimigoVida} de vida!`);
    
    while (inimigoVida > 0 && hero.vida > 0) {
        inimigoVida -= hero.forca;
        hero.vida -= Math.floor(Math.random() * 10); // Inimigo ataca

        console.log(`Você atacou o inimigo! Vida do inimigo: ${inimigoVida}`);
        console.log(`O inimigo atacou! Sua vida: ${hero.vida}`);
    }

    return inimigoVida <= 0 ? "Você derrotou o inimigo!" : "Você foi derrotado pelo inimigo!";
}

function encontrarTesouro() {
    let tesouro = Math.floor(Math.random() * 50) + 10; // Tesouro entre 10 e 60
    hero.recurso += tesouro;
    return `Você encontrou um tesouro de ${tesouro}! Recursos totais: ${hero.recurso}`;
}

function encontrarPocao() {
    let pocao = Math.floor(Math.random() * 20) + 5; // Pocão entre 5 e 25
    hero.vida = Math.min(hero.vida + pocao, 100); // Limite máximo de vida
    return `Você encontrou uma poção mágica que recupera ${pocao} de vida! Sua vida total: ${hero.vida}`;
}

// Para iniciar o jogo, use o comando no console:
// start()
