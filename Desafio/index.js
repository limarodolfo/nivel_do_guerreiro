let heroName = "Chuck Norris "

for (let XPlevel = 0; XPlevel <= 10001; XPlevel++){

    console.log (XPlevel)

    switch (true){
        case XPlevel <= 1000:
            console.log("O herói de nome " + heroName + "está no nível de ferro")
            break
        
            case XPlevel >= 1001 && XPlevel <= 2000:
            console.log("O herói de nome " + heroName + "está no nível de bronze")
            break
        
            case XPlevel >= 2001 && XPlevel <= 5000:
            console.log("O herói de nome " + heroName + "está no nível de prata")
            break
        
            case XPlevel >= 5001 && XPlevel <= 7000:
            console.log("O herói de nome " + heroName + "está no nível de ouro")
            break
        
            case XPlevel >= 7001 && XPlevel <= 8000:
            console.log("O herói de nome " + heroName + "está no nível de platina")
            break
        
            case XPlevel >= 8001 && XPlevel <= 9000:
            console.log("O herói de nome " + heroName + "está no nível de ascendente")
            break
        
            case XPlevel >= 9001 && XPlevel <= 10000:
            console.log("O herói de nome " + heroName + "está no nível de imortal")
            break
        
            case XPlevel >= 10001:
            console.log("O herói de nome " + heroName + "está no nível de radiante")
            break
        }
    
}

