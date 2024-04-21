const apiKey = '57fd2b0235233e5bf4ab47ff911d0b88';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';


const locationInput = document.getElementById('search-box');
const searchButton = document.getElementById('search-button');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('weather-description');
const weathericon=document.getElementById('weather-icon');

searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
        fetchWeather(location);
    }
});

function fetchWeather(location) {
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(respo =>
             {
                if(respo.status==404){
                    document.querySelector(".weather-info").style.display="none";
                    alert("Invalid Location");
                   
                }
             const data=respo.json();
             
            return data;}
    )

        .then(data => {
            console.log(data);
            locationElement.textContent = data.name;    
            temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
            descriptionElement.textContent = data.weather[0].main;

            if(data.weather[0].main == "Clouds"){
                weathericon.src="clouds.png";
            }
            else if(data.weather[0].main == "Clear"){
                weathericon.src="clear.png";
            }
            else if(data.weather[0].main == "Rain"){
                weathericon.src="rain.png";
            }
            else if(data.weather[0].main == "Drizzle"){
                weathericon.src="drizzle.png";
            }
            else if(data.weather[0].main == "Mist"){
                weathericon.src="mist.png";
            }
            else if(data.weather[0].main == "Snow"){
                weathericon.src="snow.png";
            }

         document.querySelector(".weather-info").style.display="block";
            
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}







