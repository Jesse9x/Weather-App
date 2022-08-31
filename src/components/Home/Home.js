import { useContext, useState } from "react";
import { DataContext } from "../../contexts/DataContext";

import "./Home.scss";
import Weather from "../../assets/image/weather.svg";
import Contents from "../Contents/Contens";
import { toast } from "react-toastify";

const Home = () => {
	const { KEY_URL, DatasWeather, dataWeather } = useContext(DataContext);

	const [city, setCity] = useState("");

	const [hideShow, setHideShow] = useState(true);

	const handleSubmitData = () => {
		DatasWeather(city, KEY_URL);
		setCity("");
		if (dataWeather) {
			setHideShow(false);
			toast.success("Location Search Successful");
		}
	};

	const handleClickBack = () => {
		setHideShow(true);
	};

	const handleKeyBoard = (e) => {
		if (e.key === "Enter") {
			if (dataWeather) {
				DatasWeather(city, KEY_URL);
				setCity("");
				setHideShow(false);
				toast.success("Location Search Successful");
			}
		}
	};

	return (
		<div className='container-fluid'>
			<div className='weather-search'>
				<div className='weather-title' onClick={handleClickBack}>
					React Weather App
				</div>
				{hideShow === true ? (
					<>
						<div className='weather-img'>
							<img src={Weather} alt='Weather' />
						</div>
						<div className='weather-title-form'>Find Weather Of Your City</div>
						<form className='weather-form'>
							<input
								value={city}
								type='text'
								placeholder='Type.....'
								onChange={(e) => setCity(e.target.value)}
								onKeyPress={(e) => handleKeyBoard(e)}
							/>
							<button type='button' onClick={handleSubmitData}>
								Search
							</button>
						</form>
					</>
				) : (
					<>
						<Contents />
					</>
				)}
			</div>
		</div>
	);
};

export default Home;
