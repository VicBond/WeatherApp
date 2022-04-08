const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');

const updateUI = data => {
  const cityData = data.cityData;
  const weatherData = data.weatherData;

  details.innerHTML = `
    <h5 class="my-3">${cityData.EnglishName}</h5>
      <div class="my-3">${weatherData.WeatherText}</div>
        <div class="display-4 my-4">
          <span>${weatherData.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
    </div>
  `;
};

const updateCity = async (city) => {
  // console.log(city);
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
});