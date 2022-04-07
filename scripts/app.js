const cityForm = document.querySelector('form');

const updateCity = async () => {
  console.log(city);
};

cityForm.addEventListener('submit', e => {
  e.preventDefault();//prevent default event
  
  const getCity = cityForm.city.value.trim(); //get city value

  cityForm.reset();

  updateCity(city);
});