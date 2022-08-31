import axios from "./Services";

const getDataWeather = (city, key) => {
	return axios
		.get(`/weather?q=${city}&units=metric&appid=${key}`)
		.catch((error) => console.log(error));
};

export { getDataWeather };
