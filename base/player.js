window.player = {
    //PEGANDO OS ATRIBUTOS DO HTML
    cover: document.querySelector(".card-image"),
    title: document.querySelector(".card-content h5"),
    artist: document.querySelector(".artist"),
    audio: document.querySelector("audio"),

    //ALIMENTANDO COM INFORMAÇÕES
    data: {
        title:
        "Como começei a programar / Por que criamos a Rocketseat / Nossa Stack",
        artist: "Diego Fernandes",
        cover: "files/como-comecei.jpg",
        file: "files/como-comecei.mp3"
    },
    
    start: function(){
        //MANIPULANDO O STYLE
        this.cover.style.background = `url('${this.data.cover}') no-repeat center center / cover`;
        //INSERINDO TEXTO E AÚDIO
        this.title.innerText = this.data.title;
        this.artist.innerText = this.data.artist;
        this.audio.src = this.data.file
    }
};
    