import { useState, useEffect } from 'react';

export default function useSkip(fetchParam) {
	const [skip, setSkip] = useState(true);

	useEffect(() => {
		if (fetchParam) {
			setSkip(false);
		}
	}, [fetchParam]);

	return skip;
}
