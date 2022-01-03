import PageButton from 'components/PageButton/PageButton';
import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentPage, selectTotalPages } from './paginationSlice';
import { v4 as uuid } from 'uuid';

const PAGESBUTTONS = 5;

export default function Pagination({ listLength }) {
	const currentPage = useSelector(selectCurrentPage);
	const totalPages = useSelector(selectTotalPages);
	const [startPage, setStartPage] = useState(1);

	useEffect(() => {
		if (totalPages - currentPage >= PAGESBUTTONS) {
			setStartPage(currentPage);
		} else {
			setStartPage(totalPages - PAGESBUTTONS + 1);
		}
	}, [currentPage, totalPages]);

	const buttonsToDisplay = useMemo(() => Math.min(totalPages, PAGESBUTTONS), [totalPages]);

	const pagesButton = Array(buttonsToDisplay)
		.fill(null)
		.map((_curr, idx) => {
			const value = `${startPage + idx}`;
			return <PageButton key={value} value={value} label={value} />;
		});

	return (
		<div className="flex m-4 float-right border border-black rounded-lg overflow-hidden">
			<PageButton value="1" label="<<" />
			{pagesButton}
			<PageButton value={totalPages} label=">>" />
		</div>
	);
}
