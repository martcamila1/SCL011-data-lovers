global.window = global;
global.assert = require('chai').assert;
require('../src/data/pokemon/pokemon.js');
require('../src/data.js');
require('./data.spec.js');  



describe('filterData.firstFilterCandy', ()=>{
  const sample = [
    {
    "name": "Bulbasaur",
    "candy_count": 25
    },
    {
    "name": "Pidgeotto",
    "candy_count": 50
  },
  {
    "name": "Magikarp",
    "candy_count": 400,
  },

  ]
describe('filterData.firstFilterCandy', () => {
  
  it('debería ser una función', () => { 
    assert.equal(typeof window.filterData.firstFilterCandy, 'function');
  });


  it('debería retornar objeto"Bulbasaur" para filtro "25 candy_count" ', () => {
  assert.deepEqual(window.filterData.firstFilterCandy(sample ,'25' ),[{"name": "Bulbasaur","candy_count": 25}]);
  });
  
})
 })

describe('filterData.secondFilterEggs', ()=>{
  const sample = [
    {
    "name": "Ekans",
    "egg": "5 km"
    },
    {
    "name": "Squirtle",
    "egg": "2 km"
  },
  {
    "name": "Onix",
    "egg": "10 km"
  },


describe('filterData.secondFilterEggs', () => {
  
  it('debería ser una función', () => { 
    assert.equal(typeof window.filterData.secondFilterEggs, 'function');
  });


  it('debería retornar objeto "Squirtle" para filtro "2 km" ', () => {
  assert.deepEqual(window.filterData.secondFilterEggs(sample ,'2 km' ),[{"name": "Squirtle","egg": "2 km"}]);
  });
  
})
] })

describe('filterData.thirdFilterType', ()=>{
  const sample = [
    {
    "name": "Ekans",
    "type": [ "Poison"]
    },
    {
      "name": "Squirtle",
      "type":  ["Water"]
  },
  

  ]
describe('filterData.thirdFilterType', () => {
  
  it('debería ser una función', () => { 
    assert.equal(typeof window.filterData.thirdFilterType, 'function');
  });


  it('debería retornar objeto"Squirtle" para filtro Water" ', () => {
  assert.deepEqual(window.filterData.thirdFilterType(sample ,'Water' ),[{"name": "Squirtle","type": ["Water"]}]);
  });
  
})
 })

 describe('order.sortData', ()=>{
  const sample = [
    {
    
    "id": 1,
    "name": "Bulbasaur",
    },
    {
     
     "id": 2,
     "name": "Ivysaur"
  },
{
     
       "id": 3,
       "name": "Venusaur"
    },

  ]
describe('order.sortData', () => {
  
  it('debería ser una función', () => { 
    assert.equal(typeof window.order.sortData, 'function');
  });

  it('debería retornar objeto "1 ,2 , 3", para ordenado pokedex 1-151 ', () => {
    assert.deepEqual(window.order.sortData(sample ,'1-151' ),[{"id": 1,"name": "Bulbasaur"},{"id": 2,"name": "Ivysaur"},{"id": 3,"name": "Venusaur"}]);
    });
  it('debería retornar objeto "3 ,2 , 1", para ordenado pokedex 151-1 ', () => {
  assert.deepEqual(window.order.sortData(sample ,'151-1' ),[{"id": 3,"name": "Venusaur"},{"id": 2,"name": "Ivysaur"},{"id": 1,"name": "Bulbasaur"}]);
  });
  it('debería retornar objeto "Bulbasaur ,Ivysaur , Venusaur", para ordenado A-Z ', () => {
    assert.deepEqual(window.order.sortData(sample ,'A-Z' ),[{"id": 1,"name": "Bulbasaur"},{"id": 2,"name": "Ivysaur"},{"id": 3,"name": "Venusaur"}]);
    });
    it('debería retornar objeto "Venusaur,Ivysaur ,Bulbasaur", para ordenado Z-A ', () => {
      assert.deepEqual(window.order.sortData(sample ,'Z-A' ),[{"id": 3,"name": "Venusaur"},{"id": 2,"name": "Ivysaur"},{"id": 1,"name": "Bulbasaur"}]);
      }); 
  
})
 })

 
 
describe('calcuData.computeStatswWeight', ()=>{
  const sample = [
    {
    "name": "Bulbasaur",
    "weight": "6.9 kg",
    },
    {
    "name": "Pidgeotto",
    "weight": "30.0 kg"
  },
  {
    "name": "Magikarp",
    "weight": "10.0 kg",
  },

  ]
describe('calcuData.computeStatswWeight', () => {
  
  it('debería ser una función', () => { 
    assert.equal(typeof window.calcuData.computeStatswWeight, 'function');
  });


  it('debería retornar 15.633333333333333 ', () => {
  assert.deepEqual(window.calcuData.computeStatswWeight(sample), 15.633333333333333);
  });
  
})
 })

 describe('calcuData.computeStats', ()=>{
  const sample = [
    {
    "name": "Bulbasaur",
    "height": "0.71 m",
    },
    {
    "name": "Pidgeotto",
    "height": "1.09 m",
  },
  {
    "name": "Magikarp",
    "height": "0.89 m",
  },

  ]
describe('calcuData.computeStats', () => {
  
  it('debería ser una función', () => { 
    assert.equal(typeof window.calcuData.computeStats, 'function');
  });


  it('debería retornar 0.89666666666666667 ', () => {
  assert.deepEqual(window.calcuData.computeStats(sample), 0.8966666666666666);
  });
  
})
 })