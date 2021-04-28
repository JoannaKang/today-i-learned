const fetch = require('node-fetch');

const ALPHABETS = 'abcdefghihklnmopqrstubwxyz'

// by async await
// async function getRecipeByAlphabet () {
//   let recipes = [];
//   for (let i = 0; i < ALPHABETS.length; i++) {
//     let res = await fetch(`http://www.themealdb.com/api/json/v1/1/search.php?f=${ALPHABETS[i]}`);
//     const recipe = await res.json();
//     //console.log(recipe)
//     recipes.push(recipe);
//   }

//   return recipes;
// }

// getRecipeByAlphabet()
// .then((res) => console.log(res));

// by promise
// getRecipeByAlphabet();
// for (let i = 0; i < ALPHABETS.length; i++) {
//   fetch(`http://www.themealdb.com/api/json/v1/1/search.php?f=${ALPHABETS[i]}`)
//   .then((res) => {
//     res.json()
//     .then((json) => {
//       console.log(json)
//     })
//   });
// }


// promise
// function getWeatherByCity (city) {
//   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8eeb256097b74905d07244c6e174b458`)
//   .then(res => res.json())
//   .then(res => console.log(res))
  
// }

// getWeatherByCity('London');

// async

// async function getWeatherByCity(city) {
//   const info = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8eeb256097b74905d07244c6e174b458`);
//   // console.log(info)
//   return info.json()
// }

const cities = ['London', 'Seoul']

// async function getWeatherData () {
//   let data = [];
//   for (let i = 0; i < cities.length; i ++) {
//     const fetchResult = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=8eeb256097b74905d07244c6e174b458`)
//     const json = await fetchResult.json();
//     data.push(json);
//   }
//   return data;
// }

// getWeatherData()
// .then(res => console.log(res))



// const fetchAPI = () => {
//   return new Promise(getWeatherData)
// }

// const getWeatherData = (resolve, reject) => {
//   data = [];
//   for (let i = 0; i < cities.length; i ++) {
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=8eeb256097b74905d07244c6e174b458`)
//     .then(res => res.json())
//     .then(json => {
//       data.push(json);
//       if(data.length === cities.length) {
//         resolve(data);
//       }
//     })
//   }
// }

// fetchAPI().then(res => console.log(res))




// getWeatherByCity()
// .then(res => {
  //   info.push(res)
  //   console.log(info)
  // });


// async await
// async function getWeather() {
//   const info = []
//   for (let i = 0; i < cities.length; i++) {
//     await getWeatherByCity(cities[i])
//     .then(res => {
//       info.push(res)
//     })
//   }
//   return info;
// }

// getWeather()
// .then(res => console.log(res[0].main));

// const getFruit = async (name) => {
//   const fruits = {
//     pineapple: '🍍',
//     peach: '🍑 ',
//     strawberry: '🍓'  
//   }
//   return fruits[name]
// }

// getFruit('strawberry')
// .then(res => console.log(res));

// const makeSmoothie = async () => {
//   const a = getFruit('pineapple');
//   const b = getFruit('strawberry');
//   const smoothie = await Promise.all([a,b]);
//   return smoothie;
// }

// makeSmoothie().then(res => console.log(res))



// async function fetchApi () {
//   const weatherData = []

//   for (let i = 0; i < cities.length; i++) {
//     await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=8eeb256097b74905d07244c6e174b458`)
//     .then(res => res.json())
//     .then(json => weatherData.push(json))
//   }
  
//   return weatherData;
// }

// fetchApi()
//   .then(res => {
//     console.log(res[0].main)
//   })

// async function sayHello(name) {
//   return `Hello, ${name}`;
// }

// sayHello('Joanna')
//   .then(res => console.log(res))



fetch("http://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
      .then((res) => res.json())
      .then((res) => console.log(res));