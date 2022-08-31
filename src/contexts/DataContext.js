import { createContext } from "react";
import { getDataWeather } from "../services/Resquest";
import { useState } from "react";

const DataContext = createContext();

const KEY_URL = "cdf5088f34f1d5906b667fa67b8c6016";

const DataProvider = ({ children }) => {
	const [dataWeather, setDataWeather] = useState({});

	const DatasWeather = async (city, key) => {
		const respone = await getDataWeather(city, key);
		if (respone && respone.data) {
			setDataWeather(respone.data);
		}
	};

	const Datas = {
		KEY_URL,
		DatasWeather,
		dataWeather,
	};

	return <DataContext.Provider value={Datas}>{children}</DataContext.Provider>;
};

export { DataContext, DataProvider };
