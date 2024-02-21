document.addEventListener('DOMContentLoaded', ()=>{
    const baseURL = "https://swapi.dev/api/people/"
    //  quando a varial é colocada no fecth ele faz a bsuca
    fetch(baseURL)
    .then((reponse)=>{
         if(!reponse.ok){
            throw new Error('Erro de rede! Código:'+reponse.status)
         }
         return reponse.json()
    })
    .then((data)=>{
        renderizarPersonagens(data)
        // console.log(data.results[0].name) // quando to pesquisando uso o Array
})
    .catch((err)=>console.log(err))
}) 

function renderizarPersonagens(items){
    const container = document.getElementById('personagem-container');
    items.results.forEach((item,index)=>{
    const divPersonagens = document.createElement('div')
    divPersonagens.innerHTML = `
     <div class="personagem-caixa">
           <img src="../Projeto/image/perso${index}.png">
           <div>
              <h3>${item.name}<h3>
           </div>
    </div>
    `;
    divPersonagens.addEventListener('click', ()=>{
        destalhesPersonagem(index)

    })
     divPersonagens.classList.add('personagem')
    container.appendChild(divPersonagens)
    })
    console.log(items)
}

function destalhesPersonagem(index){
    window.location.href = `./pages/person.html?index=${index}`
}
