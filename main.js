//criando classe de abstração/objeto principal
function Esporte(time){
    this.time = time;
}

//criando classe/objeto herdeiro de esporte
function Futebol(time,mascote,tecnico){
    Esporte.call(this, time)
    this.mascote = mascote;
    this.tecnico = tecnico;
    
};

//criando classe/objeto herdeiro de esporte
function Basquete(time,titulosNba,tecnico){
    Esporte.call(this, time)
    this.titulosNba = titulosNba;
    this.tecnico = tecnico;

};

//criando instancias de Futebol
const time1 = new Futebol('palmeiras', 'porco', 'Abel Ferreira');
const time2 = new Futebol('flamengo', 'urubu', 'Tite');

//criando instancias de Basquete
const timeBasquete1 = new Basquete('Boston Celtics',17 ,'Joe Mazzulla');
const timeBasquete2 = new Basquete('Toronto Raptors',1 ,'Darko Rajakovic');

//testando
console.log(time1, time2);
console.log(timeBasquete1, timeBasquete2);

//resultado: funcionando