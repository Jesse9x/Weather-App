import Home from "./components/Home/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
	return (
		<div>
			<Home />

			<ToastContainer position='top-right' autoClose={2000} />
		</div>
	);
};

export default App;
