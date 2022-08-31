import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";

import Sun from "../../assets/image/sun.svg";
import Humidity from "../../assets/image/humidity.svg";
import Wind from "../../assets/image/wind.svg";
import Pressure from "../../assets/image/pressure.svg";
import "./Contents.scss";

const Contents = () => {
	const { dataWeather } = useContext(DataContext);

	const times = new Date(
		dataWeather.sys
			? (dataWeather.sys.sunrise + dataWeather.timezone) * 1000
			: null
	);

	const days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	return (
		<>
			<div className='weather-clouds'>
				<div className='weather-temp'>
					{dataWeather.main ? (
						<span>{Math.floor(dataWeather.main.temp)}°C</span>
					) : null}{" "}
					| {dataWeather.weather ? dataWeather.weather[0].description : null}
				</div>

				<div className='weather-cloud'>
					<img
						src={`http://openweathermap.org/img/wn/${
							dataWeather.weather ? dataWeather.weather[0].icon : null
						}@2x.png`}
						alt='cloud'
					/>
				</div>
			</div>

			<div className='weather-city'>{`${dataWeather.name}, ${
				dataWeather.sys ? dataWeather.sys.country : null
			}`}</div>

			<div className='weather-date'>{`${
				days[times.getDay()]
			}, ${times.getDate()} / ${
				times.getMonth() + 1
			} / ${times.getFullYear()}`}</div>

			<div className='weather-description'>Weather Info</div>

			<div className='weather-infomation'>
				<div className='weather-info'>
					<img src={Sun} alt='sun' />

					<div className='weather-info-icon'>
						<span>{`${times.getHours()} : ${times.getMinutes()}`}</span>

						{times.getHours() <= 17 ? (
							<span>Sunrise</span>
						) : (
							<span>Sunset</span>
						)}
					</div>
				</div>

				<div className='weather-info'>
					<img src={Humidity} alt='humidity' />

					<div className='weather-info-icon'>
						<span>{dataWeather.main ? dataWeather.main.humidity : null}</span>

						<span>Humidity</span>
					</div>
				</div>

				<div className='weather-info'>
					<img src={Wind} alt='wind' />

					<div className='weather-info-icon'>
						<span>{dataWeather.wind ? dataWeather.wind.speed : null}</span>

						<span>Wind</span>
					</div>
				</div>

				<div className='weather-info'>
					<img src={Pressure} alt='pressure' />

					<div className='weather-info-icon'>
						<span>{dataWeather.main ? dataWeather.main.pressure : null}</span>

						<span>Pressure</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contents;
