const key = 'OX7vL2zfGwdCkO9znCWbrlHlH57bXGgD';

const city = async (city) => {
  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apiKey=${key}&q=${city}`;

  const response = await fetch(base + query);
  
};