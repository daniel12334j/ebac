const obj = [
    {nomeAluno:  'Daniel', nota: 8},
    {nomeAluno:  'Lucas', nota:  10},
    {nomeAluno:  'Marina', nota: 5},
    {nomeAluno:  'Ruan', nota:   3},
    {nomeAluno:  'maria', nota:   7},
    {nomeAluno:  'leticia', nota:   2},
];

function notaMaior(){
for(let chave of obj){
    if(chave.nota >= 6){
        console.log(`aluno: ${chave.nomeAluno} , nota: ${chave.nota}`)
    }
}
};



notaMaior(obj)

