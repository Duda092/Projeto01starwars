const data = [
    {
      "id": 1,
      "usuario": "carlos",
      "senha": "123456"
    },
    {
      "id": 2,
      "usuario": "igor",
      "senha": "654321"
    },
    {
      "id": 3,
      "usuario": "leticia",
      "senha": "123654"
    }
  ]
  

const btn = document.getElementById('login')
btn.addEventListener('click', (event)=>{
    event.preventDefault()

    const user = document.getElementById('user').value
    const password = document.getElementById('password').value

    const login = data.find((obj)=>obj.usuario === user && obj.senha === password)

    if(login) { 
        window.location.href = `../index.html`
    }
    else {
        alert('usuario não encontrado')
    }

})