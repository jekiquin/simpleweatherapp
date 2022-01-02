import { v4 as uuid } from 'uuid';

const HEADERS = ['Date', 'Temp', 'Min Temp', 'Max Temp', 'Wind', 'Description'];

export default function TableHeader() {
	return (
		<div className="grid grid-cols-custom">
			{HEADERS.map((header) => (
				<p className="text-center border" key={uuid()}>
					{header}
				</p>
			))}
		</div>
	);
}
