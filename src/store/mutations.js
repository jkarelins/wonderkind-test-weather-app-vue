export default {
  weatherReceived (state, data) {

    // - The application then averages the forecasted temperature of the next 10 days.
    state.averageNext10Days = Math.round(data.data.data
      .filter((x, i) => i!==0)
      .reduce((acc, curr)=> acc + curr.temp, 0) / 10);

    // - It also displays the temperature for the next 7 days with the day (Monday - Sunday) and the corresponding temperature.
    state.forecast = data.data.data
      .filter((x, i) => i!==0 && i <= 7)
      .map(forecast => Math.round(forecast.temp))
    state.currentLocation = {
      country: data.data.country_code, 
      cityName: data.data.city_name
    }
  },

  resetSearch (state) {
    state.forecast = null;
    state.averageNext10Days = 0;
  },

}