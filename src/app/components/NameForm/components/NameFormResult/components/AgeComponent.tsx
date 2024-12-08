import Image from "next/image";
import SVGSpinner from "/public/svg-spinner.svg";

interface AgeComponentProps {
	age: number;
	ageFetching: boolean;
}

const AgeComponent = ({ age, ageFetching }: AgeComponentProps) => (
	<li>
		<h3>Age</h3>
		{ageFetching ? <Image src={SVGSpinner} alt='Spinner Icon' height={24} width={24} /> : <p>{age}</p>}
	</li>
);

export default AgeComponent;
