// dados dos times
// ordenar os times em um array de forma aleatória
// mostrar a ordem sorteada por x segundos usando o array
// ocultar times mantendo o mesmo array
// mostrar um time aleatório pra ser encontrado e salvar na memória a posição desse time
// ao clicar em uma posição verificar se o elemento é o time certo


const times = [
    {
        nome: "Atlhetico Paranaense",
        src: "256x256/logo-atletico-paranaense-256.png"
    },
    {
        nome: "Avaí",
        src: "256x256/logo-avai-256.png"
    },
    {
        nome: "Brusque",
        src: "256x256/logo-brusque-256.png"
    },
    {
        nome: "Corinthias",
        src: "256x256/logo-corinthians-256.png"
    },
    {
        nome: "Flamengo",
        src: "256x256/logo-flamengo-256.png"
    },
    {
        nome: "Fluminense",
        src: "256x256/logo-fluminense-256.png"
    },
    {
        nome: "Fortaleza",
        src: "256x256/logo-fortaleza-256.png"
    },
    {
        nome: "Internacional",
        src: "256x256/logo-internacional-256.png"
    }
]

const container = document.getElementById("container-times")

const randomizarOrdem = () => {
    const listaPos = new Array()

    while (listaPos.length < 8) {
        getIndex()
    }

    function getIndex() {

        let index = Math.floor(Math.random() * (8 - 0) + 0)
     
        if (!listaPos.includes(times[index])){

            listaPos.push(times[index])

        }
        
    }
   
    mostrarTimes(listaPos)
    
}

const mostrarTimes = (listPos) => {

    listPos.forEach(({nome, src}) => {

        let img = document.createElement("img")
        img.src = src
        img.alt = nome
        img.classList.add("img-time") 
        container.appendChild(img)

    })


    setTimeout(() => {
        definirTime(listPos, container.childNodes)
    }, 3000)
    
    
}

const definirTime = (listPos, listHtml) => {
    const image = document.getElementById("image-main")

    const timeId = Math.floor(Math.random() * (8 - 0) + 0)

    image.src = listPos[timeId].src

    ocultarImagens(listHtml, listPos[timeId].nome)

}
    
    
const ocultarImagens = (listHtml, nome) => {
    
        let erros = 3
    
        listHtml.forEach((time) => {
            
            time.src = "oculta.jpeg"
            
        time.addEventListener("click", () => {
            
            times.forEach((e) => {
                if (e.nome == time.getAttribute("alt")){
                    time.src = e.src
                }
            })

            if (time.getAttribute("alt") == nome) {
                vitoria()
            }
            else{
                erros -= 1
            }

            if (erros < 1) {
                derrota()
            }

        })

    })

}

let game = true

const vitoria = () => {
    alert("Vitória")
    game = true
    clear()
}

const derrota = () => {
    alert("derrota")
    game = true
    clear()
}

document.querySelector("#start").addEventListener("click", () => {
    if (game){
        clear()
        randomizarOrdem()
    }
    else {
        alert("Jogo não acabou")
    }
    game = false
})

const clear = () => {

    document.getElementById("container-times").innerHTML = ""

}