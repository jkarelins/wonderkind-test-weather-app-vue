import axios from "axios";
const baseUrl = 'https://api.weatherbit.io/v2.0/forecast/daily';

export const getWeather = ({ commit }, {country, cityName}) => {
  if (country && cityName) {
    axios.get(`${baseUrl}?city=${cityName}&country=${country}&days=11&key=e2d2dde34f514c17b92305e41f156cff`)
      .then(data => {
        commit('weatherReceived', data);
      })
      .catch(err => console.log(err));
  } else {
    console.log('Not enough data')
  }
}

export const resetSearch = ({ commit }) => {
  commit('resetSearch');
}