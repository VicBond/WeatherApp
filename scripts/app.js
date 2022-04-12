const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = data => {
  
  const { cityData, weatherData } = data;

  // update the weather data
  details.innerHTML = `
    <h5 class="my-3">${cityData.EnglishName}</h5>
      <div class="my-3">${weatherData.WeatherText}</div>
        <div class="display-4 my-4">
          <span>${weatherData.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
    </div>
  `;
  //update the day/night image and icon images
  const iconSrc = `img/icons/${weatherData.WeatherIcon}.svg`;
  icon.setAttribute('src', iconSrc);

  const timeSrc = weatherData.IsDayTime ? 'img/day.svg' : 'img/night.svg';

  
  time.setAttribute('src', timeSrc);

  //remove the d-none class if present
  if(card.classList.contains('d-none')){
    card.classList.remove('d-none');
  }

};


const updateCity = async (city) => {

  const cityData = await getCity(city);
  const weatherData = await getWeather(cityData.Key);

  return { cityData, weatherData };
};

cityForm.addEventListener('submit', e => {
  e.preventDefault();//prevent default event
  
  const city = cityForm.city.value.trim(); //get city value

  cityForm.reset();

  updateCity(city)//update ui with new city
    .then(data => {
      updateUI(data);
    })
    .catch(err => {
      console.log(err);
    });

  // set local storage

  localStorage.setItem('city', city)
});

if (localStorage.getItem('city')) {
  updateCity(localStorage.getItem('city'))
  .then(data => updateUI(data))
  .catch(err => console.log(err));
};