import Dropdown from 'features/Dropdown/Dropdown';
import MissingApi from 'components/MissingApi/MissingApi';
import env from 'react-dotenv';

const APIKEY = env.API_KEY;

function App() {
	if (!APIKEY) {
		<MissingApi />;
	}
	return (
		<div className="App">
			<Dropdown />
		</div>
	);
}

export default App;
