//numeros random
function GenerateRandom(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (1 + max - min) + min);
}

//enlistar numeros random
function ListRandom(list) {
    list = [3]
    for (i = 0; i < 3; i++) {
        list[i] = (GenerateRandom(0, 9));
    }

    return list;
}

//conversion a palabras
var arrayTxt1 = [
    "Sí tienes problemas, ",
    "Sí te sientes en conflicto con tus pensamientos, ",
    "Sí piensas que estas al limite, ",
    "Sí te sientes metido hasta el fondo del pozo, ",
    "Sí te fue un dia raro, ",
    "Sí crees que no vas a ningun lado, ",
    "Sí te sientes confundido, ",
    "Sí quieres llorar, ",
    "Sí desconfias de tu talento, ",
    "Sí te sientes como una contradiccion, "
]
var arrayTxt2 = [
    "eso significa que eres una persona normal, no te preocupes por eso, ",
    "eso significa que tal vez no estas en tus mejores dias, no te sientas mal solo por eso, ",
    "eso significa que necesitas un poco de ayuda, eso es normal para cualquiera, ",
    "eso significa que tienes un poco de trabajo personal, tomate tu tiempo, tu puedes, ",
    "eso significa que necesitas respirar y descansar, pero no dudes en dar un paso adelante a tu favor, ",
    "eso significa que debes confiar mas en ti, no dejar de tener esperanza, no te rindas, ",
    "eso significa que debes pensar en tu futuro, pero no te agobies, ya llegara, ",
    "eso significa que necesitas liberar ese peso, no te sobrecargues, ",
    "eso significa que debes buscar un poco de ayuda,eres fuerte pero esta bien no estar bien, ",
    "eso significa que debes pensar por un momento antes de actuar, piensa las cosas bien, "
]
var arrayTxt3 = [
    "Puedes hacer algo al respecto, encontraras la mejor solucion.",
    "deberias pensar en quien esta para ti, no estas solo y simepre contaras con quien te quiere.",
    "deberias calmarte y pensar en paz mereces ser feliz.",
    "toma la iniciativa de hacer lo que te llene.",
    "trata de dejar un poco la frustracion.",
    "cuidate mucho.",
    "deberias dejar de reprimirte.",
    "deberias darte un tiempo de reposo para tomar fuerzas por tu por venir, nunca estaras solo teniendote a ti y confio en ti.",
    "deberias hablar sobre lo que te pasa, esta bien.",
    "deberias ser tú, eso es lo que te hace unico.",
]

// cortinas
function prendercortina() {
    var cortina = document.getElementById("cortina");
    cortina.classList.add("active")
    setTimeout(() => {
        cortina.classList.remove("active")
        var elemento = document.getElementById("mydiv");
        elemento.style.display = "block";
    }, 2000);
}

// boton de start
let Lista = [3];
let returned;

document.getElementById("random").onclick = () => {
    returned = (ListRandom(Lista));




    var comp1 = returned[0]
    var comp2 = returned[1]
    var comp3 = returned[2]

    prendercortina();

    var elemento = document.getElementById("mydiv");
    elemento.style.display = "none";

    setTimeout(() => {

        document.getElementById("mydiv").innerHTML = arrayTxt1[comp1] + arrayTxt2[comp2] + arrayTxt3[comp3]

    }, 2000);



    document.getElementById("mydiv").innerHTML = " "

};

