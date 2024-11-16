function toggleMode(){
    const html = document.documentElement
    html.classList.toggle("Light")
  // if (html.classList.contains('Light'))   
 //{html.classList.remove('Light')} 
    // else  { html.classList.add('Light')}
   


    // pegar a tag img
    const img = document.querySelector("#profile img")

    // substituir a imagem 
    if(html.classList.contains("Light"))
    //  se  tiver ligth mode (claro), adicionar a imagem ligth
{ img.setAttribute("src", "./assets/avatar-rd-claro.png")
} else {
    //se tiver sem ligth mode (claro) manter a imagem normal.
    img.setAttribute("src", "./assets/avatar-rd.png")
}
   
}