// URL DE LA API
const API = "https://gateway.marvel.com:443/v1/public/characters?limit=100&ts=1&apikey=b8593bfe5a018c0df579fed69d861c55&hash=4deeb1bf512b1161c42315a2900b233a";
const getData =(api) => {
    return fetch(api)
    .then((response) => response.json())
    .then((json)=>{
        llenarDatos(json.data) /*, favorito(json.results) */;
    })
    .catch ((error) =>{
        console.log("Error:", error)
       // alert("no se encontró la API Pokemon")
    })
}
const seleccion = [99];
const comprobar = document.getElementById('comprobar')
comprobar.addEventListener('click', (e)=>{
    e.preventDefault() 
    const textNumero = document.getElementById('mostrar').value
    seleccion.push(textNumero)
    getData(API);
}) 



const llenarDatos = (data) => {

    
    let html = " ";

    data.results.slice(0,seleccion.pop()).forEach((personajes) => {
        let imagenes = personajes.thumbnail.path+"."+personajes.thumbnail.extension;
        
        html += '<div class="col">';
        html += '<div class="card" style="width: 10rem;">';
        html+=  `<img src="${imagenes}" class="card-img-top" alt="...">`;
        html+=  '<div class="card-body">';
        html += `<h5 class="card-title">${personajes.name}</h5>`
        html += '</div>';
        html += '</div>';
        html += '</div>';
    }); 
    document.getElementById("datosPersonajes").innerHTML = html;
}
getData(API);
/* 
const favoritoArray = [1];
const favoritoButton = document.getElementById('favoritoButton')
favoritoButton.addEventListener('click', (e)=>{
    e.preventDefault() 
    const textFavorito = document.getElementById('favoritoInput').value
    favoritoArray.push(textFavorito)
    getData(API);
  }) 
const favorito = (results) =>{
    const elegido = favoritoArray.pop()-1 ;
    let html = " ";
    html += `<h5 class="card-title">${results[elegido].name}</h5>`
    html += `<img src="${imagenes}" class="card-img-top" alt="...">`;
    console.log(elegido);
    document.getElementById("favorito").innerHTML = html;
  
} 

 */





