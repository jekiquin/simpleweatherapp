import PageButton from 'components/PageButton/PageButton';
import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentPage, selectTotalPages } from './paginationSlice';

const PAGESBUTTONS = 5;

export default function Pagination() {
	const currentPage = useSelector(selectCurrentPage);
	const totalPages = useSelector(selectTotalPages);
	const [startPage, setStartPage] = useState(1);

	useEffect(() => {
		if (!currentPage) return;
		if (currentPage === 1) return setStartPage(1);
		if (totalPages - currentPage + 1 <= 2) return setStartPage(totalPages - PAGESBUTTONS + 1);

		if (currentPage - startPage > 2) {
			setStartPage((prevPage) => Math.min(totalPages, prevPage + 1));
		} else {
			setStartPage((prevPage) => Math.max(1, prevPage - 1));
		}
	}, [currentPage]);

	const buttonsToDisplay = useMemo(() => Math.min(totalPages, PAGESBUTTONS), [totalPages]);

	const pagesButton = Array(buttonsToDisplay)
		.fill(null)
		.map((_curr, idx) => {
			const value = `${startPage + idx}`;
			return <PageButton key={value} value={value} label={value} />;
		});

	return (
		<div className="flex float-left justify-start m-4 border border-black rounded-lg overflow-hidden md:float-right">
			<PageButton value="1" label="<<" />
			{pagesButton}
			<PageButton value={totalPages} label=">>" />
		</div>
	);
}
