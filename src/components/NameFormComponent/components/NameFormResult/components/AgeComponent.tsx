interface AgeComponentProps {
	age: number;
	ageFetching: boolean;
}

const AgeComponent = ({ age }: AgeComponentProps) => (
	<li>
		<span>Average age: </span>
		<b>{age} years</b>
	</li>
);

export default AgeComponent;
