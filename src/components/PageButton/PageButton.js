import { gotoPage } from 'features/Pagination/paginationSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentPage } from 'features/Pagination/paginationSlice';

export default function PageButton({ value, label }) {
	const currentPage = useSelector(selectCurrentPage);
	const dispatch = useDispatch();

	const setPage = ({ target }) => {
		console.log(target.value);
		dispatch(gotoPage(Number(target.value)));
	};

	const buttonStyle = currentPage.toString() === label ? 'bg-gray-200' : '';

	return (
		<button
			className={`h-8 w-8 border-r border-black last:border-r-0 ${buttonStyle}`}
			value={value}
			onClick={setPage}>
			{label}
		</button>
	);
}
