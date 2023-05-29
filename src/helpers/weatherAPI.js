// Remova os comentários a medida que for implementando as funções
const token = import.meta.env.VITE_TOKEN;

export const searchCities = async (term) => {
  const link = `http://api.weatherapi.com/v1/search.json?lang=pt&key=${token}&q=${term}`;

  try {
    const response = await fetch(link);
    const log = await response.json();

    if (log.length === 0) {
      window.alert('Nenhuma cidade encontrada');
      return [];
    }

    console.log(log);
  } catch {
    console.error('Houve um erro de execução na busca por cidades');
  }
};

export const getWeatherByCity = (/* cityURL */) => {
//   seu código aqui
};
