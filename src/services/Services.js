import axios from "axios";

const instane = axios.create({
	baseURL: "https://api.openweathermap.org/data/2.5",
});

export default instane;
