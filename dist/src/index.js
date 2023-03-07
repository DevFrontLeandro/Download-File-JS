const fileInput = document.querySelector("#inputUrl"),
downloadBtn = document.querySelector("#downloadBtn")

downloadBtn.addEventListener("click", e =>{
    e.preventDefault() //preventing form from submitting
    downloadBtn.innerText = "Instalando Arquivo"
    fetchFile(fileInput.value)
})

function fetchFile(url){
    //buscar arquivo e retornar a resposta como blob
    fetch(url).then(res => res.blob()).then(file => {
        // URL.createObjectURL cria um url do objeto passado
        let tempUrl = URL.createObjectURL(file)
        let aTag = document.createElement('a')
        aTag.href = tempUrl // Passando Tempurl como o valor href da tag <a>
        aTag.download = url.replace(/^.*[\\\/]/, '')
        //Passando ultimo nome do arquivo como valor de download de <a> Tag
        document.body.appendChild(aTag) //Adicionando <a> dentro do body
        aTag.click() // clicando em tag <a> Então o download do arquivo iniciara
        aTag.remove()// Removendo a tag <a> Uma vez que o arquivo baixou
        URL.revokeObjectURL(tempUrl) //removendo tempurl do documento
        downloadBtn.innerText = "Download do Arquivo"
    })
}

const buttonTheme = document.querySelector('#themeBtn').addEventListener('click', () =>{
    const changeTheme = document.getElementById('themeSwitcher')
    changeTheme.classList.toggle('dark')
})