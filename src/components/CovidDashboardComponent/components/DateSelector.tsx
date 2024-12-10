"use client";

import styles from "./DateSelector.module.scss";

const { dateSelectorContainer } = styles;

interface IDataSelectorProps {
	dateRange: [string, string];
	onDateRangeChange: (newDateRange: [string, string]) => void;
}

const DateSelector = ({ dateRange, onDateRangeChange }: IDataSelectorProps) => {
	const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onDateRangeChange([event.target.value, dateRange[1]]);
	};

	const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onDateRangeChange([dateRange[0], event.target.value]);
	};

	return (
		<div className={dateSelectorContainer}>
			<label>
				Start Date:
				<input type='date' value={dateRange[0]} onChange={handleStartDateChange} />
			</label>
			<label>
				End Date:
				<input type='date' value={dateRange[1]} onChange={handleEndDateChange} />
			</label>
		</div>
	);
};

export default DateSelector;
