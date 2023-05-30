// Remova os comentários a medida que for implementando as funções
const token = import.meta.env.VITE_TOKEN;

function extrairDados(retorno) {
  const temp = retorno.current.temp_c;
  const condition = retorno.current.condition.text;
  const { icon } = retorno.current.condition;

  return {
    temp,
    condition,
    icon,
  };
}

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
    return extrairDados(weatherData);
  } catch (error) {
    console.error(`Houve um erro ao obter os dados do clima 
    para a cidade ${cityURL}:`, error);
    throw error;
  }
}

export { searchCities, getWeatherByCity };
