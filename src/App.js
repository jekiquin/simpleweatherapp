import Dropdown from 'features/Dropdown/Dropdown';
import MissingApi from 'components/MissingApi/MissingApi';
import { APIKEY } from 'utils/axios';

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
