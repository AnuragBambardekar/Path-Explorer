import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  try {
    const {data: { data }} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      },
    })
    return data
  }
  catch(error) {
    console.log(error)
  }
}

/* export const getWeatherData = async (lat, lng) => {
  try {
    if (lat && lng) {
      //console.log(lat)
      //console.log(lng)
      let coords = lat + "," + lng
      //console.log(coords)
      const { data } = await axios.get('https://weatherapi-com.p.rapidapi.com/current.json', {
        params: {q: coords},
        headers: {
          'X-RapidAPI-Key': '',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        },
      });
      //console.log(data.location.lat)
      //console.log(data.location.lon)
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}; */

export const getWeatherData = async (lat, lng) => {
  try {
    if (lat && lng) {
      const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {lat: lat, lon: lng, appid: ''},
      });
      //console.log(data.coord.lat)
      //console.log(data.coord.lon)
      //console.log(data.weather[0].icon)
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

/* export const getWeatherData = async (lat, lng) => {
  try {
    const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
    console.log(apiKey)
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=""`
    );

    return data;
  } catch (error) {
    console.log(error);
  }
}; */