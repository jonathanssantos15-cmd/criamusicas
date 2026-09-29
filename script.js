const musicas = [
    {
        titulo: "Música 1",
        artista: "Artista 1",
        arquivo: "musica1.mp3"
    },
    {
        titulo: "Música 2",
        artista: "Artista 2",
        arquivo: "musica2.mp3"
    },
    {
        titulo: "Música 3",
        artista: "Artista 3",
        arquivo: "musica3.mp3"
    }
];

let indice = 0;

function tocar(numero) {
    indice = numero;

    document.getElementById("titulo").textContent = musicas[indice].titulo;
    document.getElementById("artista").textContent = musicas[indice].artista;

    const audio = document.getElementById("audio");

    audio.src = musicas[indice].arquivo;
    audio.load();
    audio.play();
}

function proximo() {
    indice++;

    if (indice > 2) {
        indice = 0;
    }

    tocar(indice);
}

function anterior() {
    indice--;

    if (indice < 0) {
        indice = 2;
    }

    tocar(indice);
}