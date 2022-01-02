import Dropdown from 'features/Dropdown/Dropdown';
import MissingApi from 'components/MissingApi/MissingApi';
import DetailsContainer from 'components/DetailsContainer/DetailsContainer';

import { APIKEY } from 'services/weatherApi';

function App() {
	if (!APIKEY) {
		<MissingApi />;
	}
	return (
		<div className="App container mx-auto">
			<Dropdown />
			<DetailsContainer />
		</div>
	);
}

export default App;
