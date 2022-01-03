import { gotoPage } from 'features/Pagination/paginationSlice';
import { useDispatch } from 'react-redux';

export default function PageButton({ value, label }) {
	const dispatch = useDispatch();

	const setPage = ({ target }) => {
		dispatch(gotoPage(Number(target.value)));
	};

	return (
		<button
			className="h-8 w-8 border-r border-black last:border-r-0"
			value={value}
			onClick={setPage}>
			{label}
		</button>
	);
}
