const api_URL="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const api_key="117c5c607fb985f32e68e3b477eda050";
const search=document.querySelector(".search input")
const btn=document.querySelector(".search-btn")
const icon=document.querySelector(".weatherIcon");

async function weather(city){
 const response=await fetch(api_URL + city + `&appid=${api_key}`);
 let data= await response.json();
console.log(data);

    document.querySelector(".degree").innerHTML=Math.round(data.main.temp)+  " °C"
    document.querySelector(".city").innerHTML=data.name
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%"
    document.querySelector(".windSpeed").innerHTML=data.wind.speed + " Km/h"

    if(data.weather[0].main=="Clouds")
    {
        icon.src="images/clouds.png";
    }
   else if(data.weather[0].main=="Drizzle")
    {
        icon.src="images/drizzle.png";
    }
    else if(data.weather[0].main=="Rain")
    {
        icon.src="images/rain.png";
    }
    else if(data.weather[0].main=="Snow")
    {
        icon.src="images/snow.png";
    }
    else if(data.weather[0].main=="Clear")
    {
        icon.src="images/clear.png";
    }


}



btn.addEventListener("click", ()=>{
    weather(search.value);
})
