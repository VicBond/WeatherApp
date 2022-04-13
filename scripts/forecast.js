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
  async getWeather(id){
    const query = `${id}?apikey=${this.key}`;
  
    const response = await fetch(this.weatherURI + query);
    const data = await response.json();
  
    return data[0];
  }
};

