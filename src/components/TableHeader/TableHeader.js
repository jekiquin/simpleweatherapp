import { v4 as uuid } from 'uuid';

const HEADERS = ['Date', 'Temp', 'Min Temp', 'Max Temp', 'Wind', 'Description'];

export default function TableHeader() {
	const headerCustomStyle = (header) => (header.search(/Max|Min/g) >= 0 ? 'hidden md:block' : '');
	return (
		<div className="table-container">
			{HEADERS.map((header) => (
				<p
					className={`table-data bg-gray-400 text-white ${headerCustomStyle(header)}`}
					key={uuid()}>
					{header}
				</p>
			))}
		</div>
	);
}
