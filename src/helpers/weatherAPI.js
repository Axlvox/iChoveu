const token = import.meta.env.VITE_TOKEN;

// Remova os comentários a medida que for implementando as funções

async function searchCities(term) {
  const link = `http://api.weatherapi.com/v1/search.json?lang=pt&key=${token}&q=${term}`;

  try {
    const response = await fetch(link);
    const cities = await response.json();

    if (cities.length === 0) {
      window.alert('Nenhuma cidade encontrada');
      return [];
    }

    console.log(cities);
    return cities;
  } catch (error) {
    console.error('Houve um erro na busca por cidades:', error);
    throw error;
  }
}

async function getWeatherByCity(cityURL) {
  const link = `http://api.weatherapi.com/v1/current.json?lang=pt&key=${token}&q=${cityURL}`;

  try {
    const response = await fetch(link);
    const weatherData = await response.json();
    const { name } = weatherData.location;
    const { country } = weatherData.location;
    const temp = weatherData.current.temp_c;
    const condition = weatherData.current.condition.text;
    const { icon } = weatherData.current.condition;
    const url = cityURL;
    return {
      name,
      country,
      temp,
      condition,
      icon,
      url,
    };
  } catch (error) {
    console.error(`Houve um erro ao obter os 
    dados do clima para a cidade ${cityURL}:`, error);
    throw error;
  }
}

export { searchCities, getWeatherByCity };
