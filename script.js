function calculaSal(){
    //VARIAVEIS
    let sal=parseFloat(document.getElementById("salFunc").value);
    let per=parseFloat(document.getElementById("per").value);
    //CALCULA AUMENTO
    let result=document.getElementById("result").innerHTML=sal+(sal*(per/100));
}

function areaTriangulo(){
    //PEGA VALORES
    let base=parseFloat(document.getElementById("baseTri").value);
    let alt=parseFloat(document.getElementById("altTri").value);
    //EXIBE AREA
    let result=document.getElementById("area").value=(base*alt)/2;
}

function mediaPond(){
    //PEGA NOTA
    let nota1=parseFloat(document.getElementById("nota1").value);
    let nota2=parseFloat(document.getElementById("nota2").value);
    //EXIBE MEDIA
    let result=document.createElement("label");
    result.innerHTML="Média ponderada: " + (((nota1*0,3)+(nota2*0,7))/2);
    document.body.appendChild(result);
}

function idade(){
    //PEGA DATA
    let data=new Date(document.getElementById("dataNasc").value);
    let atual=new Date();
    //VARIÁVEIS
    let anos=(atual.getFullYear())-(data.getFullYear());
    let meses=(anos*12);
    let dias=(anos*365);
    let semanas=(anos*52);
    let horas=(anos*8766);
    let minutos=(anos*525960);
    let idCinq=(2050-data.getFullYear());

    let result=document.getElementById("resultIdade").innerHTML="Mensagens no Console! Aperte F12 ou Inspecionar.";
    //MENSAGENS NO CONSOLE
    console.log(`Você tem ${anos} anos.`);
    console.log(`Já viveu ${meses} meses.`);
    console.log(`Experienciou ${dias} dias.`);
    console.log(`Que somam ${semanas} semanas.`);
    console.log(`${horas} horas.`);
    console.log(`E ${minutos} minutos.`);
    console.log(`Em 2050, sua idade será ${idCinq} anos.`);
}

function consumoMedio(){
    //PEGA VALORES
    let km=parseFloat(document.getElementById("km").value);
    let lt=parseFloat(document.getElementById("lt").value);
    //EXIBE CONSUMO
    let result=document.createElement("p");
    result.innerHTML=`Consumo médio: ${(km/lt)} km/lt`;
    document.body.appendChild(result);
}

//CALCULA HORAS TRABALHADAS
function calculaHoras() {
    let horas=parseFloat(document.getElementById("horas").value);
    let refs=parseFloat(document.getElementById("refs").value);
    let desc=(refs*1.50);
    let bruto=0.0;
    let liquido=0.0;

    if (horas>40) {
        let extras=(horas-40.0)*24.00;
        bruto=((horas*8.0)+extras);
        liquido=bruto-desc;
        document.getElementById("mostraHoras").innerHTML=`O salário bruto é de R$${bruto}.<br>
            O valor das extras foi de R$${extras}.<br>
            O valor descontado foi de -R$${desc}.<br>
            O salário líquido é de R$${liquido}.<br>`;
    } else {
        bruto=((horas*8.0)-desc);
        liquido=bruto-desc;
        document.getElementById("mostraHoras").innerHTML=`O salário bruto é de R$${bruto}.<br>
            Não foram feitas horas extras.<br>
            O valor descontado foi de -R$${desc}.<br>
            O salário líquido é de R$${liquido}.<br>`;
    }

}

//GERAR NUMERO ALEATORIO
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function parOuImpar(){
    let num=getRandomIntInclusive(1,10);
    if (num%2==0){
        let result=document.getElementById("parOuImpar");
        result.innerHTML=`O número é ${num} e ele é par.`;

    } else {
        let result=document.getElementById("parOuImpar");
        result.innerHTML=`O número é ${num} e ele é ímpar.`;
        
    }
}