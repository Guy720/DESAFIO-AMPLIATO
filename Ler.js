const urlParams = new URLSearchParams(Window.location);

console.log(window.location);

console.log(urlParams);

const nomeParam = urlParams.get("nome");
console.log(nomeParam);

const emailParam = urlParams.get("email");
console.log(emailParam);

const senhaParam = urlParams.get("senha");
console.log(senhaParam);

const idadeParam = urlParams.get("idade");
console.log(typeof idadeParam);

const masculinoParam = urlParams.get("masculino");
console.log(masculinoParam);

const femininoParam = urlParams.get("feminino");
console.log(femininoParam);

const outroParam = urlParams.get("outro");
console.log(outroParam);

const futebolParam = urlParams.get("futebol");
console.log(futebolParam);

const pipaParam = urlParams.get("pipa");
console.log(pipaParam);

const videogameParam = urlParams.get("videogame");
console.log(videogameParam);

const tipoParam = urlParams.get("tipo");
console.log(tipoParam);

const mensagemParam = urlParams.get("mensagem");
console.log(mensagemParam);

const undefinedParam = urlParams.get("carro");
console.log(undefinedParam);



   


