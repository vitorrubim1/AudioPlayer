window.player = {
    //PEGANDO OS ATRIBUTOS DO HTML
    cover: document.querySelector(".card-image"),
    title: document.querySelector(".card-content h5"),
    artist: document.querySelector(".artist"),
    audio: document.querySelector("audio"),

    //PEGANDO INFORMAÇÕES DO OBJETO DE DENTRO DO(data.js)
    audioData: audios,

    currentAudio: {},
    //PARA INFORMAR QUE O AUDIO INICIAL É O PRIMEIRO DO ARRAY
    currentPlaying: 0,

    start(){
        //SETANDO INFORMAÇÕES
        this.update();

        //QUANDO O AUDIO FINALIZAR, IR PARA O PRÓXIMO DA LISTA (onend) = ao acabar
        this.audio.onended = () => this.next();
    },
    //FUNCÃO DE AVANÇAR ÁUDIO
    next(){
        //ADICIONANDO MAIS UM, PARA AVANÇAR O ÁUDIO
        this.currentPlaying++;

        //SE TIVER TOCANDO O ÚLTIMO, RESTARTA
        if(this.currentPlaying == this.audioData.length) this.restart();

        this.update();
    },

    //FUNÇÃO DE ATUALIZAR DADOS DO PLAYER, IMAGEM, ARTISTA ETC..
    update(){
        //ALIMENTANDO COM INFORMAÇÕES
        this.currentAudio = this.audioData[this.currentPlaying];

        //MANIPULANDO O STYLE
        this.cover.style.background = `url('${path(
            this.currentAudio.cover)}') no-repeat center center / cover`;
        //INSERINDO TEXTO E AÚDIO
        this.title.innerText = this.currentAudio.title;
        this.artist.innerText = this.currentAudio.artist;
        this.audio.src = path(this.currentAudio.file);
    },

    //FUNÇÃO PARA VOLTAR PRO PRIMEIRO ÁUDIO
    restart(){
        this.currentPlaying = 0;
        this.update();
    },


};
    