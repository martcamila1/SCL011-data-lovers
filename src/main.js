
fetch('https://raw.githubusercontent.com/martcamila1/SCL011-data-lovers/master/src/data/pokemon/pokemon.json')
.then(response => {
 return response.json()})
   
.then(data1 => {
  const data = (data1.pokemon);
  

document.getElementById("imagen-logo").addEventListener("click", () =>{
//document.getElementById("news-screen").style.display="none";
document.getElementById("home").style.display="block";
document.getElementById("listSelect").style.display="none";
document.getElementById("estadisticas-screen").style.display="none";
document.getElementById("root3").innerHTML="";
});

const container2 = document.getElementById("root3")
  document.getElementById("button-menu1").addEventListener("click", () =>{
    document.getElementById("home").style.display="none";
    document.getElementById("listSelect").style.display="none";
    document.getElementById("estadisticas-screen").style.display="none";
    document.getElementById("showPokemones").innerHTML="";
   container2.innerHTML=`<div id="news-screen" class="homescreen">
  <div class="box-article">
      <h4 class="title5">Noticias</h4>
          <a type="button" href="https://www.pokemon.com/el/noticias-pokemon/"  target="_blank" class="readmorebutton">Leer más</a> 
      <h2 class="newspk">Disfruta de todas las noticas de tus pokémon en un solo lugar <br>
      <br>
       Solo debes hacer click en “Leer más”</h2>
  </div>
  <div class="box-article">
      <h4 class="title5">Campañas en IFEMA de Pokémon</h4>
         <a type="button" href="https://pokemon.fandom.com/es/wiki/Evento_Pok%C3%A9mon" target="_blank"  class="readmorebutton">Leer más</a> 
         <h2 class="newspk"> Sabias que los eventos Pokémon son ferias que se celebran periódicamente en las que se reparten <br> Pokémon exclusivos o Pokémon legendarios que no se pueden conseguir en el juego.
         <br>
         <br>
         Para descubrir eso y mucho más haz click en “Leer más”</h2>   
      </div>
  <div class="box-article">
      <h4 class="title5">Actualizaciones</h4>
        <a type="button"  href="https://pokemongolive.com/es/post/" target="_blank" class="readmorebutton">Leer más</a>
     <h2 class="newspk">Revisa día a día las nuevas actualizaciones y eventos de Pokémon Go</h2>
  </div>

</div>`

})

// crear funcion para cartas en forma global
let cardsPokemonGo = (data) => {
  data.forEach(element =>
     {container.innerHTML += `<div>
                          <div class="cartPk">
                          <img class="imgPk" src = ${element.img}>
                            <div class="cartPk1">
                              <p id="pokeName"> ${element.name}</p>
                              <p id="pokedex"> # ${element.id}</p>
                              <p id="pokeHeigth"> Altura: ${element.height}</p>
                              <p id="pokeWeigth"> Peso: ${element.weight}</p>
                            </div>
                      </div>
                    </div>`
})}

const selects1 = document.getElementById("listSelect");
const containerFilters = document.getElementById("button-menu2");
containerFilters.addEventListener("click", ()=>{
    selects1.style.display = "block";
    document.getElementById("estadisticas-screen").style.display="none";
    document.getElementById("home").style.display="none";
    document.getElementById("root3").innerHTML="";
    cardsPokemonGo(data)
   
});

const statistics = document.getElementById("estadisticas-screen");
const containerStatistics = document.getElementById("button-menu3");
containerStatistics.addEventListener("click", ()=>{
    statistics.style.display = "block";
    document.getElementById("listSelect").style.display="none";
    document.getElementById("home").style.display="none";
    document.getElementById("showPokemones").innerHTML="";
    document.getElementById("root3").innerHTML="";
});

//const data = window.POKEMON.pokemon;
let container3 = document.getElementById("container2")

  const container = document.getElementById("showPokemones")
  const selectCandy  = document.getElementById("candy_count");

  selectCandy.addEventListener("change", () =>{
  let valueCandy = document.getElementById("candy_count").value
  let prindCandy = window.filterData.firstFilterCandy(data, valueCandy)
  let candyPercentage = (Math.round((prindCandy.length/151)*100));

//                  // imprimir resultados

document.getElementById("root3").innerHTML="";
document.getElementById("showPokemones").innerHTML="";
container3.innerHTML =  candyPercentage + " % de los Pokémons  evolucionan con " +  valueCandy + " caramelos " ; 
cardsPokemonGo(prindCandy)
// prindCandy.forEach(element => {
// container.innerHTML += `<div>
//                           <div class="cartPk">
//                               <img class="imgPk" src = ${element.img}>
//                                 <div class="cartPk1">
//                                   <p id="pokeName"> ${element.name}</p>
//                                   <p id="pokedex"> # ${element.id}</p>
//                                   <p id="pokeHeigth"> Altura: ${element.height}</p>
//                                   <p id="pokeWeigth"> Peso: ${element.weight}</p>
//                                 </div>
//                           </div>
//                         </div>`
//     });

  });
  
  
     const selectEgg  = document.getElementById("type_egg");
     selectEgg.addEventListener("change", () =>{
     let valueEgg = document.getElementById("type_egg").value    
    
     let prindEgg = window.filterData.secondFilterEggs(data, valueEgg)
     let eggPercentage = (Math.round((prindEgg.length/151)*100));
  
    //                  // imprimir resultados egss
   document.getElementById("showPokemones").innerHTML="";
   container3.innerHTML =  eggPercentage + " % de los Pokémons  aparecen en los huevos de  " +  valueEgg  ;
      prindEgg.forEach(element => {
        container.innerHTML += `<div>
                                      <div class="cartPk">
                                      <img src = ${element.img} class="imgPk">
                                      <div class="cartPk1">
                                      <p id="pokeName"> ${element.name}</p>
                                      <p id="pokedex"> # ${element.id}</p>
                                      <p id="pokeHeigth"> Altura: ${element.height}</p>
                                      <p id="pokeWeigth"> Peso: ${element.weight}</p>
                                     </div>
                                      </div>
                                      </div>
                                  `
  
          })})
  
      const selectTypePokemon  = document.getElementById("type_Pokemon");
      selectTypePokemon.addEventListener("change", () =>{
      let valueTypePokemon = document.getElementById("type_Pokemon").value
      
     let textCandy = selectTypePokemon.options[selectTypePokemon .selectedIndex].text
     let printPokemon = window.filterData.thirdFilterType(data, valueTypePokemon)
     let typePercentage = (Math.round((printPokemon.length/151)*100));
    //                  // imprimir resultados Type
    document.getElementById("showPokemones").innerHTML="";
    container3.innerHTML =  typePercentage + " % de los Pokémons  son tipo  " +  textCandy  ;
     printPokemon.forEach(element => {
        container.innerHTML += `<div>
                                      <div class="cartPk">
                                      <img src = ${element.img} class="imgPk">
                                      <div class="cartPk1">
                                      <p id="pokeName"> ${element.name}</p>
                                      <p id="pokedex"> # ${element.id}</p>
                                      <p id="pokeHeigth"> Altura: ${element.height}</p>
                                      <p id="pokeWeigth"> Peso: ${element.weight}</p>
                                     </div>
                                      </div>
                                      </div>
                                  `
  
          })})
  
       //Orden del filtro tipo 

       const orderPk  = document.getElementById("orden-pokedex");
       orderPk.addEventListener("change", () =>{
       document.getElementById("showPokemones").innerHTML=""; 
         
      let sortOrder= document.getElementById("orden-pokedex").value 
       let valueTypePokemon = document.getElementById("type_Pokemon").value
       let printPokemon = window.filterData.thirdFilterType(data, valueTypePokemon)
       let printOrder = window.order.sortData(printPokemon, sortOrder)
       cardsPokemonGo(printOrder)
       })

      
// Mostrar Funcion Calculo
const buttonHeight= document.getElementById("height")
const containerCalcu = document.getElementById("calculoresult");
buttonHeight.addEventListener("click", () => { 
const resultHeight = window.calcuData.computeStats(data) 

containerCalcu.innerHTML = '<p class="resultCalcu">'+" El promedio de altura de los 151 Pokémones de la Región de Kanto es " +  (resultHeight).toFixed(2).bold() + "mt"; '</p>'


});

//Calculo 2
const buttonWeight= document.getElementById("Weight")
buttonWeight.addEventListener("click", () => { 
const resultWeight = window.calcuData.computeStatswWeight(data) 


containerCalcu.innerHTML = '<p class="resultCalcu">'+" El promedio de peso de los 151 Pokémones de la Región de Kanto es " +  (resultWeight).toFixed(2).bold() + "kg"; '</p>'

});

})
.catch(err =>(err))