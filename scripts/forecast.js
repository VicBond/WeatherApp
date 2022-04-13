class Forecast{
  constructor(){
    this.key = 'OX7vL2zfGwdCkO9znCWbrlHlH57bXGgD';
    this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
    this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  }
  async updateCity(city){
    const cityData = await this.getCity(city);
    const weatherData = await this.getWeather(cityData.Key);
  
    return { cityData, weatherData };
  }
  async getCity(city){
    const query = `?apikey=${this.key}&q=${city}`;
  
    const response = await fetch(this.cityURI + query);
    const data = await response.json();
  
    return data[0];
  }
}

const key = 'OX7vL2zfGwdCkO9znCWbrlHlH57bXGgD';

const getCity = async (city) => {


};

const getWeather = async (id) => {
  const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${id}?apikey=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();

  // console.log(data);
  return data[0];
};


