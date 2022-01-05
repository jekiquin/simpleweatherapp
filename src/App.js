import Dropdown from 'features/Dropdown/Dropdown';
import MissingApi from 'components/MissingApi/MissingApi';
import DetailsContainer from 'components/DetailsContainer/DetailsContainer';

import { APIKEY } from 'services/weatherApi';

function App() {
	if (!APIKEY) {
		<MissingApi />;
	}
	return (
		<div className="App container px-4 my-4 mx-auto text-xs md:text-sm md:my-8 lg:text-base">
			<Dropdown />
			<DetailsContainer />
		</div>
	);
}

export default App;
