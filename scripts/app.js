const cityForm = document.querySelector('form');

cityForm.addEventListener('submit', e => {
  e.preventDefault();//prevent default event
  
  const getCity = cityForm.city.value.trim();

  cityForm.reset();
})