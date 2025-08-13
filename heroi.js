let nomeHeroi = "Lucas";
let pontosEXP = 10001;
let nivel;

switch(true){
    case pontosEXP<1000:
        nivel = "Ferro"
        break
    case pontosEXP<=2000:
        nivel = "Bronze"
        break
    case pontosEXP<=5000:
        nivel = "Prata"
        break
    case pontosEXP<=7000:
        nivel = "Ouro"
        break
    case pontosEXP<=8000:
        nivel = "Platina"
        break
    case pontosEXP<=9000:
        nivel = "Ascendente"
        break
    case pontosEXP<=10000:
        nivel = "Imortal"
        break
    case pontosEXP>10000:
        nivel = "Radiante"
        break

}
console.log("o Herói de nome "+ nomeHeroi +" está no nível de "+nivel )