import Dropdown from 'features/Dropdown/Dropdown';
import MissingApi from 'components/MissingApi/MissingApi';
import DetailsContainer from 'components/DetailsContainer/DetailsContainer';

import { APIKEY } from 'utils/axios';

function App() {
	if (!APIKEY) {
		<MissingApi />;
	}
	return (
		<div className="App">
			<Dropdown />
			<DetailsContainer />
		</div>
	);
}

export default App;
