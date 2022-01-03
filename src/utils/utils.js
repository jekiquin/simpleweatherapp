const MIDTIME = 12;

export function dateFormatter(dateTime) {
	const [date, time] = dateTime.split(' ');
	const [year, month, day] = date.split('-');
	const [hr, min, ...rest] = time.split(':');
	const actualHr = parseInt(hr) % MIDTIME || MIDTIME;
	let timeLabel = parseInt(hr) >= MIDTIME ? 'pm' : 'am';
	const dateString = `${month}/${day}/${year} @ ${actualHr
		.toString()
		.padStart(2, '0')}:${min}${timeLabel}`;
	return dateString;
}
