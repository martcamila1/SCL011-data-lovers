
  //para filtrar por candy
  
  window.filterData={
    firstFilterCandy:(data, valueCandy) => {
     const dataFilterCandy = data.filter(element => {
     return element.candy_count == (valueCandy) 
     
      })
     
     return dataFilterCandy
     },
 
 //para filtrar por eggs
    secondFilterEggs:(data, valueEgg) => {
      const dataFilterEgg = data.filter(element => {
      return element.egg == (valueEgg) 
    
       })
   
      return dataFilterEgg
      },
      //para filtrar por Type
      thirdFilterType:(data,valueTypePokemon) =>{
        const dataFilterPokemonType= data.filter(element =>{
          return element.type.includes(valueTypePokemon) 
        })
 
        return dataFilterPokemonType;
      }
  }
 
    
  window.order={
  sortData:(data , sortOrder) =>{

 const ordenarPokemon = data.sort((pk1, pk2 ) => {
  
  if(sortOrder == "1-151" ){
    return (pk1.id < pk2.id) ? -1 : 1
 } 
  else if (sortOrder == "A-Z" )
 return (pk1.name < pk2.name) ? -1 : 1
 
 else if(sortOrder == "Z-A"){
  return (pk1.name > pk2.name) ? -1 : 1
 }
else  {
  return (pk1.id > pk2.id) ? -1 : 1
}
})


return ordenarPokemon
}}; 
  
  
   //funciona para calculos

   window.calcuData={
    computeStats:(data) => {
      const averageHeigh = data.map(element => {
        return parseFloat(element.height)})
        const acumHeigh = averageHeigh.reduce((acum, elemt) => acum + elemt, 0)
        let average =parseFloat(acumHeigh/averageHeigh.length) 
    
 
   return average;
   
   
    },
    

    computeStatswWeight:(data) => {
      const averageWeight = data.map(element => {
      return parseFloat(element.weight)})
      const acumWeight = averageWeight.reduce((acum, elemt) => acum + elemt, 0)
      let average =parseFloat(acumWeight/averageWeight.length) 
 
 
   return average;
   
   
    }
  }

  