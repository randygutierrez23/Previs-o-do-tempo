
let chave = 'cebcd482eda57fa9a6714c1c2ba91885'


function colocarNaTELa(dados) {

    console.log(dados)

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name 
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + '°C'
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector(".umidade").innerHTML =  "umidade  " + dados.main.humidity + '%'

    }


 



async function buscarCidade(cidade) {
    let dados = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cidade 
    +  '&appid=cebcd482eda57fa9a6714c1c2ba91885&units=metric',)
        .then((resposta) => resposta.json()) 

console.log(cidade)

colocarNaTELa(dados)

    }


    
   



function cliqueiNoBotao() {
    let cidade = document.querySelector('.input-cidade').value


    buscarCidade(cidade)
}


// 4e72577a175d2b63baa0f2273d6b97c3