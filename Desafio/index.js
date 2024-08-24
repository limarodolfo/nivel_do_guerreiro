let nome = ""
let nivelXp = 0

nome = prompt("Digite seu nome?")
nivelXp = prompt("Qual é o seu nível?")

let nivel;

switch (true){
    case nivelXp === 1000:
        nivel = "Seu nível é Ferro";
    break;

    case nivelXp >= 1001 && nivelXp <=  2000:
        nivel = "Seu nível é Bronze";
    break;

    case nivelXp >=  2001 && nivelXp <= 5000:
        nivel = "Seu nível é Prata";
    break;

    case nivelXp >= 5001 && nivelXp <= 7000:
        nivel = "Seu nível é ouro";
    break;

    case nivelXp >= 7001 && nivelXp <= 8000:
        nivel = "Seu nível é Platina";
    break;
    
    case nivelXp >= 8001 && nivelXp <= 9000:
        nivel = "Seu nível é Ascendente";
    break;

    case nivelXp >= 10001:
        nivel ="Seu nível é Imortal";
    break;
}

console.log("O Herói de nome "+ nome + " está no nível de " + nivel + " com " +nivelXp + "Xp.")